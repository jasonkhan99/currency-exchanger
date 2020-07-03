import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { ExchangeRate } from './../src/currency-exchange.js';

$(document).ready(function () {
  $("#exchangeSelect").submit(function(event) {
    event.preventDefault();
    const country = $('#currencySelect').val();
    
    (async () => {
      let exchangeRate = new ExchangeRate();
      const response = await exchangeRate.getExchangeRate(country);
    })();

  });
});
