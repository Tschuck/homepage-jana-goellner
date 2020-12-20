<template>
  <div class="flex flex-col items-center justify-center p-8 vh-100">
    <div
      class="flex items-center justify-center p-5 overflow-hidden bg-pink-100 rounded-full"
      style="border: 20px solid var(--mw-primary)"
    >
      <img
        src="~/assets/img/sample.png"
        class="rounded-full"
        style="width: 400px; max-width: 100%"
      />
    </div>
    <h1 class="mt-8 text-5xl">{{ $t("landing.title") }}</h1>
    <h2 class="text-2xl italic text-wm-primary">{{ $t("landing.sub-title") }}</h2>

    <div class="flex flex-row mt-8">
      <a :href="`tel:${$t('landing.phone-value')}`" class="mr-5">
        <font-awesome-icon class="mr-1" :icon="['fa', 'phone']" />
        <span>{{ $t("landing.phone-value") }}</span>
      </a>
      <a :href="`mailto:${$t('landing.email-value')}`">
        <font-awesome-icon class="mr-1" :icon="['fa', 'envelope']" />
        <span>{{ $t("landing.email-value") }}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss">
</style>