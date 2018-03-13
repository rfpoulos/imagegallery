var gallery = document.querySelector('.gallery');
var galleryLeft = document.querySelector('.gallery-left');
var galleryRight = document.querySelector('.gallery-right');
var images = [
  'https://images.pexels.com/photos/86933/pexels-photo-86933.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/615060/pexels-photo-615060.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/343219/pexels-photo-343219.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/376362/pexels-photo-376362.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/623376/pexels-photo-623376.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/884548/pexels-photo-884548.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/884454/pexels-photo-884454.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/881608/pexels-photo-881608.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/86933/pexels-photo-86933.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/615060/pexels-photo-615060.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/343219/pexels-photo-343219.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/376362/pexels-photo-376362.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/623376/pexels-photo-623376.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/884548/pexels-photo-884548.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/884454/pexels-photo-884454.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/881608/pexels-photo-881608.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/86933/pexels-photo-86933.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/615060/pexels-photo-615060.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/343219/pexels-photo-343219.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/376362/pexels-photo-376362.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/623376/pexels-photo-623376.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/884548/pexels-photo-884548.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/884454/pexels-photo-884454.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/881608/pexels-photo-881608.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/86933/pexels-photo-86933.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/615060/pexels-photo-615060.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/343219/pexels-photo-343219.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/376362/pexels-photo-376362.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/623376/pexels-photo-623376.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/884548/pexels-photo-884548.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/884454/pexels-photo-884454.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/881608/pexels-photo-881608.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/86933/pexels-photo-86933.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/615060/pexels-photo-615060.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/343219/pexels-photo-343219.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/376362/pexels-photo-376362.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/623376/pexels-photo-623376.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/884548/pexels-photo-884548.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/884454/pexels-photo-884454.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/881608/pexels-photo-881608.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/86933/pexels-photo-86933.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/615060/pexels-photo-615060.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/343219/pexels-photo-343219.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/376362/pexels-photo-376362.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/623376/pexels-photo-623376.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/884548/pexels-photo-884548.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/884454/pexels-photo-884454.jpeg?h=350&auto=compress&cs=tinysrgb',
  'https://images.pexels.com/photos/881608/pexels-photo-881608.jpeg?h=350&auto=compress&cs=tinysrgb',

];

var mainImage = document.createElement('img');
var target = document.getElementsByClassName('light-box')[0];
var div = document.createElement('div');
div.classList.add('main-pic');
target.appendChild(div).appendChild(mainImage);
mainImage.src = images[0];

div.addEventListener('click', function(event) {
    if (target.style.display === 'flex') {
      target.style.display = 'none';
    };
      galleryLeft.innerHTML = '';
      galleryRight.innerHTML = '';
  });
var createPic = function(index) {
  var pic = document.createElement('img');
  pic.src = images[index];
  pic.setAttribute('list-index', index);
  pic.classList.add('pic');
  pic.addEventListener('click', clickImage);
  return pic;
};
var galleryLeftImages = function(pictureIndex) {
    for (var i = pictureIndex - 1; i >= 0 && i >= pictureIndex - 5; i--) {
      var picLeft = createPic(i);
      galleryLeft.appendChild(picLeft);
    };
};
var galleryRightImages = function(pictureIndex) {
  for (var i = pictureIndex + 1; i < images.length && i <= pictureIndex + 5; i++) {
    var picRight = createPic(i);
    galleryRight.appendChild(picRight);
  };
};
var clickImage = function(event) {
    galleryLeft.innerHTML = '';
    galleryRight.innerHTML = '';
    var clicked = parseInt(event.target.getAttribute("list-index"));
    mainImage.src = event.target.src;
    target.style.display = 'flex';
    console.log(clicked);
    galleryLeftImages(clicked);
    galleryRightImages(clicked);
  };

for (var i = 0; i < images.length; i++) {
  var pic = createPic(i);
  gallery.appendChild(pic);
};
