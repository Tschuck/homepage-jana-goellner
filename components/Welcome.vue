<template>
  <div class="flex flex-col items-center justify-center mb-24 vh-100">
    <div class="p-8 mt-16 bg-white card">
      <h2 class="mb-5 text-xl font-bold">{{ $t('welcome.title') }}</h2>
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
