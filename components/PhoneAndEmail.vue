<template>
  <div>
    <a class="block mb-4" :href="`tel:${$t('contact.phone-value')}`">
      <font-awesome-icon class="mr-1" :icon="['fa', 'phone']" />
      <span class="ml-3">{{ $t("contact.phone-value") }}</span>
    </a>
    <a class="block mb-4" :href="`mailto:${$t('contact.email-link-value')}`">
      <font-awesome-icon class="mr-1" :icon="['fa', 'envelope']" />
      <span class="ml-3">{{ $t("contact.email-value") }}</span>
    </a>
  </div>
</template>
