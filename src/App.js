import React from 'react';
import './App.css';
import logo from './favicon_152x152.png';

function App() {
  return (
    <div className="App">
      <article>
      <div className="logo">
          <img alt="TownWave" src={logo} />
        </div>
        <h3>Dear TownWave Family,</h3>
        <p>
          A time for change is among us. In our four-year journey of developing and launching our localized music discovery app, we have learned so much about the industry and how
          to help musicians. Our three founders worked endlessly for years to build the perfect localized music-streaming app that would empower local musicians and provide
          listeners with fresh music. After gaining thousands of users, helping listeners discover local music, and providing live performance opportunities for hundreds of
          musicians, we’ve finally come to the conclusion it is time for a change.
        </p>
        <p>
          We’ve found our greatest success with musicians comes from direct in-person interaction. As a company that cares about musicians first, we want to maximize that
          interaction. Our team has decided to shut down the TownWave app to make way for a better foundation to serve upcoming artists. Our mobile and web application is an
          amazing product with a multitude of features but unfortunately we are unable to continue the maintenance and improvement of the platform. With this shutdown, your
          information will remain protected and removed from the internet.
        </p>
        <p>
          Thank you to everyone involved with TownWave. To our fans, users, and investors, we continue to be thankful for your overwhelming support. We are confident our decision
          to pivot the business will bring even more exciting times. We will be in touch with updates on our new disruptive ideas for the music & entertainment industry!
        </p>
        <p>
          <b>
            Thanks for your constant support and understanding,
            <br />
            Dalton Dellsperger
            <br />
            President & Founder
          </b>
        </p>
        
      </article>
    </div>
  );
}

export default App;
