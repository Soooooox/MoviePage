const homebutton = document.getElementById('home-button');

homebutton.addEventListener(
  'click', () =>{
    window.location.href = "https://soooooox.github.io/HomePage/"
  })

/*=============== CREATE HTML ===============*/
const IMG_PATH = './images/cover/';

const container = document.getElementById("movie-container");
const detailClose = document.getElementById('detail-close')
const detailContent = document.getElementById('movie-detail')
const info = document.getElementById('info')

fetch('./db/movie.json')
  .then(response => response.json())
  .then(data => {
    // console.log(data);
    data.forEach(element => {
        const div_row = document.createElement('div');
        div_row.setAttribute('class', 'row');
		    div_row.setAttribute('id', 'row');

        const div_column = document.createElement('div');
        div_column.setAttribute('class', 'column');

        const div_card = document.createElement('div');
        div_card.setAttribute('class', 'movie-card');
		    div_card.setAttribute('id', 'movie-card');

        const center = document.createElement('center');

        const image = document.createElement('img');
        image.setAttribute('class', 'movie-img');
        image.setAttribute('id', 'img');

        const title = document.createElement('h2');
        title.setAttribute('class', 'movie-title');

        title.innerHTML = `${element.title}`;
        image.src = IMG_PATH + element.img_path;

        container.appendChild(div_row);
        div_row.appendChild(div_column);
        div_column.appendChild(div_card);
        div_card.appendChild(center);
        center.appendChild(image);
        div_card.appendChild(title);
	 
      });
    })