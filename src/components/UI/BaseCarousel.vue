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
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Pagination, Navigation, Slide } from 'vue3-carousel';

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
import Findcoach from '../../images/findcoach.png';
import Currency from '../../images/currency.png';
import Alef from '../../images/alef.png';
import Drag from '../../images/drag.png';
import Chewie from '../../images/chewie.png';
import Kcal from '../../images/kcal.png';

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
            'Проект Mesto. Можно выкладывать фото c подписью, ставить лайки, удалять и просматривать фото, редактировать профиль и аватар.',
          badges: ['HTML', 'CSS', 'JavaScript', 'REST'],
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
          title: 'Drag&Drop',
          description:
            'Инвентарь, где можно перемещать и удалять айтемы по сетке',
          badges: ['HTML', 'CSS', 'JavaScipt', 'Vue', 'REST'],
          image: Drag,
          codeLink: 'https://github.com/Mikzin/drag-drop',
          demoLink: 'https://mikzin.github.io/drag-drop/',
        },
        {
          title: 'Chewie',
          description: 'SPA для блога моей собаки',
          badges: ['HTML', 'CSS', 'JavaScipt', 'Vue'],
          image: Chewie,
          codeLink: 'https://github.com/Mikzin/chewie',
          demoLink: 'https://mikzin.github.io/chewie',
        },
        {
          title: 'Трекер калорий',
          description: 'Простое приложение для треккинга калорий',
          badges: ['HTML', 'CSS', 'JavaScipt', 'Vue'],
          image: Kcal,
          codeLink: 'https://github.com/Mikzin/kcal-tracker',
          demoLink: 'https://mikzin.github.io/kcal-tracker',
        },
        {
          title: 'Shop page',
          description:
            'Сайт-страница интернет магазина, сделана для практики Vue.js',
          badges: ['HTML', 'CSS', 'JavaScipt', 'Vue'],
          image: Alef,
          codeLink: 'https://github.com/Mikzin/alef',
          demoLink: 'https://mikzin.github.io/alef',
        },
        {
          title: 'Курсы валют',
          description:
            'Сайт, где можно посмотреть курсы валют и посчитать необходимые суммы',
          badges: ['HTML', 'CSS', 'JavaScipt', 'Vue', 'REST'],
          image: Currency,
          codeLink: 'https://github.com/Mikzin/currency-exchange',
          demoLink: 'https://mikzin.github.io/currency-exchange',
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
        {
          title: 'Find Coach',
          description:
            'Сайт, где можно найти ментора или самому зарегистрироваться как ментор',
          badges: ['HTML', 'CSS', 'JavaScipt', 'Vue'],
          image: Findcoach,
          codeLink: 'https://github.com/Mikzin/findcoach',
          demoLink: 'https://mikzin.github.io/findcoach',
        },
      ],
    };
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
