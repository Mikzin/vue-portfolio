<template>
  <div class="welcome">
    <h1 class="welcome__title">Привет, меня зовут Зинчук Михаил!</h1>
    <p class="welcome__text">
      Я <span class="welcome__span"> Junior Frontend Developer. </span> Изучаю
      всё, что связано с Web-технологиями и разработкой.
    </p>
    <div class="welcome__links">
      <div class="welcome__social">
        <ul class="welcome__social-list">
          <li class="welcome__social-item">
            <a
              class="welcome-social-link"
              href="https://github.com/Mikzin"
              target="blank"
            >
              <img src="../../images/git.svg" class="welcome__social-image" />
            </a>
          </li>
          <li class="welcome__social-item">
            <a
              class="welcome-social-link"
              href="https://www.linkedin.com/in/mikhail-zinchuk-ab6269252/"
              target="blank"
            >
              <img
                src="../../images/linkedin.svg"
                class="welcome__social-image"
              />
            </a>
          </li>
          <li class="welcome__social-item">
            <a class="welcome-social-link" href="mailto: mik.zinchuk@gmail.com">
              <img src="../../images/write.svg" class="welcome__social-image" />
            </a>
          </li>
        </ul>
        <base-button>
          <img src="../../images/cv.svg" />
          <a
            href="../../images/CV.pdf"
            class="cv-link"
            download="CV-Zinchuk.pdf"
          >
            Скачать резюме</a
          >
        </base-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.welcome {
  max-width: 510px;
  padding: 24px;
}

.welcome__title {
  font-weight: 700;
  font-size: 48px;
  line-height: 60px;
  letter-spacing: -0.03em;
}

.welcome__text {
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.02em;
}

.welcome__span {
  color: #bf7506;
}

.welcome__social-list {
  list-style: none;
  padding-left: 0;
  display: flex;
  gap: 8px;
}

.welcome__social-image {
  padding: 8px;
}

.welcome__social {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.welcome-social-link:hover {
  opacity: 0.8;
}

.cv-link {
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #211b12;
}

@media screen and (max-width: 700px) {
  .welcome__title {
    font-size: 30px;
    line-height: 36px;
  }
}
</style>
