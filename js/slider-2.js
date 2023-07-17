$('.buying__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    dots:true,
    adaptiveHeight:true,
    responsive: [

        {
            breakpoint:2048,
            settings:"unslick"
        },
        {
            breakpoint: 1000,
            settings: "slick",
        },
    
    ]
  });