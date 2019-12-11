var frag = document.createDocumentFragment();
var numOfImgs = 29;

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