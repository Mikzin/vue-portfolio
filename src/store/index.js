import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      projects: [
        {
          title: 'Omnifood',
          description: 'Omnifood это проект о доставке здоровой еды',
          badges: ['HTML', 'CSS', 'JavaScript'],
          image: require('../images/omnifood.png'),
          codeLink: 'https://github.com/Mikzin/omnifood',
          demoLink: 'https://mikzin.github.io/omnifood/',
        },
        {
          title: 'Mesto',
          description:
            'Проект Mesto. Можно выкладывать фото c подписью, ставить лайки, удалять и просматривать фото, редактировать профиль и аватар.',
          badges: ['HTML', 'CSS', 'JavaScript', 'REST'],
          image: require('../images/mesto.png'),
          codeLink: 'https://github.com/Mikzin/mesto',
          demoLink: 'https://mikzin.github.io/mesto/',
        },
        {
          title: 'Todo List',
          description:
            'Проектная работа для практики ООП. Основной функционал - возможность добавлять задачи, копировать и удалять их.',
          badges: ['HTML', 'CSS', 'JavaScript'],
          image: require('../images/todo.png'),
          codeLink: 'https://github.com/Mikzin/todo',
          demoLink: 'https://mikzin.github.io/todo',
        },
        {
          title: 'Drag&Drop',
          description:
            'Инвентарь, где можно перемещать и удалять айтемы по сетке',
          badges: ['HTML', 'CSS', 'JavaScipt', 'Vue', 'REST'],
          image: require('../images/drag.png'),
          codeLink: 'https://github.com/Mikzin/drag-drop',
          demoLink: 'https://mikzin.github.io/drag-drop/',
        },
        {
          title: 'Chewie',
          description: 'SPA для блога моей собаки',
          badges: ['HTML', 'CSS', 'JavaScipt', 'Vue'],
          image: require('../images/chewie.png'),
          codeLink: 'https://github.com/Mikzin/chewie',
          demoLink: 'https://mikzin.github.io/chewie',
        },
        {
          title: 'Трекер калорий',
          description: 'Простое приложение для треккинга калорий',
          badges: ['HTML', 'CSS', 'JavaScipt', 'Vue'],
          image: require('../images/kcal.png'),
          codeLink: 'https://github.com/Mikzin/kcal-tracker',
          demoLink: 'https://mikzin.github.io/kcal-tracker',
        },
        {
          title: 'Shop page',
          description:
            'Сайт-страница интернет магазина, сделана для практики Vue.js',
          badges: ['HTML', 'CSS', 'JavaScipt', 'Vue'],
          image: require('../images/alef.png'),
          codeLink: 'https://github.com/Mikzin/alef',
          demoLink: 'https://mikzin.github.io/alef',
        },
        {
          title: 'Курсы валют',
          description:
            'Сайт, где можно посмотреть курсы валют и посчитать необходимые суммы',
          badges: ['HTML', 'CSS', 'JavaScipt', 'Vue', 'REST'],
          image: require('../images/currency.png'),
          codeLink: 'https://github.com/Mikzin/currency-exchange',
          demoLink: 'https://mikzin.github.io/currency-exchange',
        },
        {
          title: 'Monster slayer',
          description: 'Простая игра для практики основных концепций Vue.js',
          badges: ['HTML', 'CSS', 'JavaScript', 'Vue'],
          image: require('../images/monster.png'),
          codeLink: 'https://github.com/Mikzin/monsterslayer',
          demoLink: 'https://mikzin.github.io/monsterslayer',
        },
        {
          title: 'Friend contact',
          description:
            'Сайт, где можно добавлять, выделять и удалять контакты друзей. Сделан для практики компонентов Vue.js',
          badges: ['HTML', 'CSS', 'JavaScript', 'Vue'],
          image: require('../images/FriendContact.png'),
          codeLink: 'https://github.com/Mikzin/friendcontact',
          demoLink: 'https://mikzin.github.io/friendcontact',
        },
        {
          title: 'Modesto Flowers',
          description: 'Сайт-визитка международной цветочной компании',
          badges: ['HTML', 'SCSS', 'JavaScript'],
          image: require('../images/modesto.png'),
          codeLink: 'https://github.com/Mikzin/modesto',
          demoLink: 'https://mikzin.github.io/modesto',
        },
        {
          title: 'Научиться учиться',
          description: 'Проектная работа для закрепления навыков по HTML и CSS',
          badges: ['HTML', 'CSS'],
          image: require('../images/how-to-study.png'),
          codeLink: 'https://github.com/Mikzin/how-to-learn',
          demoLink: 'https://mikzin.github.io/how-to-learn',
        },
        {
          title: 'Organic',
          description: 'Сайт для заказа здоровых продуктов питания',
          badges: ['HTML', 'SCSS'],
          image: require('../images/organick.png'),
          codeLink: 'https://github.com/Mikzin/organick',
          demoLink: 'https://mikzin.github.io/organick',
        },
        {
          title: 'RememberMe',
          description: 'Сайт для сохранения учебных ресурсов',
          badges: ['HTML', 'CSS', 'JavaScipt', 'Vue'],
          image: require('../images/Learningresources.png'),
          codeLink: 'https://github.com/Mikzin/learningresources',
          demoLink: 'https://mikzin.github.io/learningresources',
        },
        {
          title: 'Vueshop',
          description: 'Сайт интернет-магазин для практики концепций Vue.js',
          badges: ['HTML', 'CSS', 'JavaScipt', 'Vue'],
          image: require('../images/Vueshop.png'),
          codeLink: 'https://github.com/Mikzin/vueshop',
          demoLink: 'https://mikzin.github.io/vueshop',
        },
        {
          title: 'Find Coach',
          description:
            'Сайт, где можно найти ментора или самому зарегистрироваться как ментор',
          badges: ['HTML', 'CSS', 'JavaScipt', 'Vue'],
          image: require('../images/findcoach.png'),
          codeLink: 'https://github.com/Mikzin/findcoach',
          demoLink: 'https://mikzin.github.io/findcoach',
        },
      ],
      badges: [
        'HTML',
        'CSS',
        'SCSS',
        'JavaScript',
        'Vue.js',
        'Bootstrap',
        'npm',
        'Webpack',
        'REST',
        'git',
      ],
    };
  },
});

export default store;
