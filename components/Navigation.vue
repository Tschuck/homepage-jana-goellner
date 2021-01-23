<template>
  <div class="nav-panel">
    <div class="nav active">
      {{ $t('navigation.start-page') }}
    </div>
    <div class="nav">
      {{ $t('services.title') }}
    </div>
    <div class="nav">
      {{ $t('about-me.title') }}
    </div>
    <div class="nav">
      {{ $t('contact.title') }}
    </div>
    <div class="nav">
      {{ $t('impressum.title') }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    i18nScope: { type: String },
  }
}
</script>

<style lang="postcss">
  .nav-panel {
    @apply w-full;
  }
  .nav {
    @apply p-4 w-full cursor-pointer pl-4;

    border-right: 8px solid transparent;

    &:hover {
      @apply border-gray-300;

      background-color: var(--mw-bg-light);
    }

    &.active {
      border-right: 8px solid var(--mw-primary);
    }
  }
</style>