<template>
  <div class="about" id="about">
    <img src="../../images/portrait.jpg" class="about__image" />
    <div class="about__info">
      <p class="about__intro">Приятно познакомиться,</p>
      <h3 class="about__title">Меня зовут Зинчук Михаил</h3>

      <p class="about__text">
        Я обожаю Frontend разработку! Это моя страсть, и я прекрасно чувствую
        себя в этой сфере. Для меня нет ничего более увлекательного, чем
        создание красивых и функциональных веб-сайтов. Я постоянно стремлюсь
        улучшать свои навыки и знания, чтобы стать еще лучше в своем деле.
      </p>
    </div>
  </div>
</template>

<style scoped>
.about {
  display: flex;
  gap: 56px;
  align-items: center;
  padding: 24px;
}

.about__image {
  max-width: 360px;
  max-height: 440px;
  border-radius: 20px;
}

.about__info {
  display: flex;
  flex-direction: column;
}

.about__intro {
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
  margin: 0;
}

.about__title {
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.03em;
  color: #bf7506;
  margin: 0;
}

.about__text {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}

@media screen and (max-width: 700px) {
  .about {
    flex-direction: column;
  }
}
</style>
