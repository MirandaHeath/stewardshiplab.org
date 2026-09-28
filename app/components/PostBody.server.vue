<script setup lang="ts">
import { h } from 'vue';
import type { FunctionalComponent } from 'vue';
import { MarkdownDocument } from '@comark/vue';

const props = defineProps<{ path: string, block: number }>();

const nodes = await $fetch(`/api/body${props.path}`, { query: { block: props.block } });

function anchoredHeading(tag: string) {
  const component: FunctionalComponent<{ id?: string }> = (headingProps, { slots }) => h(tag, { id: headingProps.id }, headingProps.id
    ? h('a', { href: `#${headingProps.id}` }, slots.default?.())
    : slots.default?.());
  component.props = ['id'];
  return component;
}

const components = {
  h2: anchoredHeading('h2'),
  h3: anchoredHeading('h3'),
  h4: anchoredHeading('h4'),
};
</script>

<template>
  <MarkdownDocument :value="{ nodes }" :components="components" />
</template>
