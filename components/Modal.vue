<template>
  <div>
    <div
      class="card modal"
      style="top: 5%; bottom: 5%; width: 800px;"
      v-if="show"
    >
      <slot />

      <div class="flex justify-center">
        <button class="button primary" @click="$emit('close')">
          {{ $t('close') }}
        </button>
      </div>

      <button class="absolute top-0 right-0 p-4" @click="$emit('close')">
        <font-awesome-icon class="mr-1 text-xl" :icon="['fa', 'times']" />
      </button>
    </div>

    <div
      class="modal-backdrop"
      v-if="show"
      @click="$emit('close')"
    />
  </div>
</template>
<script>
export default {
  props: {
    show: { type: Boolean },
  }
}
</script>

<style lang="postcss">
.modal {
  @apply fixed left-0 right-0 p-5 mx-auto overflow-y-auto;

  z-index: 120;
}

.modal-backdrop {
  @apply fixed top-0 bottom-0 left-0 right-0 z-10 opacity-50 bg-gray-600;

  z-index: 100;
}
</style>
