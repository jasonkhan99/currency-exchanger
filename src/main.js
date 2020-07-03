import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { ExchangeRate } from './../src/currency-exchange.js';

$(document).ready(function () {
  $("#exchangeSelect").submit(function(event) {
    event.preventDefault();
    
    (async () => {
      let exchangeRate = new ExchangeRate();
      const response = await exchangeRate.getExchangeRate();
      getElements(response);
    });

    const usd = parseFloat($('#usdAmount').val());
    const country = $('#currencySelect').val();
    console.log(usd);
    console.log(country);

    const getElements = function(response) {
      $('.showName').text(`${response.conversion_rates.country}`);
    };
  });
});
