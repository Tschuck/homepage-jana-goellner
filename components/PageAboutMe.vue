<template>
  <div class="page">
    <Separator separatorId="about-me" />

    <div class="card">
      <p>{{ $t("about-me.desc") }}</p>
      <h2 class="mt-8 font-bold">{{ $t("about-me.education") }}</h2>
      <p>{{ $t("about-me.education-desc") }}</p>
      <h2 class="mt-8 font-bold">{{ $t("about-me.region") }}</h2>
      <p>{{ $t("about-me.region-desc") }}</p>
      <p>{{ $t("about-me.region-list") }}</p>
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
