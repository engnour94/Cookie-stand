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
  this.cookiesSales();
  this.getCustomers();
  this.total =[];
}
CookieStand.prototype.cookiesSales= function( ){
  for ( let i = 0; i < openingHours.length; i++ ) {
    let cookies= Math.ceil( getRandomArbitrary( this.min,this.max )*this.avg );
    this.numberOfCookies.push( cookies );
    this.totalCookies += cookies;
  }
};
CookieStand.prototype.getCustomers=function () { for ( let i = 0; i < openingHours.length; i++ ) {

  let customers = getRandomArbitrary( this.min,this.max );
  this.numberOfCustomers.push( customers );
}

};
/*
CookieStand.prototype.render= function () {

  const parentElement = document.getElementById( 'sales' );
  const h2Element = document.createElement( 'h2' );
  parentElement.appendChild( h2Element );
  h2Element.textContent= this.name;

  const ulElement = document.createElement( 'ul' );
  parentElement.appendChild( ulElement );

  for ( let i = 0; i < openingHours.length; i++ ) {
    const liElement = document.createElement( 'li' );
    ulElement.appendChild( liElement );
    liElement.textContent=`${openingHours[i]}:${this.numberOfCookies[i]} cookies`;


  }

  const liTotalElement = document.createElement ( 'li' );
  ulElement.appendChild( liTotalElement );
  liTotalElement.textContent = `total : ${this.totalCookies} cookies`;
};
*/

CookieStand.prototype.renderHeaderTable = function () {
  const parentElement = document.getElementById( 'sales' );

  const tableElement=document.createElement ( 'table' );
  parentElement.appendChild( tableElement );

  const trElement = document.createElement( 'tr' );
  tableElement.appendChild( trElement );
  const thElement = document.createElement( 'th' );
  trElement.appendChild( thElement );
  thElement.textContent = 'Location';

  for ( let i = 0; i < openingHours.length; i++ ) {

    const thElement = document.createElement( 'th' );
    trElement.appendChild( thElement );
    thElement.textContent = `${openingHours[i]}`;
  }
  const totalHeaderElement = document.createElement( 'th' );
  trElement.appendChild( totalHeaderElement );
  totalHeaderElement.textContent = 'Daily Location Total';

};


CookieStand.prototype.renderTable = function () {
  const parentElement = document.getElementById( 'sales' );

  const tableElement=document.createElement ( 'table' );
  parentElement.appendChild( tableElement );

  const trElement = document.createElement( 'tr' );
  tableElement.appendChild( trElement );

  const tdElement = document.createElement( 'td' );
  trElement.appendChild( tdElement );
  tdElement.textContent = `${this.name}`;

  for ( let i = 0; i < openingHours.length; i++ ) {

    const tdElement = document.createElement( 'td' );
    trElement.appendChild( tdElement );

    tdElement.textContent = `${this.numberOfCookies[i]}`;


  }
  const TotalTdElement = document.createElement( 'td' );
  trElement.appendChild( TotalTdElement );
  TotalTdElement.textContent = `${this.totalCookies}`;

};





const Seattle = new CookieStand( 'Seattle', 23, 65, 6.3 );
Seattle.cookiesSales( 23,65,6.3 );
Seattle.getCustomers( 23,65 );
//Seattle.render();
Seattle.renderHeaderTable( 'Seattle', 23, 65, 6.3 );
Seattle.renderTable( 'Seattle', 23, 65, 6.3 );
const Tokyo = new CookieStand( 'Tokyo', 3, 24, 1.2 );
Tokyo.cookiesSales( 3,24,1.2 );
Tokyo.getCustomers( 3,24 );
Tokyo.renderTable( 'Tokyo', 3, 24, 1.2 );
//Tokyo.render();

const Dubai = new CookieStand( 'Dubai', 11, 38, 3.7 );
Dubai.cookiesSales( 11,38,3.7 );
Dubai.getCustomers( 11,38 );
Dubai.renderTable( 'Dubai', 11, 38, 3.7 );
//Dubai.render();

const Paris = new CookieStand( 'Paris', 20, 38, 2.3 );
Paris.cookiesSales( 20,38,2.3 );
Paris.getCustomers( 20,38 );
Paris.renderTable( 'Paris',20, 38, 2.3 );
//Paris.render();

const Lima = new CookieStand( 'Lima', 2, 16, 4.6 );
Lima.cookiesSales( 2, 16, 4.6 );
Lima.getCustomers( 2, 16 );
Lima.renderTable( 'Lima',20, 38, 2.3 );
//Lima.render();

function getRandomArbitrary( min,max )
{return Math.floor( Math.random()*( max-min+1 )+min );}
