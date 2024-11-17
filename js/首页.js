const nav = document.querySelector(".nav");
			
			const fixNav = () => {
			  if (window.scrollY > nav.offsetHeight + 150) nav.classList.add("active");
			  else nav.classList.remove("active");
			};
			
			window.addEventListener("scroll", fixNav);
			
			
			document.addEventListener('DOMContentLoaded', function () {
			    const imgElement = document.getElementById('img01');
			    const images = [
			        'img/轮播图01.jpg',
			        'img/轮播图02.jpg',
			        'img/轮播图03.jpg',
			        'img/轮播图04.jpg',
			        'img/轮播图05.jpg'
			    ];
			    let index = 0;
			
			    function showNextImage() {
			        imgElement.classList.add('hidden');
			        setTimeout(() => {
			            imgElement.src = images[index];
			            imgElement.classList.remove('hidden');
			            index = (index + 1) % images.length;
			        }, 1000);
			    }
			
			    showNextImage();
			    setInterval(showNextImage, 5000);
			});