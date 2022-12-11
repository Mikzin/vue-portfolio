<template>
  <header class="header">
    <nav class="header__nav">
      <ul class="header__list">
        <li class="header__item">
          <a class="header__link" href="">Главная</a>
        </li>
        <li class="header__item">
          <a class="header__link" href="">Портфолио</a>
        </li>
        <li class="header__item">
          <a class="header__link" href="">Обо мне</a>
        </li>
        <li class="header__item">
          <a class="header__link" href="">Контакты</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  padding: 40px;
}

.header__list {
  display: flex;
  list-style: none;
  gap: 24px;
  padding-left: 0;
  padding-right: 204px;
}

.header__link {
  text-decoration: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #bf7506;
}

.header__link:hover {
  font-weight: 700;
}
</style>
