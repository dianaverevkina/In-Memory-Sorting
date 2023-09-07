/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/table.js
class Table {
  constructor(container) {
    this.container = container;
    this.tableBody = this.container.querySelector('.table__body');
    this.currentSortOrderStep = 0;
    this.data = [{
      id: 26,
      title: 'Побег из Шоушенка',
      imdb: 9.30,
      year: 1994
    }, {
      id: 25,
      title: 'Крёстный отец',
      imdb: 9.20,
      year: 1972
    }, {
      id: 27,
      title: 'Крёстный отец 2',
      imdb: 9.00,
      year: 1974
    }, {
      id: 1047,
      title: 'Тёмный рыцарь',
      imdb: 9.00,
      year: 2008
    }, {
      id: 223,
      title: 'Криминальное чтиво',
      imdb: 8.90,
      year: 1994
    }];
  }
  drawTable() {
    this.drawTableHeaders();
    this.drawFilmRates();
    this.sortFilms();
  }
  drawTableHeaders(category, arrowDirection) {
    this.tableBody.innerHTML = '';
    const headersRow = document.createElement('tr');
    headersRow.classList.add('table__row');
    headersRow.innerHTML = `
      <th class="table__column table__column-header id ${category === 'id' ? arrowDirection : ''} ">id</th>
      <th class="table__column table__column-header title ${category === 'title' ? arrowDirection : ''}">title</th> 
      <th class="table__column table__column-header year ${category === 'year' ? arrowDirection : ''}">year</th> 
      <th class="table__column table__column-header rate ${category === 'imdb' ? arrowDirection : ''}">imdb</th>
      `;
    this.tableBody.append(headersRow);
  }
  drawFilmRates() {
    const newData = this.data.map(film => `
      <td class="table__column">${film.id}</td>
      <td class="table__column">${film.title}</td>
      <td class="table__column">(${film.year})</td> 
      <td class="table__column">imdb:${film.imdb.toFixed(2)}</td>`);
    newData.forEach(film => {
      const tableRow = document.createElement('tr');
      tableRow.classList.add('table__row');
      tableRow.insertAdjacentHTML('beforeend', film);
      this.tableBody.append(tableRow);
    });
  }
  sortFilms() {
    this.sortData = ['idUp', 'idDown', 'titleUp', 'titleDown', 'yearUp', 'yearDown', 'imdbUp', 'imdbDown'];
    setInterval(() => {
      const currentSortOrder = this.sortData[this.currentSortOrderStep];
      switch (currentSortOrder) {
        case 'idUp':
          this.data.sort((a, b) => a.id - b.id);
          this.drawTableHeaders('id', 'up');
          break;
        case 'idDown':
          this.data.sort((a, b) => b.id - a.id);
          this.drawTableHeaders('id', 'down');
          break;
        case 'titleUp':
          this.data.sort((a, b) => a.title.localeCompare(b.title));
          this.drawTableHeaders('title', 'up');
          break;
        case 'titleDown':
          this.data.sort((a, b) => b.title.localeCompare(a.title));
          this.drawTableHeaders('title', 'down');
          break;
        case 'yearUp':
          this.data.sort((a, b) => a.year - b.year);
          this.drawTableHeaders('year', 'up');
          break;
        case 'yearDown':
          this.data.sort((a, b) => b.year - a.year);
          this.drawTableHeaders('year', 'down');
          break;
        case 'imdbUp':
          this.data.sort((a, b) => a.imdb - b.imdb);
          this.drawTableHeaders('imdb', 'up');
          break;
        case 'imdbDown':
          this.data.sort((a, b) => b.imdb - a.imdb);
          this.drawTableHeaders('imdb', 'down');
          break;
        default:
          break;
      }
      this.drawFilmRates();
      this.currentSortOrderStep++;
      if (this.currentSortOrderStep >= this.sortData.length) {
        this.currentSortOrderStep = 0;
      }
    }, 2000);
  }
}
;// CONCATENATED MODULE: ./src/js/showTable.js

const tableContainer = document.querySelector('.table');
const table = new Table(tableContainer);
table.drawTable();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;