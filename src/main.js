
function clickBurguer() {
    const itens = document.getElementById('itens'); 
    if (itens.style.display === 'block') {
        itens.style.display = 'none';
    } else {
        itens.style.display = 'block';
    }
}



function openLightbox(imageSrc) {

    
    document.getElementById('lightbox').style.display = 'block';
    document.getElementById('lightbox-image').src = imageSrc;
  }
  
 
  function closeLightbox() {
  
    document.getElementById('lightbox').style.display = 'none';
  
  }
  
  
 
  let slideIndex = 0;
  
 
  function showSlide(n) {
    slideIndex = n;   
    displaySlide();
  }
  
 
  function plusSlides(n) {
    slideIndex += n;
    displaySlide();  
  }
  
  function displaySlide() {
  
 
    let slides = document.getElementsByClassName('lightbox-slide');  
  
   
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";   
    }
  
   
    slides[slideIndex].style.display = "block";  
  }