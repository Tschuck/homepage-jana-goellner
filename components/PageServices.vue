<template>
  <div class="page">
    <Separator separatorId="services" />

    <IconCard i18nScope="pre-care" class="mb-12">
      <template v-slot:icon-slot>
        <PreCare width="auto" height="180px" />
      </template>
    </IconCard>
    <IconCard i18nScope="after-care" class="mb-12">
      <template v-slot:icon-slot>
        <AfterCare width="auto" height="180px" />
      </template>
    </IconCard>
    <IconCard i18nScope="others">
      <template v-slot:icon-slot>
        <Others width="auto" height="180px" />
      </template>
    </IconCard>
  </div>
</template>

<script>
export default {
  props: {
    i18nScope: { type: String },
  },
};
</script>
