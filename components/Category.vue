<template>
  <div class="p-3 mt-24 text-justify bg-white md:p-10 md:mt-0 card">
    <div class="mb-8">
      <slot name="icon-slot" />
    </div>
    <h1 class="font-bold">{{ $t(`${i18nScope}.title`) }}</h1>
    <h2>{{ $t(`${i18nScope}.desc`) }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    i18nScope: { type: String },
  }
}
</script>
