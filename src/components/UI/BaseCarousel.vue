<template>
  <Carousel
    :itemsToShow="1"
    :itemsToScroll="1"
    :wrapAround="true"
    :transition="300"
    :autoplay="3000"
    :snapAlign="center"
    :pauseAutoplayOnHover="true"
  >
    <Slide v-for="slide in projects" :key="slide">
      <base-card
        :key="slide.title"
        :title="slide.title"
        :description="slide.description"
        :badges="slide.badges"
        :image="slide.image"
        :codeLink="slide.codeLink"
        :demoLink="slide.demoLink"
      ></base-card>
    </Slide>
    <template #addons>
      <Pagination />
      <Navigation v-if="countWidth()" />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Pagination, Navigation, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

import BaseCard from './BaseCard.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    BaseCard,
  },
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
  methods: {
    countWidth() {
      if (window.innerWidth < 550) {
        return false;
      } else if (window.innerWidth > 550) {
        return true;
      }
    },
  },
});
</script>

<style>
.carousel__icon {
  fill: #bf7506;
}

.carousel__pagination {
  padding-left: 0;
}

.carousel__next {
  right: -20px;
}

.carousel__prev {
  left: -20px;
}
</style>
