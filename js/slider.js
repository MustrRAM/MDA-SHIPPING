const splide = new Splide( '.splide', {
    perPage: 4,
    perMove: 1,
    pagination: false,
    breakpoints: {
      1000: {
        destroy:true
      }
    }
  } );
  
  splide.mount();

