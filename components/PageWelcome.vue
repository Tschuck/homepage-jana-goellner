<template>
  <div class="justify-start page ">
    <Logo class="mt-4 md:mt-16" width="30%" height="auto" style="max-width: 300px" />

    <Separator separatorId="welcome"/>

    <div class="bg-white card">
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
