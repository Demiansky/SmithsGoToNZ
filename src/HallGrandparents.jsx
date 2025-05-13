import React from 'react';
import './HallGrandparents.css';
import popPop from './assets/bummed-grandpa.png';
import grandma from './assets/bummed-grandma.png';
import nana from './assets/bummed-nana.png';

function HallGrandparents() {
  return (
    <div className="grandparents-container">
      <h1 className="grandparents-title">Hall of Sad Grandparents</h1>
      
      <div className="grandparents-intro">
        <p>Life is about hard choices. One of those hard choices is leaving behind family in the proud, mighty USA <b>*screeching eagle sound.*</b> Try as they may, the grandparents couldn't quite convince us to stay! Below is the many attempts they made, which almost swayed us!</p>
      </div>
      
      {/* Pop Pop */}
      <div className="grandparent-card">
        <div className="grandparent-photo">
          <img src={popPop} alt="Pop Pop" />
        </div>
        <div className="grandparent-content">
          <h2>Pop Pop</h2>
          <div className="quote">"How will you feel safe when every police department isn't armed with a tank?"</div>
          <div className="quote">"You might be happy at first, until you wake up one day and crave a deep-fried Twinkie."</div>
          <div className="quote">"How will you get by without 15 available brands of toothpaste?"</div>
          <div className="quote">"How will your kids learn about consequences without 'Florida Man'?"</div>
          <div className="quote">"Won't you miss solving difficult social problems with 'thoughts and prayers'?"</div>
        </div>
      </div>
      
      {/* Grandma */}
      <div className="grandparent-card">
        <div className="grandparent-photo">
          <img src={grandma} alt="Grandma" />
        </div>
        <div className="grandparent-content">
          <h2>Grandma</h2>
          <div className="quote">"One day you'll miss those 24/7 pharmacies with 7 aisles of candy but just one pharmacist."</div>
          <div className="quote">"New Zealand doesn't sound like the kind of country that would have 'freedom fries'."</div>
          <div className="quote">"You'll miss every meal coming with 17 plastic utensils and 12 straws. Trust me."</div>
          <div className="quote">"News coverage in New Zealand just doesn't sound as exciting as it is here. I heard just the other day that an actual pitbull got elected to the U.S. House of Representatives!"</div>
        </div>
      </div>
      
      {/* Nana */}
      <div className="grandparent-card">
        <div className="grandparent-photo">
          <img src={nana} alt="Nana" />
        </div>
        <div className="grandparent-content">
          <h2>Nana</h2>
          <div className="quote">"At least in the U.S.A. you know for certain the schools are underfunded. Abroad? Who knows."</div>
          <div className="quote">"You'll miss being able to sue someone over emotional trauma caused by a cold fast food burrito."</div>
          <div className="quote">"No more calculating your insurance deductible while bleeding out in a hospital lobby? Seems un-American to me!"</div>
          <div className="quote">"You'll miss the rich cultural experience of drive through gun and liquor stores!"</div>
        </div>
      </div>
      
      {/* Disclaimer Box at the bottom */}
      <div className="disclaimer-box">
        <h3>Disclaimer</h3>
        <p>All grandparents on this page are AI generated with Stable Diffusion, and the real grandparents are loving, supportive, and have been encouraged to work on getting their grandparent visas!</p>
      </div>
    </div>
  );
}

export default HallGrandparents;