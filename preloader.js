function hidePreloader() {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');
    preloader.style.display = 'none';
    content.style.display = 'block';
}