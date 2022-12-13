<template>
  <Carousel :itemsToShow="4" :wrapAround="true" :transition="300">
    <!-- <div class="carousel__item">{{ slide }}</div> -->
    <base-card
      v-for="project in projects"
      :key="project.title"
      :title="project.title"
      :description="project.description"
      :badges="project.badges"
      :image="project.image"
      :codeLink="project.codeLink"
      :demoLink="project.demoLink"
    ></base-card>

    <template #addons>
      <Pagination />
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Pagination, Navigation } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

import BaseCard from './BaseCard.vue';
import Omnifood from '../../images/omnifood.png';
import Mesto from '../../images/mesto.png';
import Todo from '../../images/todo.png';
import Monster from '../../images/monster.png';
import FriendContact from '../../images/FriendContact.png';
import Modesto from '../../images/modesto.png';
import HowTo from '../../images/how-to-study.png';
import Organic from '../../images/organick.png';
import RememberMe from '../../images/Learningresources.png';
import Vueshop from '../../images/Vueshop.png';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Autoplay',
  components: {
    Carousel,
    // Slide,
    Pagination,
    Navigation,
    BaseCard,
  },
  data() {
    return {
      projects: [
        {
          title: 'Omnifood',
          description: 'Omnifood это проект о доставке здоровой еды',
          badges: ['HTML', 'CSS', 'JavaScript'],
          image: Omnifood,
          codeLink: 'https://github.com/Mikzin/omnifood',
          demoLink: 'https://mikzin.github.io/omnifood/',
        },
        {
          title: 'Mesto',
          description:
            'Проектная работа Mesto. Основной функционал - возможность выкладывать свои карточки с фото и подписью, ставить лайки, удалять свои карточки, просматривать карточки при нажатии. Также возможно редактирование профиля и аватара.',
          badges: ['HTML', 'CSS', 'JavaScript'],
          image: Mesto,
          codeLink: 'https://github.com/Mikzin/mesto',
          demoLink: 'https://mikzin.github.io/mesto/',
        },
        {
          title: 'Todo List',
          description:
            'Проектная работа для практики ООП. Основной функционал - возможность добавлять задачи, копировать и удалять их.',
          badges: ['HTML', 'CSS', 'JavaScript'],
          image: Todo,
          codeLink: 'https://github.com/Mikzin/todo',
          demoLink: 'https://mikzin.github.io/todo',
        },
        {
          title: 'Monster slayer',
          description: 'Простая игра для практики основных концепций Vue.js',
          badges: ['HTML', 'CSS', 'JavaScript', 'Vue'],
          image: Monster,
          codeLink: 'https://github.com/Mikzin/monsterslayer',
          demoLink: 'https://mikzin.github.io/monsterslayer',
        },
        {
          title: 'Friend contact',
          description:
            'Сайт, где можно добавлять, выделять и удалять контакты друзей. Сделан для практики компонентов Vue.js',
          badges: ['HTML', 'CSS', 'JavaScript', 'Vue'],
          image: FriendContact,
          codeLink: 'https://github.com/Mikzin/friendcontact',
          demoLink: 'https://mikzin.github.io/friendcontact',
        },
        {
          title: 'Modesto Flowers',
          description: 'Сайт-визитка международной цветочной компании',
          badges: ['HTML', 'SCSS', 'JavaScript'],
          image: Modesto,
          codeLink: 'https://github.com/Mikzin/modesto',
          demoLink: 'https://mikzin.github.io/modesto',
        },
        {
          title: 'Научиться учиться',
          description: 'Проектная работа для закрепления навыков по HTML и CSS',
          badges: ['HTML', 'CSS'],
          image: HowTo,
          codeLink: 'https://github.com/Mikzin/how-to-learn',
          demoLink: 'https://mikzin.github.io/how-to-learn',
        },
        {
          title: 'Organic',
          description: 'Сайт для заказа здоровых продуктов питания',
          badges: ['HTML', 'SCSS'],
          image: Organic,
          codeLink: 'https://github.com/Mikzin/organick',
          demoLink: 'https://mikzin.github.io/organick',
        },
        {
          title: 'RememberMe',
          description: 'Сайт для сохранения учебных ресурсов',
          badges: ['HTML', 'CSS', 'JavaScipt', 'Vue'],
          image: RememberMe,
          codeLink: 'https://github.com/Mikzin/learningresources',
          demoLink: 'https://mikzin.github.io/learningresources',
        },
        {
          title: 'Vueshop',
          description: 'Сайт интернет-магазин для практики концепций Vue.js',
          badges: ['HTML', 'CSS', 'JavaScipt', 'Vue'],
          image: Vueshop,
          codeLink: 'https://github.com/Mikzin/vueshop',
          demoLink: 'https://mikzin.github.io/vueshop',
        },
      ],
    };
  },
});
</script>

<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>
