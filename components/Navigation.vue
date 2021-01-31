<template>
  <div class="nav-panel">
    <div
      class="nav"
      v-for="nav in navList"
      :key="nav.id"
      @click="scrollToId(nav.id)"
      :class="{
        active: activeNav === nav.id,
      }"
    >
      <div class="flex items-center justify-center w-12">
        <font-awesome-icon :icon="nav.icon" />
      </div>
      <span class="md:ml-3">{{ $t(`${nav.id}.title`) }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    i18nScope: { type: String },
  },
  data: () => {
    const navList = [
      { id: 'welcome', icon: ['fa', 'home'] },
      { id: 'services', icon: ['fa', 'handshake'] },
      { id: 'about-me', icon: ['fa', 'user'] },
      { id: 'contact', icon: ['fa', 'phone'] },
      { id: 'imprint', icon: ['fa', 'sticky-note'] },
    ];
    const activeNav = navList[0].id;

    return {
      activeNav,
      navList,
    };
  },
  beforeMount() {
    this.scrollEl = document.getElementById('content-scroll');

    this.onScroll = () => {
      const rectStart = this.scrollEl.scrollTop;
      const rectEnd = this.scrollEl.scrollTop + window.innerHeight;

      for (let i = 0; i < this.navList.length; i += 1) {
        const el = document.getElementById(this.navList[i].id);
        const elStart = el.offsetTop + el.offsetHeight;
        if (rectStart < elStart && rectEnd > elStart) {
          this.activeNav = this.navList[i].id;
          return;
        }
      }
    };

    this.scrollEl.addEventListener('scroll', this.onScroll.bind(this));
    this.onScroll();
  },
  beforeDestroy() {
    this.scrollEl.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    scrollToId(id) {
      this.scrollEl.scrollTo({
        top: document.getElementById(id).offsetTop,
        behavior: 'smooth',
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
  transition: 0.3s ease-out border;
}

.nav svg {
  transition: 0.3s ease-out color;
}

.nav {
  @apply p-4 w-full cursor-pointer pl-4 flex;

  svg {
    font-size: 1.3rem;
  }
}

.nav svg {
  font-size: 1.3rem;
}

@media (min-width: 768px) {
  .nav {
    &.active {
      border-right: 8px solid var(--mw-primary);
    }

    border-right: 8px solid transparent;

    &:hover {
      @apply border-gray-300;

      background-color: var(--mw-bg-light);
    }
  }
}

@media (max-width: 767px) {
  .nav-panel {
    @apply flex flex-row border-t h-12;

    background-color: #fff;
    position: fixed;
    z-index: 20;
    bottom: 0;
    left: 0;
  }

  .nav {
    @apply flex items-center;
  }

  .nav > div {
    width: 100%;
  }

  .nav span {
    display: none;
  }

  .nav.active {
    background-color: var(--mw-primary);
    color: #fff;
  }
}

</style>