<template>
  <div class="flex flex-col items-center justify-center">
    <Category i18nScope="pre-care" class="mb-8">
      <template v-slot:icon-slot>
        <PreCare width="auto" height="200px" />
      </template>
    </Category>
    <Category i18nScope="after-care" class="mb-8"
      >>
      <template v-slot:icon-slot>
        <AfterCare width="auto" height="200px" />
      </template>
    </Category>
    <Category i18nScope="acupuncture">
      <template v-slot:icon-slot>
        <Acupuncture width="auto" height="200px" />
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
