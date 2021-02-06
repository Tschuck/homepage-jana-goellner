<template>
  <div class="page">
    <Separator separatorId="imprint" />

    <div class="card">
      <div class="grid grid-cols-8">
        <b class="col-span-3 mt-4 font-bold">{{ $t('imprint.publisher') }}</b>
        <ul class="col-span-5 mt-4">
          <li>Jana Göllner</li>
          <li>Seebacher Straße 62a</li>
          <li>99848 Wutha-Farnroda</li>
        </ul>
        <b class="col-span-3 mt-4 font-bold">{{ $t('imprint.phone') }}</b>
        <span class="col-span-5 mt-4">{{ $t("contact.phone-value") }}</span>
        <b class="col-span-3 mt-4 font-bold">{{ $t('imprint.email') }}</b>
        <span class="col-span-5 mt-4">{{ $t("contact.email-value") }}</span>

        <b class="col-span-3 mt-4 font-bold">{{ $t('imprint.responsible-for-content') }}</b>
        <span class="col-span-5 mt-4">{{ $t("imprint.responsible-for-content-value") }}</span>
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
