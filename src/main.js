
function clickBurguer() {
    const itens = document.getElementById('itens'); 
    if (itens.style.display === 'block') {
        itens.style.display = 'none';
    } else {
        itens.style.display = 'block';
    }
}


// Open lightbox
function openLightbox(imageSrc) {

    // Display lightbox element
    document.getElementById('lightbox').style.display = 'block';
    document.getElementById('lightbox-image').src = imageSrc;
  }
  
  // Close lightbox
  function closeLightbox() {
  
    document.getElementById('lightbox').style.display = 'none';
  
  }
  
  
  // Image slide index
  let slideIndex = 0;
  
  // Display slide at passed index  
  function showSlide(n) {
    slideIndex = n;   
    displaySlide();
  }
  
  // Advance to next slide
  function plusSlides(n) {
    slideIndex += n;
    displaySlide();  
  }
  
  function displaySlide() {
  
    // Get slide images
    let slides = document.getElementsByClassName('lightbox-slide');  
  
    // Hide all slides 
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";   
    }
  
    // Show one slide based on index  
    slides[slideIndex].style.display = "block";  
  }