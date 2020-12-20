<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    :style="`height: ${height}; width: ${width}; margin: auto;`"
  >
    <slot />
  </svg>
</template>
<script>

export const iconProps = {
  color: { type: String, default: 'var(--mw-primary)' },
  width: { type: String, default: '100%' },
  height: { type: String, default: 'auto' },
};

export default {
  props: { ...iconProps },
}
</script>
