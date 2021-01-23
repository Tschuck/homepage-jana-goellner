<template>
  <div class="border-r shadow-lg vh-100">
    <div class="flex flex-col items-center justify-start p-8">
      <div
        class="flex items-center justify-center p-5 overflow-hidden bg-pink-100 rounded-full"
        style="border: 10px solid var(--mw-primary)"
      >
        <img
          src="~/assets/img/sample.png"
          class="rounded-full"
          style="width: 200px; max-width: 100%"
        />
      </div>
      <h1 class="mt-3 text-3xl">{{ $t("side-panel.title") }}</h1>
      <h2 class="text-2xl italic text-wm-primary">{{ $t("side-panel.sub-title") }}</h2>

      <div class="flex flex-row items-center justify-center mt-4">
        <a :href="`tel:${$t('side-panel.phone-value')}`" class="mr-5">
          <font-awesome-icon class="mr-1" :icon="['fa', 'phone']" />
          <span>{{ $t("side-panel.phone-value") }}</span>
        </a>
        <a :href="`mailto:${$t('side-panel.email-value')}`">
          <font-awesome-icon class="mr-1" :icon="['fa', 'envelope']" />
          <span>{{ $t("side-panel.email-value") }}</span>
        </a>
      </div>
    </div>
<!--
    <div class="flex flex-row items-center justify-center mt-4 text-xs italic text-center text-wm-primary">
      {{ $t('side-panel.sub-1') }}
    </div>

    <div class="flex flex-row items-center justify-center text-xs italic text-center text-wm-primary">
      {{ $t('side-panel.sub-2') }}
    </div> -->

    <Navigation />
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss">
</style>