import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>
      <h1>What School Pages Has to offer!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
               src='/Images/img-1.jpg'
              text='Download Study notes From other Students'
              label='Download'
              path='/services'
            />
            <CardItem
              src='/Images/img-5.jpg'
              text='Upload Your Notes'
              label='Upload'
              path='/fileupload'
            />
          </ul>
            <CardItem
               src='/Images/img-4.jpg'
              text='Ask AI for help!!'
              label='Peer'
              path='/chatpage'
            />
            <CardItem
               src='/Images/img-7.jpg'
              text='Revise for your exams'
              label='Exams'
              path='/products'
            />
            <CardItem
              src='/Images/img-8.jpg'
              text='Get Notes for your favourite'
              label='Discover more'
              path='/sign-up'
            />
        </div>
      </div>
    </div>
  );
}

export default Cards;

