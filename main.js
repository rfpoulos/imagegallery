var $gallery = $('.gallery');
var $galleryLeft = $('.gallery-left');
var $galleryRight = $('.gallery-right');
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

var $mainImage = $('<img>', {
  'src': images[0],
});
var $target = $('.light-box');
console.log($target);
var $div = $('<div>', {
  'class': 'main-pic',
});
$target.append($div).append($mainImage);

$mainImage.click(function(event) {
      $target.remove('active');
      $galleryLeft.empty();
      $galleryRight.empty();
  });
var createPic = function(index) {
  var $pic = $('<img>', {
    'src': images[index],
    'list-index': index,
    'class': 'pic',
  });
  $pic.click(clickImage);
  return $pic;
};
var galleryLeftImages = function(pictureIndex) {
  console.log(pictureIndex);
    for (var i = pictureIndex - 1; i >= 0 && i >= pictureIndex - 5; i--) {
      var $picLeft = createPic(i);
      $galleryLeft.append($picLeft);
    };
};
var galleryRightImages = function(pictureIndex) {
  for (var i = pictureIndex + 1; i < images.length && i <= pictureIndex + 5; i++) {
    var $picRight = createPic(i);
    $galleryRight.append($picRight);
  };
};
var clickImage = function(event) {
    console.log(event.target.attributes[1].value);
    $galleryLeft.empty();
    $galleryRight.empty();
    var clicked = event.target.attributes[1].value;
    $mainImage['src'] = event.target.src;
    $target.addClass('active');
    galleryLeftImages(clicked);
    galleryRightImages(clicked);
  };

for (var i = 0; i < images.length; i++) {
  var $pic = createPic(i);
  $gallery.append($pic);
};
