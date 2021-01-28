<template>
  <div class="border-r shadow-lg vh-100" id="sidepanel">
    <div class="flex-col items-center justify-start hidden p-8 md:flex">
      <div
        class="flex items-center justify-center p-2 overflow-hidden rounded-full"
        style="border: 5px solid var(--mw-primary)"
      >
        <img
          src="~/assets/img/sample.png"
          class="rounded-full"
          style="width: 150px; max-width: 100%"
        />
      </div>
      <h1 class="mt-3 text-5xl font-cursive text-wm-secondary">{{ $t("side-panel.title") }}</h1>
      <h2 class="text-2xl font-straight" style="margin-top: -10px;">{{ $t("side-panel.sub-title") }}</h2>

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

    <div class="fixed z-20 flex justify-between w-full h-12 shadow-lg md:hidden border-bottom t-0">
      <div class="flex items-center justify-center">
        <img
          src="~/assets/img/sample.png"
          class="mx-3 rounded-full"
          style="width: 40px; height: 40px"
        />

        <h2 class="text-2xl font-straight">{{ $t("side-panel.title") }} {{ $t("side-panel.sub-title") }}</h2>
      </div>

      <div class="flex">
        <a class="flex items-center justify-center w-12 h-full border-l" :href="`tel:${$t('side-panel.phone-value')}`">
          <font-awesome-icon class="text-2xl " :icon="['fa', 'phone']" />
        </a>
        <a class="flex items-center justify-center w-12 h-full border-l" :href="`mailto:${$t('side-panel.email-value')}`">
          <font-awesome-icon class="text-2xl" :icon="['fa', 'envelope']" />
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