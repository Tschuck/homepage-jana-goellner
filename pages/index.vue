<template>
  <div class="w-full text-gray-800 vh-100 midwife-root">
    <div class="overflow-y-auto vh-100">
      <Landing />

      <AboutMe />

      <div class="flex flex-col items-center justify-center overflow-x-auto md:items-start md:flex-row">
        <Category i18nScope="pre-care">
          <template v-slot:icon-slot>
            <PreCare width="auto" height="200px" />
          </template>
        </Category>
        <Category i18nScope="after-care">
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
export default {
}
</script>


<style lang="postcss">
:root {
  --mw-primary: #a94e68;
}

.text-wm-primary {
  color: var(--mw-primary);
}

.midwife-root {
  background-color: #ffdcdc;
}

.vh-100 {
  height: 100vh;
}

@media (max-width: 756px) {
  .vh-100 {
    height: auto;
    margin-bottom: 30px;
  }
}
</style>