
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
  
  
 