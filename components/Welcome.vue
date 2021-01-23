<template>
  <div class="flex flex-col items-center justify-center mb-24 vh-100">
    <Logo width="auto" height="300px" />

    <Separator separatorId="services" :title="$t('welcome.title')" />

    <div class="p-8 bg-white card">
      <p class="text-justify" v-html="$t('welcome.text')" />
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
