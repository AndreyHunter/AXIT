var selector = document.getElementById("phone");

var im = new Inputmask("+380 (999999999)");
im.mask(selector);
document.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offset = 75; 
        const targetPosition = targetElement.offsetTop - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var animatedElements = document.querySelectorAll('.animated-text');

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated', 'animate__slideInLeft');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  animatedElements.forEach(function (el) {
    observer.observe(el);
  });
});
function toggleTab(element) {
    // Удалить класс "active" у всех элементов списка
    var tabs = document.querySelectorAll('.tabs-list__item');
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });

    // Добавить класс "active" только к нажатому элементу
    element.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.tabs-list__btn').forEach(function (tabsBtn) {
        tabsBtn.addEventListener('click', function (event) {
            const path = event.currentTarget.dataset.path
            console.log(path)

            document.querySelectorAll('.tabs-item').forEach(function (tabContent) {
                tabContent.classList.remove('tabs-item-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item-active')
        })
    })
})
document.addEventListener('DOMContentLoaded', function () {
  // Функция для добавления/удаления классов и инициализации Swiper
  function handleSwiper() {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // Проверяем условие: ширина экрана меньше или равна 768
    if (screenWidth <= 768) {
      const reviewsContent = document.querySelector('.reviews__content');
      const reviewsCards = document.querySelector('.reviews__cards');
      const reviewsCard = document.querySelectorAll('.reviews__card');

      // Добавляем классы
      if (reviewsContent) {
        reviewsContent.classList.add('swiper');
      }

      if (reviewsCards) {
        reviewsCards.classList.add('swiper-wrapper');
      }

      if (reviewsCard) {
        reviewsCard.forEach(function (card) {
          card.classList.add('swiper-slide');
        });
      }

      // Инициализируем Swiper
      const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        slidesPerView: 2, // Замените на ваше желаемое значение
        spaceBetween: 30,
        speed: 400,
        freeMode: true,
        allowTouchMove: true,
        keyboard: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          540: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        },
      });
    } else {
      // Если ширина экрана больше 768, удаляем классы
      const reviewsContent = document.querySelector('.reviews__content');
      const reviewsCards = document.querySelector('.reviews__cards');
      const reviewsCard = document.querySelectorAll('.reviews__card');

      // Удаляем классы
      if (reviewsContent) {
        reviewsContent.classList.remove('swiper');
      }

      if (reviewsCards) {
        reviewsCards.classList.remove('swiper-wrapper');
      }

      if (reviewsCard) {
        reviewsCard.forEach(function (card) {
          card.classList.remove('swiper-slide');
        });
      }
    }
  }

  // Вызываем функцию при загрузке страницы
  handleSwiper();

  // Вызываем функцию при изменении размера окна
  window.addEventListener('resize', function () {
    handleSwiper();
  });
});
  document.querySelector('.mobaile-menu').addEventListener('click', function () {
  this.classList.toggle('active');
  document.querySelector('.mobaile-nav').classList.toggle('open');
  });

  // Добавляем обработчик события для каждой якорной ссылки внутри мобильного меню
document.querySelectorAll('.mobaile-nav a').forEach(function (link) {
  link.addEventListener('click', function () {
    // Закрываем мобильное меню
    document.querySelector('.mobaile-menu').classList.remove('active');
    document.querySelector('.mobaile-nav').classList.remove('open');
    
    // Добавьте код для обработки якорной ссылки, если необходимо
  });
});