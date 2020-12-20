<template>
  <div class="w-full text-gray-800 vh-100 midwife-root">
    <div class="overflow-y-auto vh-100">
      <Landing />

      <div class="flex flex-col items-center justify-center overflow-x-auto md:flex-row">
        <Category i18nScope="after-care">
          <template v-slot:icon-slot>
            <StorkIcon width="auto" height="200px" />
          </template>
        </Category>
        <Category i18nScope="pre-care">
          <template v-slot:icon-slot>
            <HandsHearth width="auto" height="200px" />
          </template>
        </Category>
      </div>
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
  /* background-image: linear-gradient(to bottom left,#fff5f7, #fed7e2); */
  background: #ffdcdc;
}

.vh-100 {
  height: 100vh;
}
</style>