<template>
  <div class="flex flex-col items-center justify-center">
    <Separator separatorId="services" :title="$t('services.title')" />

    <Category i18nScope="pre-care" class="mb-16">
      <template v-slot:icon-slot>
        <PreCare width="auto" height="200px" />
      </template>
    </Category>
    <Category i18nScope="after-care" class="mb-16"
      >>
      <template v-slot:icon-slot>
        <AfterCare width="auto" height="200px" />
      </template>
    </Category>
    <Category i18nScope="others">
      <template v-slot:icon-slot>
        <Others width="auto" height="200px" />
      </template>
    </Category>
  </div>
</template>

<script>
export default {
  props: {
    i18nScope: { type: String },
  },
};
</script>
