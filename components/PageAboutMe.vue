<template>
  <div class="page">
    <Separator separatorId="about-me" />

    <div class="card">
      <p>{{ $t("about-me.desc") }}</p>

      <div class="timeline h-42">
        <div class="line-connector" />

        <div
          class="flex items-center"
          v-for="(year, index) in years"
          :key="index"
          :class="{
            'mt-8': index !== 0,
          }"
        >
          <div class="bubble">{{ $t(year) }}</div>
          <span class="ml-6">{{ $t(`about-me.years.${index}`) }}</span>
        </div>
      </div>

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
  data: () => {
    console.log(this);
    const years = [2013, 2013, 2014, 2014, 'today'];

    return {
      years,
    };
  },
};
</script>

<style lang="postcss">
.timeline {
  @apply py-8 relative;
}

.line-connector {
  @apply pt-8 absolute;

  width: 5px;
  bottom: 1rem;
  top: 1rem;
  left: 1.6rem;
  background-color: var(--mw-primary);
}

.bubble {
  @apply rounded-full z-10 flex items-center justify-center text-xs;
  background-color: var(--mw-bg-light);
  border: 1px solid #b5b5b5;
  flex-shrink: 0;
  height: 3.5rem;
  width: 3.5rem;
}
</style>
