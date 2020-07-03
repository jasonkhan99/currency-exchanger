import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { ExchangeRate } from './../src/currency-exchange.js';

$(document).ready(function () {
  $("#exchangeSelect").submit(function(event) {
    event.preventDefault();
    
  });
});
