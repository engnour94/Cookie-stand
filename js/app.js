'use strict';
let openingHours = ['6:00 am','7:00 am','8:00 am', '9:00 am','10:00 am','11:00 am','12:00 pm','1:00 pm','2:00 pm','3:00 pm','4:00 pm','5:00 pm','6:00 pm','7:00 pm','8:00 pm'];

function CookieStand( name,min,max,avg ){
  this.name=name;
  this.min=min;
  this.max=max;
  this.avg=avg;
  this.totalCookies= 0;
  this.numberOfCustomers=[];
  this.numberOfCookies=[];
  CookieStand.allCookieStand.push( this );

}
CookieStand.allCookieStand=[];
CookieStand.prototype.cookiesSales= function( ){
  for ( let i = 0; i < openingHours.length; i++ ) {
    let cookies= Math.ceil( getRandomArbitrary( this.min,this.max )*this.avg );
    this.numberOfCookies.push( cookies );
    this.totalCookies += this.numberOfCookies[i];
  }
};


CookieStand.prototype.getCustomers=function () { for ( let i = 0; i < openingHours.length; i++ ) {

  let customers = getRandomArbitrary( this.min,this.max );
  this.numberOfCustomers.push( customers );
}

};


CookieStand.prototype.render = function () {
  const tableElement = document.getElementById( 'placeTable' );

  const tr = document.createElement( 'tr' );
  tableElement.appendChild( tr );

  const td1 = document.createElement( 'td' );
  tr.appendChild( td1 );
  td1.textContent = this.name;

  for( let i = 0; i <openingHours.length; i++ ) {
    const td2 = document.createElement( 'td' );
    tr.appendChild( td2 );
    td2.textContent = this.numberOfCookies[i];
  }

  const td3 = document.createElement( 'td' );
  tr.appendChild( td3 );
  td3.textContent = this.totalCookies;


};



const tableHeader = function () {
  const parentElement = document.getElementById( 'sales' );
  const table = document.createElement( 'table' );
  parentElement.appendChild( table );
  table.setAttribute( 'id', 'placeTable' );

  const tr1 = document.createElement( 'tr' );
  table.appendChild( tr1 );

  const th1 = document.createElement( 'th' );
  tr1.appendChild( th1 );
  th1.textContent = '   ';

  for( let i = 0; i < openingHours.length; i++ ) {
    const th2 = document.createElement( 'th' );
    tr1.appendChild( th2 );
    th2.textContent = openingHours[i];

  }

  const th3 = document.createElement( 'th' );
  tr1.appendChild( th3 );
  th3.textContent = 'Total of Totals';
};
tableHeader();



const Seattle = new CookieStand( 'Seattle', 23, 65, 6.3 );
Seattle.cookiesSales( );


Seattle.render( );

const Tokyo = new CookieStand( 'Tokyo', 3, 24, 1.2 );
Tokyo.cookiesSales( );
Tokyo.getCustomers( );
Tokyo.render( );


const Dubai = new CookieStand( 'Dubai', 11, 38, 3.7 );
Dubai.cookiesSales( );
Dubai.getCustomers( );
Dubai.render( );


const Paris = new CookieStand( 'Paris', 20, 38, 2.3 );
Paris.cookiesSales( );
Paris.getCustomers( );
Paris.render( );


const Lima = new CookieStand( 'Lima', 2, 16, 4.6 );
Lima.cookiesSales( );
Lima.getCustomers( );
Lima.render();


function getRandomArbitrary( min,max )
{return Math.floor( Math.random()*( max-min+1 )+min );}



const tableFooter = function() {
  const tableElement = document.getElementById( 'placeTable' );

  const tr = document.createElement( 'tr' );
  tableElement.appendChild( tr );

  const th1 = document.createElement( 'th' );
  tr.appendChild( th1 );
  th1.textContent = 'total';
  let totalCooki=0;
  for( let i = 0; i < openingHours.length; i++ ) {
    const th2 = document.createElement( 'th' );
    tr.appendChild( th2 );
    for ( let j = 0; j < CookieStand.allCookieStand.length; j++ ) {
      totalCooki += parseInt( CookieStand.allCookieStand[j].numberOfCookies[i] );

    }
    th2.textContent = totalCooki;
  }

  const th3 = document.createElement( 'th' );
  tr.appendChild( th3 );

  let totalOfTotals=0;
  for ( let j = 0; j < CookieStand.allCookieStand.length; j++ ) {
    totalOfTotals += CookieStand.allCookieStand[j].totalCookies;

  }
  th3.textContent = totalOfTotals;
};




const formElement= document.getElementById( 'addNewForm' );
formElement.addEventListener( 'submit', function( event ) {
  event.preventDefault();

  const cityName= event.target.cityName.value;
  const minCustomer = event.target.minCustomer.value;
  const maxCustomer = event.target.maxCustomer.value;
  const avgCookies = event.target.avgCookies.value;
  document.getElementById( 'placeTable' ).removeChild( document.getElementById( 'placeTable' ).lastChild );
  const city = new CookieStand( cityName, minCustomer,maxCustomer,avgCookies );
  formElement.reset();
  city.cookiesSales();
  city.render();


  tableFooter();

} );
tableFooter();
