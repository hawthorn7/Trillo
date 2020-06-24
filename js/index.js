var images = document.getElementsByClassName("gallery__item");
var dots = document.getElementsByClassName("gallery__navigation-item");

if(window.innerWidth < 650.001) {
    var slideIndex = 1;
    showImages(slideIndex);
} 

window.addEventListener("resize", function() {

  if(window.innerWidth > 650) {
    for (i = 0; i < images.length; i++) {
      images[i].style.display = "block";  
    }
  }
    
});   

function plusDivs(n) {
  showImages(slideIndex += n);
}

function currImage(n) {
  showImages(slideIndex = n);
}

function showImages(n) {
  var i;
  if (n > images.length) {slideIndeimages = 1}    
  if (n < 1) {slideIndeimages = images.length}
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  images[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].classList.add("active");
}