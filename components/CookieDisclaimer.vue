<template>
  <div class="fixed z-20" v-if="!hasRead">
    <div class="cookie-disclaimer">
      <small class="text-xs">
        {{ $t("data-security.cookie-disclaimer") }}
      </small>

      <div class="flex justify-end px-8 pt-2 text-xs">
        <button class="mr-8 font-bold primary" @click="showDataSecurity = true">
          {{ $t("data-security.read-more") }}
        </button>
        <button class="button primary" @click="markAsRead()">
          {{ $t("data-security.ok") }}
        </button>
      </div>
    </div>

    <Modal :show="showDataSecurity" @close="showDataSecurity = false">
      <DataSecurity />
    </Modal>
  </div>
</template>

<script>
export default {
  props: {
    i18nScope: { type: String },
  },
  data: () => ({
    hasRead: true,
    showDataSecurity: false,
  }),
  mounted() {
    this.hasRead = window.localStorage.getItem("midwife-cookie-read");
  },
  methods: {
    markAsRead() {
      window.localStorage.setItem("midwife-cookie-read", true);
      this.hasRead = true;
    },
  },
};
</script>

<style lang="postcss">
.cookie-disclaimer {
  @apply fixed text-justify text-white p-3 shadow-lg;
  position: fixed;
  bottom: 0;
  background-color: var(--mw-secondary);
  z-index: 50;
  left: 20%;
  right: 20%;

  @media (max-width: 767px) {
    left: 0;
    right: 0;
  }
}
</style>
