function Nav(){
  this._nav = $('.nav');
  this._parent = $('.header');
  this._navHeight = this._nav.outerHeight();
  this._navDefaultClass = 'nav--default';
  this._navFixedClass = 'nav--fixed';

  this.stickyMenu = function(){
    if ($(window).scrollTop() > 0 && this._nav.hasClass(this._navDefaultClass)) {
      this._nav.removeClass(this._navDefaultClass).addClass(this._navFixedClass);
      this._parent.css('padding-top', this._navHeight);
    }
    else if($(window).scrollTop() <= 0 && this._nav.hasClass(this._navFixedClass)){
      this._nav.removeClass(this._navFixedClass).addClass(this._navDefaultClass);
      this._parent.css('padding-top', 0);
    }
  }
}

var nav = new Nav();
$(window).scroll(function(){
  nav.stickyMenu();
});
nav.stickyMenu();
