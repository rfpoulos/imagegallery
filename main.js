var gallery = document.querySelector('.gallery');
var galleryLeft = document.querySelector('.gallery-left');
var images = [
  'https://images.pexels.com/photos/86933/pexels-photo-86933.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/615060/pexels-photo-615060.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/343219/pexels-photo-343219.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/376362/pexels-photo-376362.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/623376/pexels-photo-623376.jpeg?h=350&auto=compress&cs=tinysrgb'
];

var mainImage = document.createElement('img');
var target = document.getElementsByClassName('light-box')[0];
var div = document.createElement('div');
target.appendChild(div).appendChild(mainImage);
mainImage.src = images[0];

target.addEventListener('click', function(event) {
    if (target.style.display = 'flex') {
      target.style.display = 'none';
    };
    galleryLeft.innerHTML = '';
  });
var galleryLeftImages = function(pictureIndex) {
    for (var i = pictureIndex - 1; i >= 0; i--) {
        picLeft = document.createElement('img');
        picLeft.src = images[i];
        picLeft.listIndex = 0;
        picLeft.classList.add('pic-left');
        galleryLeft.appendChild(picLeft);
        picLeft.addEventListener('click', clickImage);
    };
};
var clickImage = function(event) {
    console.log(event);
    let listIndex = 
    mainImage.src = event.target.src;
    target.style.display = 'flex';
    galleryLeftImages(event.target.listIndex);
  };
var count = 0;
for (var i = 0 + count; i < images.length + count && i < 5; i++) {
  var pic = document.createElement('img');
  pic.src = images[i];
  pic.listIndex = i;
  pic.classList.add('pic');
  gallery.appendChild(pic);
  pic.addEventListener('click', clickImage);
};