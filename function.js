setTimeout(function() {
    // Hide the preloader
    document.querySelector('.preloader').style.display = 'none';
    // Show the content
    document.querySelector('.container').style.display = 'block';
  }, 3000);


//  navbar
function menubar() {
    var hihu = document.querySelector('.menu-data');
    var element = document.getElementById('Menu-bar');

    if (hihu) {
        hihu.classList.remove('animate__fadeOut');
        element.style.display = 'none';
        hihu.style.zIndex = '1';
        hihu.classList.add('animate__fadeIn');
    }
}

function closebar() {
    var hihu = document.querySelector('.menu-data');
    var element = document.getElementById('Menu-bar');
    if (hihu) {
        hihu.classList.remove('animate__fadeIn');
        hihu.style.zIndex = '-20';
        element.style.display = 'block';
        hihu.classList.add('animate__fadeOut');
    }
}
