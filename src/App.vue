<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { useBreakpoint } from 'vuestic-ui'

const breakpoints = useBreakpoint()

const shownCount = computed(() => {
  if (breakpoints.xs) {
    return 1
  }
  if (breakpoints.sm) {
    return 3
  }
  if (breakpoints.md) {
    return 4
  }
  if (breakpoints.lg) {
    return 5
  }
  if (breakpoints.xl) {
    return 6
  }
  return 6
})

const playlists = computed(() => [
  {
    label: 'Spotify Playlists',
    list: [
      { label: 'Today`s Top Hits', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
      { label: 'All out 2010', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
      { label: 'Rock classic', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
      { label: 'Mega hit mix', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
      { label: 'Chill hits', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
      { label: 'Dark & stormy', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' }
    ],
  },
  {
    label: 'Focus',
    list: [
      { label: 'Peaceful piano', description: 'Relax with beautiful piano pieces'},
      { label: 'Deep focus', description: 'Keep calm and focus with ambient post-rock music' },
      { label: 'Instrumental study', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
      { label: 'Coding Mode', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
      { label: 'Beats to think', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
      { label: 'Lofi girl playlist', description: 'Will she ever finish she`s homework?' }
    ]
  }
].map((p) => {
  return {
    label: p.label,
    list: p.list.slice(0, shownCount.value)
  }
}))
</script>

<template>
  <div class="page">
    <va-sidebar text-color="secondary">
      <va-image 
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" 
        :ratio="16/9"
        contain 
        style="width: 140px; height: 4rem;"
        class="ml-3"
      />

      <nav class="mt-4" style="--va-sidebar-item-content-padding: 0.25rem 1rem">
        <va-sidebar-item v-for="item in [
            { icon: 'home', label: 'Home' },
            { icon: 'search', label: 'Search' },
            { icon: 'library_music', label: 'Your Library' },
          ]"
        >
          <va-sidebar-item-content style="min-height: 40px">
            <va-icon :name="item.icon" size="28px" class="mr-3" />
            <va-sidebar-item-title>
              {{ item.label }}
            </va-sidebar-item-title>
          </va-sidebar-item-content>
        </va-sidebar-item>

        <div class="mt-4" />

        <va-sidebar-item v-for="item in [
            { icon: 'add_box', label: 'Create Playlist' },
            { icon: 'favorite', label: 'Liked songs' },
          ]"
        >
          <va-sidebar-item-content style="min-height: 40px">
            <va-icon :name="item.icon" size="28px" class="mr-3" />
            <va-sidebar-item-title>
              {{ item.label }}
            </va-sidebar-item-title>
          </va-sidebar-item-content>
        </va-sidebar-item>
      </nav>
      <va-spacer />
      <div class="px-3 pb-4">
        <p class="va-text-secondary pb-3" style="font-size: 12px">Cookies</p>
        <p class="va-text-secondary"  style="font-size: 12px">Privacy</p>
      </div>
    </va-sidebar>
    <div class="page__right">
      <va-navbar>
        <template #left>
          <va-button class="mr-2" icon="arrow_back_ios" color="background-element" text-color="secondary" />
          <va-button icon="arrow_forward_ios" color="background-element" text-color="secondary" />
          <va-input class="ml-3" placeholder="Search" style="--va-input-border-radius: 999999px" />
        </template>
        <template #right>
          <va-button class="mr-4" size="large" preset="plain" color="secondary">Sign up</va-button>
          <va-button size="large" style="--va-button-lg-content-px: 2rem">Login</va-button>
        </template>
      </va-navbar>
      <div class="page__content playlists pa-4">
        <div v-for="{ label, list }, rowIndex in playlists">
          <div class="d-flex align-center">
            <h5 class="va-h5">{{ label }}</h5>
            <va-spacer />
            <span class="va-text-secondary">See all</span>
          </div>

          <div class="d-flex mt-2 mb-4">
            <div class="pa-2" v-for="{ label, description }, index in list" :style="{ width: `${100/list!.length}%`, boxSizing: 'border-box' }">
              <va-hover v-slot="{ hover }">
                <va-card>
                  <va-card-content>
                    <div style="position: relative">
                      <va-image
                        :src="`https://picsum.photos/400/2${rowIndex}${index}`"
                        :ratio="1"
                      />
                      <va-button v-show="hover" class="play-button" color="primary" icon="play_arrow" size="large" />
                    </div>
                    <h6 class="va-h6" style="font-size: 16px">
                      {{ label }}
                    </h6>
                    <p class="va-text-secondary va-text-truncate">
                      {{ description }}
                    </p>
                  </va-card-content>
                </va-card>
              </va-hover>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <va-card color="#af2896" gradient square>
    <div class="d-flex align-center pa-3">
      <a class="mr-2" style="color: white; font-weight: bold; text-decoration: underline;" href="https://vuestic.dev/" target="_blank">Vuestic UI</a> customization demo show case
      <va-spacer />
      <va-button href="https://vuestic.dev/" target="_blank" size="large">View docs</va-button>
    </div>
  </va-card>
</template>

<style>
#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.page {
  width: 100%;
  height: 100%;
  min-height: 500px;
  background: linear-gradient(to top, rgba(0,0,0,.6) 0, var(--va-background-top-gradient) 100%);

  display: flex;
}

.page__right {
  width: 100%;
  flex-grow: 1;
  overflow-x: hidden;
}

.play-button {
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
}
</style>
