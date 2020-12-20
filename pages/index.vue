<template>
  <div>
    <h1 class="test">{{ $t('start-page.title') }}</h1>
     <StorkIcon color="red" />
  </div>
</template>

<script>
export default {
}
</script>


<style lang="postcss">
  .test {
    @apply bg-red-500;
  }
</style>