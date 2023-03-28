const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

prev.addEventListener( 'click', function(){
  
    let activeItem = document.querySelector('.item.active')

    let itemToActive = activeItem.previousElementSibling

    if( activeItem.classList.contains('first') ){
        itemToActive = document.querySelector('.item.last')
    }

    activeItem.classList.remove('active')
 
    itemToActive.classList.add('active')

})

next.addEventListener( 'click', function(){
  
    let activeItem = document.querySelector('.item.active')

    let itemToActive = activeItem.nextElementSibling

    if( activeItem.classList.contains('last') ){
        itemToActive = document.querySelector('.item.first')
    }

    activeItem.classList.remove('active')

    itemToActive.classList.add('active')

})

prev.addEventListener('click', function() {
    let activeItems = document.querySelector('.items.selected');
    let itemsToActive = activeItems.previousElementSibling;
  
    if ( activeItems.classList.contains('first') ) {
      itemsToActive = document.querySelector('.items.last');
    }
  
    activeItems.classList.remove('selected');
    itemsToActive.classList.add('selected');

});

next.addEventListener('click', function() {
    let activeItems = document.querySelector('.items.selected');
    let itemsToActive = activeItems.nextElementSibling;
  
    if ( activeItems.classList.contains('last') ) {
      itemsToActive = document.querySelector('.items.first');
    }
  
    activeItems.classList.remove('selected');
    itemsToActive.classList.add('selected');
    
});

