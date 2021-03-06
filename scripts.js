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
      clickPower += 1 * Math.floor(clickPowerLevelNumber * 1.05);

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

/********************************

          Grandmas

********************************/

// Set default values.
let grandmaAuto = false;
let grandmaPower = 50;
let grandmaPriceAmount = 500;
let grandmaLevelNumber = 0;

// Declare DOM variables.
let buyGrandma = document.getElementById('buy-grandma');
let grandmaPrice = document.getElementById('grandma-price');
let grandmaLevel = document.getElementById('grandma-level');
let grandmaMultiple = document.getElementById('grandma-multiple');

// Buy a grandma.
if (buyGrandma) {
  buyGrandma.addEventListener("click", function() {
    // Make sure we have enough cookies and subtract our cookies from the price.
    if (cookieCount >= grandmaPriceAmount) {
      // Subtract cookies from the price of the item.
      cookieCount +=  - grandmaPriceAmount;
      refreshCookieCount()

      // Upgrade power level.
      grandmaLevelNumber += 1;

      // Update price.
      grandmaPriceAmount = Math.floor(grandmaPriceAmount * 1.33);

      // Update grandma power.
      grandmaPower += 10 + Math.floor(grandmaLevelNumber * 1.33);

      // Turn autoGrandma on!.
      autoGrandma = true;
      autoGrandmaStart();

      // Refresh shop item.
      refreshGrandma();
    }
  })
}
let autoGrandmaStart = function() {
  let grandmaInt = window.setInterval(function() {
    cookieCount += grandmaPower;
    refreshCookieCount();
  }, 1000);
}

let refreshGrandma = function() {
  grandmaLevel.innerHTML = grandmaLevelNumber;
  grandmaPrice.innerHTML = grandmaPriceAmount;
  grandmaMultiple.innerHTML = grandmaPower - 10;
}

/********************************

          Facilities

********************************/

// Set default values.
let facilityAuto = false;
let facilityPower = 2000;
let facilityPriceAmount = 100000;
let facilityLevelNumber = 0;

// Declare DOM variables.
let buyFacility = document.getElementById('buy-facility');
let facilityPrice = document.getElementById('facility-price');
let facilityLevel = document.getElementById('facility-level');
let facilityMultiple = document.getElementById('facility-multiple');

// Buy a facility
buyFacility.addEventListener("click", function() {
  // Set autoLoop to false.
  facilityAuto = false;

  // Make sure we have enough cookies.
  if (cookieCount >= facilityPriceAmount) {
    cookieCount -= facilityPriceAmount;
    refreshCookieCount()

    // Upgrade power level.
    facilityLevelNumber += 1;

    // Update price.
    facilityPriceAmount = Math.floor(facilityPriceAmount * 1.33);

    // Update facility power.
    facilityPower += 600 + Math.floor(facilityLevelNumber * 1.33);

    // Turn autoFacility on!
    facilityAuto = true;
    autoFacilityStart();

    // Refresh shop item.
    refreshFacility();
  }
})

// Game loop.
let autoFacilityStart = function() {
  let facilityInt = window.setInterval(function(){
    cookieCount += facilityPower;
    refreshCookieCount();
  }, 1000);
}

// Refresh shop.
let refreshFacility = function() {
  facilityLevel.innerHTML = facilityLevelNumber
  facilityPrice.innerHTML = facilityPriceAmount;
  facilityMultiple.innerHTML = facilityPower - 600;
}
