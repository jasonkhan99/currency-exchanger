import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { getExchangeRate } from './../src/currency-exchange.js';

$(document).ready(function() {
  $("#exchangeSelect").submit(function(event) {
    event.preventDefault();
    const usd = parseFloat($('#usdAmount').val());
    const country = $('#currencySelect').val();
    console.log(usd);
    console.log(country);

    (async () => {
      const response = await getExchangeRate();
      if(!response) {
        $(".errorMessage").html("<p>There has been an error processing your request<p>");
      } else {
        $("#currencyOutput").html("<p>Boop</p>");
      }
    })();
    
  });
});