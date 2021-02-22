'use strict';
let openingHours = ['6:00 am','7:00 am','8:00 am', '9:00 am','10:00 am','11:00 am','12:00 pm','1:00 pm','2:00 pm','3:00 pm','4:00 pm','5:00 pm','6:00 pm','7:00 pm','8:00 pm'];
// Seattle
const Seattle = {
  name : 'Seattle',
  totalCookies: 0,
  min: 23,
  max: 65,
  avg:6.3,
  numberOfCustomers: [],
  numberOfCookies:[],

  cookiesSales: function( ){
    for ( let i = 0; i < openingHours.length; i++ ) {
      let cookies= Math.ceil( getRandomArbitrary( this.min,this.max )*this.avg );
      this.numberOfCookies.push( cookies );
      this.totalCookies += cookies;
    }
  },

  getCustomers: function () { for ( let i = 0; i < openingHours.length; i++ ) {

    let customers = getRandomArbitrary( this.min,this.max );
    this.numberOfCustomers.push( customers );
  }

  },
  render : function () {

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
  }};

Seattle.cookiesSales();
Seattle.getCustomers();
Seattle.render();
function getRandomArbitrary( min,max )
{return Math.floor( Math.random()*( max-min+1 )+min );}
console.log( Seattle );

// Tokyo

const Tokyo = {
  name : 'Tokyo',
  totalCookies: 0,
  min: 3,
  max: 24,
  avg: 1.2,
  numberOfCustomers: [],
  numberOfCookies:[],

  cookiesSales: function( ){
    for ( let i = 0; i < openingHours.length; i++ ) {
      let cookies= Math.ceil( getRandomArbitrary( this.min,this.max )*this.avg );
      this.numberOfCookies.push( cookies );
      this.totalCookies += cookies;
    }
  },

  getCustomers: function () { for ( let i = 0; i < openingHours.length; i++ ) {

    let customers = getRandomArbitrary( this.min,this.max );
    this.numberOfCustomers.push( customers );
  }

  },
  render : function () {

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
  }};

Tokyo.cookiesSales();
Tokyo.getCustomers();
Tokyo.render();
console.log( Tokyo );

//Dubai

const Dubai = {
  name : 'Dubai',
  totalCookies: 0,
  min: 11,
  max: 38,
  avg: 3.7,
  numberOfCustomers: [],
  numberOfCookies:[],

  cookiesSales: function( ){
    for ( let i = 0; i < openingHours.length; i++ ) {
      let cookies= Math.ceil( getRandomArbitrary( this.min,this.max )*this.avg );
      this.numberOfCookies.push( cookies );
      this.totalCookies += cookies;
    }
  },

  getCustomers: function () { for ( let i = 0; i < openingHours.length; i++ ) {

    let customers = getRandomArbitrary( this.min,this.max );
    this.numberOfCustomers.push( customers );
  }

  },
  render : function () {

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
  }};

Dubai.cookiesSales();
Dubai.getCustomers();
Dubai.render();
console.log( Dubai );

// Paris

const Paris = {
  name : 'Paris',
  totalCookies: 0,
  min: 20,
  max: 38,
  avg: 2.3,
  numberOfCustomers: [],
  numberOfCookies:[],

  cookiesSales: function( ){
    for ( let i = 0; i < openingHours.length; i++ ) {
      let cookies= Math.ceil( getRandomArbitrary( this.min,this.max )*this.avg );
      this.numberOfCookies.push( cookies );
      this.totalCookies += cookies;
    }
  },

  getCustomers: function () { for ( let i = 0; i < openingHours.length; i++ ) {

    let customers = getRandomArbitrary( this.min,this.max );
    this.numberOfCustomers.push( customers );
  }

  },
  render : function () {

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
  }};

Paris.cookiesSales();
Paris.getCustomers();
Paris.render();
console.log( Paris );

// Lima

const Lima = {
  name : 'Lima',
  totalCookies: 0,
  min: 2 ,
  max: 16,
  avg: 4.6,
  numberOfCustomers: [],
  numberOfCookies:[],

  cookiesSales: function( ){
    for ( let i = 0; i < openingHours.length; i++ ) {
      let cookies= Math.ceil( getRandomArbitrary( this.min,this.max )*this.avg );
      this.numberOfCookies.push( cookies );
      this.totalCookies += cookies;
    }
  },

  getCustomers: function () { for ( let i = 0; i < openingHours.length; i++ ) {

    let customers = getRandomArbitrary( this.min,this.max );
    this.numberOfCustomers.push( customers );
  }

  },
  render : function () {

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
  }};

Lima.cookiesSales();
Lima.getCustomers();
Lima.render();
console.log( Lima );
