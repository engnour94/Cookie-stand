'use strict';

// Seattle
const Seattle = {
  name : 'Seattle',
  openingHours: ['6:00 am','7:00 am','8:00 am', '9:00 am','10:00 am','11:00 am','12:00 pm','1:00 pm','2:00 pm','3:00 pm','4:00 pm','5:00 pm','6:00 pm','7:00 pm','8:00 pm'],
  totalCookies: 0,
  theMinCookies: 23,
  theMaxCookies: 65,
  theAverageCookies:6.3,
  randomNumberOfCookies: function( min,max,avg ){
    return Math.ceil( ( Math.random()*( max-min+1 )+min )*avg );
  },

  render : function () {

    const parentElement = document.getElementById( 'sales' );
    const h2Element = document.createElement( 'h2' );
    parentElement.appendChild( h2Element );
    h2Element.textContent= this.name;

    const ulElement = document.createElement( 'ul' );
    parentElement.appendChild( ulElement );

    for ( let i = 0; i < this.openingHours.length; i++ ) {
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent=`${this.openingHours[i]}:${this.randomNumberOfCookies( this.theMinCookies,this.theMaxCookies,this.theAverageCookies )} cookies`;
      this.totalCookies =this.totalCookies+ this.randomNumberOfCookies( this.theMinCookies,this.theMaxCookies,this.theAverageCookies );



    }

    const liTotalElement = document.createElement ( 'li' );
    ulElement.appendChild( liTotalElement );
    liTotalElement.textContent = `total : ${this.totalCookies} cookies`;
  }};
Seattle.render();

// Tokyo
const Tokyo = {
  name : 'Tokyo',
  openingHours: ['6:00 am','7:00 am','8:00 am', '9:00 am','10:00 am','11:00 am','12:00 pm','1:00 pm','2:00 pm','3:00 pm','4:00 pm','5:00 pm','6:00 pm','7:00 pm','8:00 pm'],
  totalCookies: 0,
  theMinCookies: 3,
  theMaxCookies: 24,
  theAverageCookies:1.2,
  randomNumberOfCookies: function( min,max,avg ){
    return Math.ceil( ( Math.random()*( max-min+1 )+min )*avg );
  },

  render : function () {

    const parentElement = document.getElementById( 'sales' );
    const h2Element = document.createElement( 'h2' );
    parentElement.appendChild( h2Element );
    h2Element.textContent= this.name;

    const ulElement = document.createElement( 'ul' );
    parentElement.appendChild( ulElement );

    for ( let i = 0; i < this.openingHours.length; i++ ) {
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent=`${this.openingHours[i]}:${this.randomNumberOfCookies( this.theMinCookies,this.theMaxCookies,this.theAverageCookies )} cookies`;
      this.totalCookies =this.totalCookies+ this.randomNumberOfCookies( this.theMinCookies,this.theMaxCookies,this.theAverageCookies );



    }

    const liTotalElement = document.createElement ( 'li' );
    ulElement.appendChild( liTotalElement );
    liTotalElement.textContent = `total : ${this.totalCookies} cookies`;
  }};
Tokyo.render();

//Dubai

const Dubai = {
  name : 'Dubai',
  openingHours: ['6:00 am','7:00 am','8:00 am', '9:00 am','10:00 am','11:00 am','12:00 pm','1:00 pm','2:00 pm','3:00 pm','4:00 pm','5:00 pm','6:00 pm','7:00 pm','8:00 pm'],
  totalCookies: 0,
  theMinCookies: 11,
  theMaxCookies: 38,
  theAverageCookies:3.7,
  randomNumberOfCookies: function( min,max,avg ){
    return Math.ceil( ( Math.random()*( max-min+1 )+min )*avg );
  },

  render : function () {

    const parentElement = document.getElementById( 'sales' );
    const h2Element = document.createElement( 'h2' );
    parentElement.appendChild( h2Element );
    h2Element.textContent= this.name;

    const ulElement = document.createElement( 'ul' );
    parentElement.appendChild( ulElement );

    for ( let i = 0; i < this.openingHours.length; i++ ) {
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent=`${this.openingHours[i]}:${this.randomNumberOfCookies( this.theMinCookies,this.theMaxCookies,this.theAverageCookies )} cookies`;
      this.totalCookies =this.totalCookies+ this.randomNumberOfCookies( this.theMinCookies,this.theMaxCookies,this.theAverageCookies );



    }

    const liTotalElement = document.createElement ( 'li' );
    ulElement.appendChild( liTotalElement );
    liTotalElement.textContent = `total : ${this.totalCookies} cookies`;
  }};
