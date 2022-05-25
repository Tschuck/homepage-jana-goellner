<template>
  <div class="w-full grid-cols-4 text-gray-800 md:grid vh-100 midwife-root">
    <SidePanel class="col-span-1" />
    <CookieDisclaimer />

    <div
      class="col-span-3"
      id="content-scroll"
      style="background-color: var(--mw-bg-light)"
    >
      <PageWelcome />
      <PageServices />
      <PageAboutMe />
      <PageContact />
      <PageImprint />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss">
@font-face {
  font-family: FontCursive;
  src: url(../fonts/Cookie-Regular.ttf);
}

@font-face {
  font-family: FontStraigth;
  src: url(../fonts/PoiretOne-Regular.ttf);
}

:root {
  /* --mw-primary: #8e4c6f; */
  --mw-primary: #ec7f86;
  --mw-secondary: #51b7b6;
  /* --mw-bg-light: #dff0ef; */
  --mw-bg-light: #f5fafa;
}

body {
  height: 100vh;
}

#content-scroll {
  @apply overflow-y-auto;

  @media (min-width: 768px) {
    height: 100vh;
  }

  @media (max-width: 767px) {
    @apply p-4 fixed w-full;

    top: 3rem;
    height: calc(100vh - 6rem);
  }
}

.text-wm-primary {
  color: var(--mw-primary);
}

.text-wm-secondary {
  color: var(--mw-secondary);
}

.font-cursive {
  font-family: "FontCursive", cursive;
}

.font-straight {
  font-family: "FontStraigth", cursive;
}

.bg-primary {
  @apply text-gray-300;

  background-color: var(--mw-primary);
}

.midwife-root {
  /* background-color: #fef4f7; */
  background-color: #fff;
}

.vh-100 {
  height: 100vh;
}

.container-readable {
  width: 600px;
  max-width: 100%;
}

.page {
  @apply flex flex-col items-center justify-center;

  min-height: 100vh;
}

.card {
  @apply border mb-16 p-8 bg-white shadow-md;

  width: 600px;
  max-width: 100%;

  &.bg-white {
    @apply text-gray-700;
  }

  @media (max-width: 767px) {
    @apply mb-4;
  }
}

.button {
  @apply font-semibold py-2 px-4 text-white;

  &.primary {
    background-color: var(--mw-primary);

    &:hover {
      background-color: #c76a70;
    }
  }

  &.secondary {
    background-color: var(--mw-secondary);

    &:hover {
      background-color: var(--mw-secondary);
    }
  }
}

.button-border {
  @apply bg-transparent font-semibold py-2 px-4;


  &.primary {
    border: 1px solid var(--mw-primary);

    &:hover {
      @apply text-white border-transparent;
      background-color: var(--mw-primary);
    }
  }

  &.secondary {
    border: 1px solid var(--mw-secondary);

    &:hover {
      @apply text-white border-transparent;
      background-color: var(--mw-secondary);
    }
  }
}

.button-border-secondary {
  @apply font-semibold py-2 px-4 text-white;

  background-color: var(--mw-primary);

  &:hover {
    @apply  border-transparent;
    background-color: var(--mw-secondary);
  }
}
</style>
