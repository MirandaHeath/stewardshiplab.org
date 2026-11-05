const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function debounceLeading(func, timeout) {
  if (timeout == undefined) {
    timeout = 300;
  }
  let timer;
  return (...args) => {
    if (!timer) {
      func(...args);
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
    }, timeout);
  };
}

$$('[data-poppy-trigger]').forEach(($trigger) => {
  $trigger.addEventListener('click', debounceLeading(() => {
    if ($trigger.dataset.poppyGroup) {
      $trigger.dataset.poppyActive = true;
      $$(`[data-poppy-group="${$trigger.dataset.poppyGroup}"][data-poppy-trigger]`).forEach(($candidate) => {
        if ($candidate.dataset.poppyId != $trigger.dataset.poppyId) {
          delete $candidate.dataset.poppyActive;
        }
      });
      $$(`[data-poppy-group="${$trigger.dataset.poppyGroup}"]:not([data-poppy-trigger])`).forEach(($target) => {
        $target.hidden = ($target.dataset.poppyId != $trigger.dataset.poppyId);
      });
    } else {
      $trigger.dataset.poppyActive = !$trigger.dataset.poppyActive;
      $$(`[data-poppy-id="${$trigger.dataset.poppyId}"]:not([data-poppy-trigger])`).forEach(($target) => {
        $target.hidden = !$target.hidden;
      });
    }
  }));
});
