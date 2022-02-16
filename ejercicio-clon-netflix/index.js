const list = [
	{ name: 'Star wars IV', featured: false, image: 'https://images-na.ssl-images-amazon.com/images/I/81aA7hEEykL.jpg' },
	{ name: 'Star wars V', featured: false, image: 'https://m.media-amazon.com/images/I/51nwJJf3IjL.jpg' },
	{ name: 'Star wars VI', featured: false, image: 'https://images-na.ssl-images-amazon.com/images/I/81g8vEs4ixL.jpg' },
	{ name: 'Star wars VII', featured: true, image: 'https://i.blogs.es/cacf2b/star-wars-el-despertar-de-la-fuerza-the-force-awakens-episodio-7-la-pelicula-blogdecine/1366_2000.jpg' },
	{ name: 'Star wars VIII', featured: false, image: 'https://i.blogs.es/de2a44/cartel-los-ultimos-jedi/1366_2000.jpg' },
	{ name: 'Star wars IX', featured: false, image: 'https://lumiere-a.akamaihd.net/v1/images/image_c671e2ee.jpeg?region=0,0,540,810' },
];

let text = '';

list.forEach(function(film, index) {
	text += `<div class="swiper-slide" data-index="${index}>
        <img width="100%" src="${film.image}"/>
        </div>`;
});

document.querySelector('.swiper-wrapper').innerHTML = text;

document.querySelectorAll('.swiper-slide').forEach(function(slide) {
	slide.addEventListener('click', function() {
		// Podemos recuperar la información del atributo data usando la api "dataset"
		const index = slide.dataset.index;
        const selectedMovie = list[index];

        document.querySelector('.selected-movie').innerHTML = selectedMovie.name;
	});
});


const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 30,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
