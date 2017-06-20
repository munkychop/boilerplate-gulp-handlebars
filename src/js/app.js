import _handlebars from 'hbsfy/runtime';

// Layouts
import _layout from'layouts/layout.hbs';
import _homeView from 'views/homeView.hbs';

// Partials
import _hamburgerPartial from 'components/hamburger.hbs';
import _headerPartial from 'components/header.hbs';
import _menuPartial from 'components/menu.hbs';

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
  const templateHtml = _layout(data);
  _mainContainer.innerHTML = templateHtml;
}

function renderView (viewTemplate, data) {
  const templateHtml = viewTemplate(data);
  _viewContainer.innerHTML = templateHtml;
}

function registerPartials () {
  _handlebars.registerPartial('hamburger', _hamburgerPartial);
  _handlebars.registerPartial('header', _headerPartial);
  _handlebars.registerPartial('menu', _menuPartial);
}

document.addEventListener('DOMContentLoaded', init);
