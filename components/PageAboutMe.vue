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
    const years = [
      '2013',
      '2013',
      '2014',
      '2014-since',
      '2014-2015',
      '2015-2017',
      '2018',
      'Heute',
    ];

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
  @apply rounded-full z-10 flex items-center justify-center text-xs text-center;
  background-color: var(--mw-bg-light);
  border: 1px solid var(--mw-secondary);
  flex-shrink: 0;
  height: 3.5rem;
  width: 3.5rem;
}
</style>
