<template>
  <div class="card">
    <div class="mb-8">
      <slot name="icon-slot" />
    </div>
    <h1 class="mb-3 font-bold">{{ $t(`${i18nScope}.title`) }}</h1>
    <p v-html="$t(`${i18nScope}.desc`)" />
  </div>
</template>

<script>
export default {
  props: {
    i18nScope: { type: String },
  }
}
</script>

<style lang="postcss">
@font-face {
  font-family: FontCursive;
  src: url(../fonts/Cookie-Regular.ttf);
}

@font-face {
  font-family: FontStraigth;
  src: url(../fonts/PoiretOne-Regular.ttf);
}

:root {
  /* --mw-primary: #8e4c6f; */
  --mw-primary: #ec7f86;
  --mw-secondary: #51b7b6;
  /* --mw-bg-light: #dff0ef; */
  --mw-bg-light: #f5fafa;
}

body {
  height: 100vh;
}

ul.bullets {
  @apply px-4;
  list-style-type: disc;
}
</style>
