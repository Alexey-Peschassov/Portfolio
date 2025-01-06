document.addEventListener('DOMContentLoaded', () => {
    // Навигация к "Мои работы"
    document.querySelector('a.nav_link[href="#"]').addEventListener('click', (event) => {
        event.preventDefault(); // Отключаем стандартное поведение ссылки
        document.querySelector('.conteiner > h3.text_center').scrollIntoView({
            behavior: 'smooth',
            block: 'start' // Верх текста будет совпадать с верхом окна просмотра
        });
    });

    // Навигация к "Обо мне"
    document.querySelectorAll('a.nav_link[href="#"]')[1].addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector('.about_inner > img.phot').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});


