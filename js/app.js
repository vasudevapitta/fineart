var frag = document.createDocumentFragment();
var numOfImgs = 27;

while(numOfImgs>0){
var anchor = document.createElement('a');
anchor.href = 'images/'+numOfImgs+'.jpg';
anchor.target = '_blank';
var el = document.createElement('img');
el.src = 'images/'+numOfImgs+'.jpg';
el.alt = 'vasudeva pitta\'s artwork';
el.className = 'img';
anchor.appendChild(el);
frag.appendChild(anchor);
numOfImgs--;
}

var div = document.getElementsByClassName('container')[0];
div.appendChild(frag);

/*
var frag = document.createDocumentFragment();
var numOfImgs = 23;

for(let i=1; i<=numOfImgs; i++){
var el = document.createElement('img');
el.src = `images/${i}.jpg`;
el.alt = 'image of artwork';
el.className = 'img';
frag.appendChild(el);
}

var div = document.getElementsByClassName('container')[0];
div.appendChild(frag);
*/
