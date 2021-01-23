<template>
  <div
    class="relative flex flex-col items-center justify-center w-full mb-16 overflow-hidden"
    :id="separatorId"
  >
    <h2 class="z-10 px-8 text-6xl text-accent" style="background-color: var(--mw-bg-light)">
      {{ title }}
    </h2>

    <div class="separator-line" />
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String },
    separatorId: { type: String },
  },
};
</script>

<style lang="postcss">
.separator-line {
  position: absolute;
  height: 5px;
  width: 80%;
  background-color: var(--mw-primary);
}
</style>