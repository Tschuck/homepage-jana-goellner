<template>
  <div class="flex grid w-full grid-cols-4 text-gray-800 vh-100 midwife-root">
    <SidePanel class="col-span-1" />

    <div class="col-span-3 overflow-y-auto vh-100" style="background-color: var(--mw-bg-gray)">
      <Welcome />

      <div class="flex flex-col items-center justify-center">
        <Category i18nScope="pre-care" class="mb-8">
          <template v-slot:icon-slot>
            <PreCare width="auto" height="200px" />
          </template>
        </Category>
        <Category i18nScope="after-care" class="mb-8">>
          <template v-slot:icon-slot>
            <AfterCare width="auto" height="200px" />
          </template>
        </Category>
        <Category i18nScope="acupuncture">
          <template v-slot:icon-slot>
            <Acupuncture width="auto" height="200px" />
          </template>
        </Category>
      </div>

      <div class="p-3 mt-32 text-xs italic text-center bg-gray">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
  </div>
</template>

<script>
export default { }
</script>


<style lang="postcss">
:root {
  --mw-primary: #a94e68;
  --mw-bg-gray: rgb(245, 245, 245);
}

body {
  height: 100vh;
}

.text-wm-primary {
  color: var(--mw-primary);
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