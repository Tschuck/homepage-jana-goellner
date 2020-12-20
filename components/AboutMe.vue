<template>
  <div class="flex flex-col items-center justify-center mb-24">
    <div class="p-8 text-gray-200" style="width: 500px; max-width: 100%; background-color: var(--mw-primary)">
      <h2 class="font-bold">{{ $t("about-me.title") }}</h2>
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
