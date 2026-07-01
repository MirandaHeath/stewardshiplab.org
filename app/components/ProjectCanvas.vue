<template>
  <div ref="myCanvasWrapper">
    <canvas ref="myCanvas"></canvas>
  </div>
</template>

<script setup lang="ts">
// Naming it `ref="canvas"` specifically yields a Vue warning. Interesting.
const $myCanvas = useTemplateRef('myCanvas');
const $myCanvasWrapper = useTemplateRef('myCanvasWrapper');

let $canvas = null;
let $canvasWrapper = null;
let ctx = null;

type Node = {
  cx: number // x position of center
  cy: number // y position of center
  r: number // circle radius
  vx: number // x velocity
  vy: number // y velocity
  vy_max: number // maximum y velocity
  ax: number // x acceleration
  ay: number // y acceleration
  radar_interval: number // time between radar pulses
  radar_t_to_pulse: number // time under radar pulse
  radar_pulse_duration: number // how long a pulse lasts
  radar_t_left: number // time left in radar pulse
  radar_r: number // radar radius
  radar_vr: number // radar radius velocity
  radar_ar: number // radar radius acceleration
};

type State = {
  dt: number
  tPrev: number
  nodes: Node[]
};

const state: State = {
  dt: 0,
  tPrev: new Date(),
  nodes: [],
};

function rand(min, max) {
  return Math.round(min + Math.random() * (max - min));
}

function getRandomNodeCx() {
  const n = Math.random();
  if (n < 0.4) {
    return rand(0, $canvas.width / 4);
  } else if (n < 0.8) {
    return rand($canvas.width * (3 / 4), $canvas.width);
  } else {
    return rand(0, $canvas.width);
  }
}

function generateNodes() {
  const ENT_VY = [-0.1, -0.3, -0.6];
  const ENT_VY_MAX = [0.02, 0.1, 0.2];
  const ENT_COUNT = 50;
  for (let idx = 0; idx < ENT_COUNT; idx += 1) {
    const node: Node = {
      cx: getRandomNodeCx(),
      cy: rand(0, $canvas.height),
      r: rand(10, 50),
      vx: 0.0,
      vy: ENT_VY[rand(0, ENT_VY.length - 1)],
      vy_max: ENT_VY_MAX[rand(0, ENT_VY_MAX.length - 1)],
      ax: 0.005,
      ay: 0.0,
      radar_interval: rand(40.0, 60.0),
      radar_t_to_pulse: rand(0.0, 60.0),
      radar_pulse_duration: 6.0,
      radar_t_left: 0,
      radar_r: 0,
      radar_init_vr: 0.8,
      radar_vr: 0.0,
      radar_ar: -0.006,
    };
    state.nodes.push(node);
  }
}

function draw() {
  ctx.clearRect(0, 0, $canvas.width, $canvas.height);

  state.nodes.forEach((node) => {

    ctx.beginPath();
    ctx.arc(node.cx, node.cy, node.r, 0, Math.PI * 2, false);
    ctx.strokeStyle = '#3a4de6';
    ctx.stroke();
    // const grad = ctx.createRadialGradient(node.cx, node.cy, 0, node.cx, node.cy, node.r);
    // grad.addColorStop(0.0, "#ffffff00");
    // grad.addColorStop(0.5, "#ffffff00");
    // grad.addColorStop(1.0, "#ffffff05");
    // ctx.fillStyle = grad;
    // ctx.fill();

    if (node.radar_t_left > 0) {
      ctx.beginPath();
      ctx.arc(node.cx, node.cy, Math.max(0, node.radar_r), 0, Math.PI * 2, false);
      const alpha = 0.8 - Math.max(0, Math.abs(node.r - node.radar_r) / 65);
      ctx.strokeStyle = `rgba(150, 150, 255, ${alpha})`;
      ctx.stroke();
    }
  });
}

function update() {
  state.nodes.forEach((node) => {
    if (node.radar_t_left == 0) {
      node.radar_t_to_pulse -= state.dt;
    }

    if (node.radar_t_to_pulse < 0) {
      node.radar_t_to_pulse = 0;
      node.radar_t_left = node.radar_pulse_duration;
      node.radar_r = node.r;
      node.radar_vr = node.radar_init_vr;
    }

    if (node.radar_t_left > 0) {
      node.radar_t_left -= state.dt;
      if (node.radar_vr > 0) {
        node.radar_r += node.radar_vr;
      }
      node.radar_vr += node.radar_ar;
    }

    if (node.radar_t_left < 0) {
      node.radar_t_left = 0;
      node.radar_t_to_pulse = node.radar_interval;
    }

    node.vx += node.ax;
    if (Math.abs(node.vx) > node.vy_max) {
      node.ax *= -1;
    }

    node.cx += node.vx;
    node.cy += node.vy;
    if ((node.cy + node.r) < 0) {
      node.cy = $canvas.height + node.r;
      node.cx = getRandomNodeCx();
    }
  });
}

function render() {
  const tNow = new Date();
  state.dt = (tNow - state.tPrev) / 1000;
  state.tPrev = new Date();
  draw();
  update();
  window.requestAnimationFrame(render);
}

function resizeCanvas() {
  $canvas.width = window.innerWidth;
  $canvas.height = $canvasWrapper.offsetHeight;
  draw();
}

function setupCanvas() {
  $canvas = $myCanvas.value;
  $canvasWrapper = $myCanvasWrapper.value;
  ctx = $canvas.getContext('2d');
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  generateNodes();
  window.requestAnimationFrame(render);
}

watch($myCanvas, () => {
  setupCanvas();
}, { once: true });
</script>
