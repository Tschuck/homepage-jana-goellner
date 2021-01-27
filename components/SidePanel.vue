<template>
  <div id="sidepanel">
    <div class="contact-preview">
      <div
        class="img-wrapper"
      >
        <img
          src="~/assets/img/sample.png"
          class="rounded-full user-profile"
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

    <Navigation />
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss">
#sidepanel {
  @apply border-r shadow-lg;
}

@media (min-width: 768px) {
  .contact-preview {
    @apply flex flex-col items-center justify-start p-8;
  }

  .image-wrapper {
    @apply flex items-center justify-center p-2 overflow-hidden rounded-full;

    border: 5px solid var(--mw-primary);
  }

  img.user-profile {
    width: 150px;
    max-width: 100%;
  }
}

@media (max-width: 767px) {
  .contact-preview {
    height: 50px;
    overflow: hidden;
  }

  img.user-profile {
    width: 50px;
  }
}
</style>