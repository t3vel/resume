function switchLanguage() {
    // Перемикання видимості основного контенту
    const contentEn = document.getElementById('content-en');
    const contentUa = document.getElementById('content-ua');
    const sidebarEn = document.querySelector('.sidebar');
    const sidebarUa = document.getElementById('sidebar-ua');

    if (contentEn.style.display === 'none') {

        contentEn.style.display = 'block';
        contentUa.style.display = 'none';

        sidebarEn.style.display = 'block';
        sidebarUa.style.display = 'none';

        // Змінюємо текст кнопки на "UA"
        document.getElementById('language-switch').innerText = 'UA';
    } else {

        contentEn.style.display = 'none';
        contentUa.style.display = 'block';


        sidebarEn.style.display = 'none';
        sidebarUa.style.display = 'block';

        document.getElementById('language-switch').innerText = 'EN';
    }
}
