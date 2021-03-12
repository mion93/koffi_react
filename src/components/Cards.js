import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Welcome to Koffi!</h1>
      <hr/>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://images.unsplash.com/photo-1504538292323-20e79775474d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
              text='Beans Sourcing'
              label='roasting'
              path='/products'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1512604327092-f1028d817196?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80'
              text='Coffee Roasting'
              label='roasting'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://images.unsplash.com/photo-1553329701-1abe5e1bf403?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
              text='Brewing Guide'
              label='guides'
              path='/services'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1556742400-b5b7c5121f99?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
              text='Sign Up'
              label='sign-up'
              path='/signup'
            />
          
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;