Dubai.render();

// Paris

const Paris = {
  name : 'Paris',
  openingHours: ['6:00 am','7:00 am','8:00 am', '9:00 am','10:00 am','11:00 am','12:00 pm','1:00 pm','2:00 pm','3:00 pm','4:00 pm','5:00 pm','6:00 pm','7:00 pm','8:00 pm'],
  totalCookies: 0,
  theMinCookies: 20,
  theMaxCookies: 38,
  theAverageCookies:2.3,
  randomNumberOfCookies: function( min,max,avg ){
    return Math.ceil( ( Math.random()*( max-min+1 )+min )*avg );
  },

  render : function () {

    const parentElement = document.getElementById( 'sales' );
    const h2Element = document.createElement( 'h2' );
    parentElement.appendChild( h2Element );
    h2Element.textContent= this.name;

    const ulElement = document.createElement( 'ul' );
    parentElement.appendChild( ulElement );

    for ( let i = 0; i < this.openingHours.length; i++ ) {
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent=`${this.openingHours[i]}:${this.randomNumberOfCookies( this.theMinCookies,this.theMaxCookies,this.theAverageCookies )} cookies`;
      this.totalCookies =this.totalCookies+ this.randomNumberOfCookies( this.theMinCookies,this.theMaxCookies,this.theAverageCookies );



    }

    const liTotalElement = document.createElement ( 'li' );
    ulElement.appendChild( liTotalElement );
    liTotalElement.textContent = `total : ${this.totalCookies} cookies`;
  }};
Paris.render();

// Lima
const Lima = {
  name : 'Lima',
  openingHours: ['6:00 am','7:00 am','8:00 am', '9:00 am','10:00 am','11:00 am','12:00 pm','1:00 pm','2:00 pm','3:00 pm','4:00 pm','5:00 pm','6:00 pm','7:00 pm','8:00 pm'],
  totalCookies: 0,
  theMinCookies: 2,
  theMaxCookies: 16,
  theAverageCookies:4.6,
  randomNumberOfCookies: function( min,max,avg ){
    return Math.ceil( ( Math.random()*( max-min+1 )+min )*avg );
  },

  render : function () {

    const parentElement = document.getElementById( 'sales' );
    const h2Element = document.createElement( 'h2' );
    parentElement.appendChild( h2Element );
    h2Element.textContent= this.name;

    const ulElement = document.createElement( 'ul' );
    parentElement.appendChild( ulElement );

    for ( let i = 0; i < this.openingHours.length; i++ ) {
      const liElement = document.createElement( 'li' );
      ulElement.appendChild( liElement );
      liElement.textContent=`${this.openingHours[i]}:${this.randomNumberOfCookies( this.theMinCookies,this.theMaxCookies,this.theAverageCookies )} cookies`;
      this.totalCookies =this.totalCookies+ this.randomNumberOfCookies( this.theMinCookies,this.theMaxCookies,this.theAverageCookies );



    }

    const liTotalElement = document.createElement ( 'li' );
    ulElement.appendChild( liTotalElement );
    liTotalElement.textContent = `total : ${this.totalCookies} cookies`;
  }};
Lima.render();
