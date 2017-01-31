(function (){

  const _handlebars = require('hbsfy/runtime');
  const _layout = require('layouts/layout.hbs');
  const _homeView = require('views/homeView.hbs');
  
  let _mainContainer;
  let _viewContainer;

  function init () {
    _mainContainer = document.querySelector('#main');

    registerPartials();
    renderLayout({});

    // The view container must only be queried after the main layout has been rendered.
    _viewContainer = document.querySelector('#view-container');
    renderView(_homeView, {});
  }

  function renderLayout (data) {
    var templateHtml = _layout(data);
    _mainContainer.innerHTML = templateHtml;
  }

  function renderView (viewTemplate, data) {
    var templateHtml = viewTemplate(data);
    _viewContainer.innerHTML = templateHtml;
  }

  function registerPartials () {
    _handlebars.registerPartial('hamburger', require('components/hamburger.hbs'));
    _handlebars.registerPartial('header', require('components/header.hbs'));
    _handlebars.registerPartial('menu', require('components/menu.hbs'));
  }

  document.addEventListener('DOMContentLoaded', init);
})();
