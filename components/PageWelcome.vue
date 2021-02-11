<template>
  <div class="justify-start page ">
    <Logo class="mt-4 md:mt-16" width="30%" height="auto" style="max-width: 300px" />

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
