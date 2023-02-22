<template>
  <div class="justify-start page">
    <Logo class="p-1 mt-4 bg-white border rounded-full shadow-lg mw-logo" height="auto" />

    <Separator separatorId="welcome"/>

    <div class="bg-white card">
      <p class="text-justify" v-html="$t('welcome.text')" />

      <div class="items-center justify-center p-3 md:flex">
        <a class="block mt-4 md:mr-4 button-border secondary" :href="`tel:${$t('contact.phone-value')}`">
          <font-awesome-icon class="mr-1" :icon="['fa', 'phone']" />
          <span class="ml-3">{{ $t("contact.call-now") }}</span>
        </a>

        <a class="block mt-4 button-border secondary" :href="`mailto:${$t('contact.email-link-value')}`">
          <font-awesome-icon class="mr-1" :icon="['fa', 'envelope']" />
          <span class="ml-3">{{ $t("contact.email-now") }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    i18nScope: { type: String },
  },
};
</script>


<style lang="postcss">
.mw-logo {
  @media (min-width: 768px) {
    width: 200px !important;
  }
  @media (max-width: 767px) {
    width: 140px !important;
  }
}
</style>
