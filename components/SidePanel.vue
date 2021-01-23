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
          style="width: 150px; max-width: 100%"
        />
      </div>
      <h1 class="mt-3 text-3xl">{{ $t("side-panel.title") }}</h1>
      <h2 class="text-2xl italic text-wm-primary">{{ $t("side-panel.sub-title") }}</h2>

      <div class="w-full px-8 py-4 mt-4 border-t border-b">
        <a class="block mb-4" :href="`tel:${$t('side-panel.phone-value')}`">
          <font-awesome-icon class="mr-1" :icon="['fa', 'phone']" />
          <span class="ml-3">{{ $t("side-panel.phone-value") }}</span>
        </a>
        <a :href="`mailto:${$t('side-panel.email-value')}`">
          <font-awesome-icon class="mr-1" :icon="['fa', 'envelope']" />
          <span class="ml-3">{{ $t("side-panel.email-value") }}</span>
        </a>
      </div>
    </div>

    <Navigation />
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss">
</style>