//Burger menu
    const burger = document.querySelector('.burger');
    const menuList = document.querySelector('.menu-list');

    if (burger && menuList) {
    burger.addEventListener('click', () => {
        menuList.classList.toggle('open');
        document.body.classList.toggle('menu-open');
    }); 
    }

//Reviews slider

//Slides info
        const slides = [
            { name: 'John Doe', img: 'images/Smile.svg', text: 'Applause rebuilt our onboarding – conversion jumped 40% in a month.' },
            { name: 'Sarah Smith', img: 'images/Smile.svg', text: 'They shipped our design system in 3 weeks.' },
            { name: 'Jane Doe', img: 'images/Smile.svg', text: 'Fast, clear, no fluff. Exactly what we needed.'  },
            { name: 'Jack Smith', img: 'images/Smile.svg', text: 'Conversion up 28% after the redesign.'  }
        
        ];

    const arrowLeft = document.querySelector('.arrow-container.left');
    const arrowRight = document.querySelector('.arrow-container.right');
    const avatar = document.querySelector('.avatar img');
    const name = document.querySelector('.name');
    const review = document.querySelector('.review'); 

    if (arrowLeft && arrowRight) {
        

        //Change reviewers name
        let i = 0; 

        function sliderUpdate() {
            avatar.src = slides[i].img;
            name.textContent = slides[i].name;
            review.textContent = slides[i].text;
        }
        
        arrowRight.addEventListener('click', () => {
                i++;        
                if (i > slides.length-1) { i=0; }
                sliderUpdate();
            });

        arrowLeft.addEventListener('click', () => {
            i--;
            if (i < 0) { i= slides.length-1; }
            sliderUpdate();
        });

        sliderUpdate();
    }
//Load data for cards

const catalog = document.querySelector('.catalog');

    if (catalog) {
        fetch('products.json')
            .then(response => response.json())
            .then(data => {
                

                for (const item of data) {

                    console.log(item.name, item.color);
                    const card = document.createElement('article');

                    card.className = "card";
                    card.innerHTML = `
                    <img class="card__image card-${item.color}" src="${item.image}">
                    <div class="card__body">
                    <h3 class="card__title">${item.name}</h3>
                    <p class="card__text">${item.description}</p>
                    <span class="card__meta">from $${item.price} · 1 week</span>
                    </div>`;
                catalog.appendChild(card); 
            }
        })
            .catch(error => console.error('Ошибка:', error));
    }

// Theme change script
    
        const btn = document.getElementById('themeBtn');

        if (btn) {
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark');
            btn.textContent = '☀️';
        }

        btn.addEventListener('click', () => {
            document.body.classList.toggle('dark');

            if (document.body.classList.contains('dark')) {
                btn.textContent = '☀️';
                localStorage.setItem('theme', 'dark');
            } else {
                btn.textContent = '🌙';
                localStorage.setItem('theme', 'light');
            }
        });
    }