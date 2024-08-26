// @ts-nocheck
// Event listeners para validaciones en tiempo real
document.getElementById( 'day' ).addEventListener( 'input', validateDay );
document.getElementById( 'month' ).addEventListener( 'input', validateMonth );
document.getElementById( 'year' ).addEventListener( 'input', validateYear );

// Validación del día en tiempo real
function validateDay() {
  const dayInput = document.getElementById( 'day' );
  const day = parseInt( dayInput.value );
  const icon = dayInput.nextElementSibling;

  if ( isNaN( day ) || day < 1 || day > 31 ) {
    dayInput.classList.add( 'error' );
    dayInput.classList.remove( 'success' );
    icon.classList.add( 'error-icon' );
    icon.classList.remove( 'success-icon' );
  } else {
    dayInput.classList.remove( 'error' );
    dayInput.classList.add( 'success' );
    icon.classList.remove( 'error-icon' );
    icon.classList.add( 'success-icon' );
  }
}

// Validación del mes en tiempo real
function validateMonth() {
  const monthInput = document.getElementById( 'month' );
  const month = parseInt( monthInput.value );
  const icon = monthInput.nextElementSibling;

  if ( isNaN( month ) || month < 1 || month > 12 ) {
    monthInput.classList.add( 'error' );
    monthInput.classList.remove( 'success' );
    icon.classList.add( 'error-icon' );
    icon.classList.remove( 'success-icon' );
  } else {
    monthInput.classList.remove( 'error' );
    monthInput.classList.add( 'success' );
    icon.classList.remove( 'error-icon' );
    icon.classList.add( 'success-icon' );
  }
}

// Validación del año en tiempo real
function validateYear() {
  const yearInput = document.getElementById( 'year' );
  const year = parseInt( yearInput.value );
  const currentYear = new Date().getFullYear();
  const icon = yearInput.nextElementSibling;

  if ( isNaN( year ) || year > currentYear ) {
    yearInput.classList.add( 'error' );
    yearInput.classList.remove( 'success' );
    icon.classList.add( 'error-icon' );
    icon.classList.remove( 'success-icon' );
  } else {
    yearInput.classList.remove( 'error' );
    yearInput.classList.add( 'success' );
    icon.classList.remove( 'error-icon' );
    icon.classList.add( 'success-icon' );
  }
}

// Validación completa cuando se envía el formulario
document.getElementById( 'age-form' ).addEventListener( 'submit', function ( event ) {
  event.preventDefault();

  const day = parseInt( document.getElementById( 'day' ).value );
  const month = parseInt( document.getElementById( 'month' ).value );
  const year = parseInt( document.getElementById( 'year' ).value );

  if ( validateDate( day, month, year ) ) {
    const age = calculateAge( day, month, year );
    displayResult( age.years, age.months, age.days );
  } else {
    displayError();
  }
} );

// Validar la fecha completa
function validateDate( day, month, year ) {
  const currentYear = new Date().getFullYear();
  if ( year > currentYear || month < 1 || month > 12 || day < 1 || day > 31 ) {
    return false;
  }

  const daysInMonth = new Date( year, month, 0 ).getDate();
  return day <= daysInMonth;
}

// Cálculo de la edad
function calculateAge( day, month, year ) {
  const today = new Date();
  let ageYear = today.getFullYear() - year;
  let ageMonth = today.getMonth() + 1 - month;
  let ageDay = today.getDate() - day;

  if ( ageDay < 0 ) {
    ageDay += new Date( today.getFullYear(), today.getMonth(), 0 ).getDate();
    ageMonth--;
  }

  if ( ageMonth < 0 ) {
    ageMonth += 12;
    ageYear--;
  }

  return { years: ageYear, months: ageMonth, days: ageDay };
}

// Mostrar los resultados
function displayResult( years, months, days ) {
  document.getElementById( 'years' ).textContent = years;
  document.getElementById( 'months' ).textContent = months;
  document.getElementById( 'days' ).textContent = days;
}

// Mostrar un mensaje de error
function displayError() {
  alert( 'Please enter a valid date.' );
}
