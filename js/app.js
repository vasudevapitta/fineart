const frag = document.createDocumentFragment();
const numOfImgs = 23;

for(let i=1; i<=numOfImgs; i++){
const el = document.createElement('img');
el.src = `images/${i}.jpg`;
el.alt = 'image of artwork';
el.className = 'img';
frag.appendChild(el);
}

const div = document.getElementsByClassName('container')[0];
div.appendChild(frag);