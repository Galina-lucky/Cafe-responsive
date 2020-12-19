;(function(){

  $(document).ready(function() {

    let menu = $('.js-menu');
    let menuBtn = $('.js-btn-toggle-menu');
    let el = $('.js-btn-toggle-menu__item');


    menuBtn.on('click', function() {
/*      if (menu.hasClass('menu--show')) {
        menu.slideUp(1000, function() {
          menu.removeClass('menu--show')
        })
      } else {
        menu.slideDown(1000, function() {
          menu.addClass('menu--show');
        })
      }*/

      menu.toggleClass('menu--show');
      console.log('Сработал клик по гамбургеру');

    });

    $(document).click(function (e) {
      console.log('Сработал клик по БАДИ');
      console.log(e.target);
      console.log('Не кнопка гамбургера '+ !menuBtn.is(e.target));
      console.log('Не спан '+ !el.is(e.target));
      console.log('Не само меню '+ !menu.is(e.target));
      console.log('имеет ли класс '+ menu.hasClass('menu--show'));


      if ( !menuBtn.is(e.target)  && !el.is(e.target)  && !menu.is(e.target) && menu.hasClass('menu--show') ) {
/*        menu.slideUp(1000, function() {
          menu.removeClass('menu--show');
        });*/
        menu.removeClass('menu--show');
        console.log('Сработал клик по БАДИ и убрать');
        
      };
    });
  });
})();