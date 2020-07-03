# _Currency Exchanger_

#### _A webpage that exchanges currencies_

#### By _**Jason Khan**_

## Description

_This webpage will take an amount enetered in US dollars and use the Exchange Rate API to give your currency back in various countries._

### Specs
| Spec | Input | Output |
| :----- | :------ | :------ |
| The program will take user inputted USD amount and user inputted choice of currency and make an API call to determine exchange rate | 100.00 USD / EUR | None |
| The program will display an error if the API call results in an error | 100.00 USD / EUR / Submit | 404 Not Found |
| The program will display an error if the user chooses a currency that does not exist | 100. USD / GGG / Submit | That currency does not exist | 
| The program will calculate and return the amount in the chosen currency | 100.00 USD | 88.94 EUR |

## Setup/Installation Requirements

* _Visit the following link: https://github.com/jasonkhan99/currency-exchanger.git_
* _Clone the repository to your desired directory._
* _Go to https://www.exchangerate-api.com/ and create a free account to get an API key_
* _create a .env file in the currency-exchange directory and add API_KEY = {PUT YOUR API KEY YOU GOT FROM EXCHANGE RATE HERE} to it.
* _OR_
* _Visit here: _

## Known Bugs

_No Known Bugs_

## Support and contact details

_https://github.com/jasonkhan99_

## Technologies Used

HTML
CSS
Javascript
Jquery

### License

*GPL license distribution*

Copyright (c) 2020 **_Jason Khan_**
