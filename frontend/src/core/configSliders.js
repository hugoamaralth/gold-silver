export const slidersConfig = {
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 4,
    centerMode: false,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
            breakpoint: 530,
            settings: {
                slidesToShow: 1,
                arrows: true
            }
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
                arrows: true
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 1525,
            settings: {
                slidesToShow: 4,
            }
        }
    ]
};