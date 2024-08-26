// @ts-nocheck
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

function validateDate( day, month, year ) {
  const currentYear = new Date().getFullYear();
  if ( year > currentYear || month < 1 || month > 12 || day < 1 || day > 31 ) {
    return false;
  }

  const daysInMonth = new Date( year, month, 0 ).getDate();
  return day <= daysInMonth;
}

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

function displayResult( years, months, days ) {
  document.getElementById( 'years' ).textContent = years;
  document.getElementById( 'months' ).textContent = months;
  document.getElementById( 'days' ).textContent = days;
}

function displayError() {
  alert( 'Please enter a valid date.' );
}
