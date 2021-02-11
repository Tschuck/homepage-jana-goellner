<template>
  <div class="page">
    <Separator separatorId="imprint" />

    <div class="card">
      <b class="font-bold">{{ $t('imprint.publisher') }}</b>
      <ul>
        <li>{{ $t('imprint.responsible-for-content-value') }}</li>
        <li>{{ $t('imprint.street') }}</li>
        <li>{{ $t('imprint.city') }}</li>
      </ul>
      <b class="block mt-4 font-bold">{{ $t('imprint.phone') }}</b>
      <a class="block mb-4" :href="`tel:${$t('contact.phone-value')}`">{{ $t("contact.phone-value") }}</a>
      <b class="block mt-4 font-bold">{{ $t('imprint.email') }}</b>
      <a class="block mb-4" :href="`mailto:${$t('contact.email-link-value')}`">{{ $t("contact.email-value") }}</a>

      <b class="block mt-4 font-bold">{{ $t('imprint.responsible-for-content') }}</b>
      <span>{{ $t("imprint.responsible-for-content-value") }}</span>

      <div class="p-3 mt-8 text-xs italic text-center bg-gray">
        Icons made by
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik"
          >Freepik</a
        >
        from
        <a href="https://www.flaticon.com/" title="Flaticon" target="_blank"
          >www.flaticon.com</a
        >
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
