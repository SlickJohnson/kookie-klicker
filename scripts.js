/********************************

        Cookie Clicker

********************************/

// Declare default variables.
let cookieCount = 0;

// Declare DOM variables.
let cookieCounter = document.getElementById('cookie-counter');
let cookieClicker = document.getElementById('cookie-clicker');

// Increment cookieCount by value of clickPower.
cookieClicker.addEventListener("click", function() {
  cookieCount = cookieCount + clickPower;
  refreshCookieCount()
})

let refreshCookieCount = function() {
  cookieCounter.innerHTML = cookieCount;
}

/********************************

        Click Power

********************************/

// Default variables.
let clickPower = 1;
let clickPowerPriceAmount = 50;
let clickPowerLevelNumber = 1;

// Declare DOM variables.
let buyClickPower = document.getElementById('buy-click-power');
let clickPowerPrice = document.getElementById('click-power-price');
let clickPowerLevel = document.getElementById('click-power-multiple');
let clickPowerMultiple = document.getElementById('click-power-multiple');

// Buy click power.
buyClickPower.addEventListener("click", function() {
  if (cookieCount >= clickPowerPriceAmount) {
      //subtract cookies from the price of the item
      cookieCount -= clickPowerPriceAmount;
      refreshCookieCount()

      // Upgrade power level.
      clickPowerLevelNumber += 1;

      // Update click price.
      clickPowerPriceAmount = Math.floor(clickPowerPriceAmount * 1.33);

      // Update click power.
      clickPower += 1;

      // Refresh shop item.
      refreshPowerClick();
  } else {
    console.log("You don't have enough kookies!");
  }
})

let refreshPowerClick = function() {
  clickPowerLevel.innerHTML = clickPowerLevelNumber;
  clickPowerPrice.innerHTML = clickPowerPriceAmount;
}
