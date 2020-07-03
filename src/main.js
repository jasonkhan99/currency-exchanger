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
      const checkArray = Object.keys(response.conversion_rates);
      console.log(checkArray);
      if(!response) {
        $("#errorMessage").html("<p>There has been an error processing your request<p>");
      } else if (Number.isNaN(usd)) {
        $("#errorMessage").html("<p>Please enter a number<p>");
      } else if (!checkArray.includes(country)) {
        $("#errorMessage").html("<p>We do not have info on this Country<p>");
      } else {
        $("#errorMessage").html("<p>"+response.conversion_rates.country+"</p>");
      }
    })();
    
  });
});