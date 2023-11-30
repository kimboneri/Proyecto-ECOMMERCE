export function slider(){
    
var swiper = new Swiper('.swiper-container', {
	navigation: {
	  nextEl: '.swiper-button-next1',
	  prevEl: '.swiper-button-prev1'
	},
	slidesPerView: 1,
	spaceBetween: 10,
	autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
	// init: false,
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},

  
	breakpoints: {
	  620: {
		slidesPerView: 1,
		spaceBetween: 20,
	  },
	  680: {
		slidesPerView: 2,
		spaceBetween: 40,
	  },
	  920: {
		slidesPerView: 3,
		spaceBetween: 40,
	  },
	  1240: {
		slidesPerView: 4,
		spaceBetween: 50,
	  },
	} 
    });
	var swiper1 = new Swiper('.swiper-container1', {
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev'
		},
		slidesPerView: 1,
		spaceBetween: 10,
		
		// init: false,
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		},
	
	  
		breakpoints: {
		  620: {
			slidesPerView: 1,
			spaceBetween: 20,
		  },
		  680: {
			slidesPerView: 2,
			spaceBetween: 40,
		  },
		  920: {
			slidesPerView: 3,
			spaceBetween: 40,
		  },
		  1240: {
			slidesPerView: 4,
			spaceBetween: 50,
		  },
		} 
		});
	

}
export function slider1(){
    
	
	}

	