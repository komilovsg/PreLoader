window.addEventListener('load', function() {
    // Скрываем прелоадер и отображаем содержимое страницы
    var preloader = document.getElementById('preloader');
    var content = document.getElementById('content');
    
    preloader.style.display = 'none';
    content.style.display = 'block';
  });