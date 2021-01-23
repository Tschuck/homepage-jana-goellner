<template>
  <div class="flex grid w-full grid-cols-4 text-gray-800 vh-100 midwife-root">
    <SidePanel class="col-span-1" />

    <div
      class="col-span-3 overflow-y-auto vh-100"
      style="background-color: var(--mw-bg-light)"
    >
      <Welcome />
      <Services />

      <div class="p-3 mt-32 text-xs italic text-center bg-gray">
        Icons made by
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik"
          >Freepik</a
        >
        from
        <a href="https://www.flaticon.com/" title="Flaticon"
          >www.flaticon.com</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
  --mw-primary-text: #51b7b6;
  --mw-bg-light: #dff0ef;
}

body {
  height: 100vh;
}

.text-wm-primary {
  color: var(--mw-primary);
}

.text-wm-secondary {
  color: var(--mw-primary-text);
}

.font-cursive {
  font-family: 'FontCursive', cursive;
}

.font-straight {
  font-family: 'FontStraigth', cursive;
}

.bg-primary {
  @apply text-gray-300;

  background-color: var(--mw-primary);
}

.midwife-root {
  /* background-color: #fef4f7; */
  background-color: #fff;
}

.vh-100 {
  height: 100vh;
}

.container-readable {
  width: 600px;
  max-width: 100%;
}

.card {
  @apply border;

  width: 600px;
  max-width: 100%;

  &.bg-white {
    @apply text-gray-700;
  }
}

@media (max-width: 756px) {
  .vh-100 {
    height: auto;
    margin-bottom: 30px;
  }
}
</style>