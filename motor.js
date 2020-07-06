
$(document).ready(function() {

  // Create a timeline with default parameters
  var tl = anime.timeline({
    targets: '.card',
    delay: 300,
  });
  // Add children
  tl
    .add({
      targets: '.card',
      opacity: 1,
      easing: 'linear',
      delay: anime.stagger(700)
    })
    .add({
      targets: '.card',
        opacity: 0,
        easing: 'linear',
        duration: 2000
      }
      ,'+=2000')
      .add({
        targets: '#nameside',
          opacity: 1,
          easing: 'linear',
          duration: 3000
        }
        ,'-=1')

        ///////////////////////////////////

        var animation = anime({
        targets: '.plus',
        rotate: 360,
      });

      document.querySelector('.plus').onmouseover = animation.play;

      //////////////////////////////////////


});
