<template>
  <div class="nav-panel">
    <div
      class="nav"
      v-for="id in nav"
      :key="id"
      @click="scrollToId(id)"
      :class="{
        active: activeNav === id,
      }"
    >
      {{ $t(`${id}.title`) }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    i18nScope: { type: String },
  },
  data: () => {
    const nav = ["welcome", "services", "about-me", "contact", "impressum"];
    const activeNav = nav[0];

    return {
      activeNav,
      nav,
    };
  },
  beforeMount() {
    this.scrollEl = document.getElementById("content-scroll");

    this.onScroll = () => {
      const rectStart = this.scrollEl.scrollTop;
      const rectEnd = this.scrollEl.scrollTop + window.innerHeight;

      for (let i = 0; i < this.nav.length; i += 1) {
        const el = document.getElementById(this.nav[i]);
        const elStart = el.offsetTop + el.offsetHeight;
        if (rectStart < elStart && rectEnd > elStart) {
          this.activeNav = this.nav[i];
          return;
        }
      }
    };

    this.scrollEl.addEventListener("scroll", this.onScroll.bind(this));
    this.onScroll();
  },
  beforeDestroy() {
    this.scrollEl.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    scrollToId(id) {
      this.scrollEl.scrollTo({
        top: document.getElementById(id).offsetTop,
        behavior: "smooth",
      });
    },
  },
};
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
}

@media (min-width: 768px) {
  .nav {
    &.active {
      border-right: 8px solid var(--mw-primary);
    }
  }
}

@media (max-width: 767px) {
  .nav-panel {
    @apply flex flex-row border-t;

    background-color: #fff;
    position: fixed;
    z-index: 20;
    height: 50px;
    bottom: 0;
    left: 0;
  }

  .nav {
    &.active {
      background-color: var(--mw-primary);
      color: #fff;
    }
  }
}

</style>