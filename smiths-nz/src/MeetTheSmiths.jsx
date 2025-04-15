import './MeetTheSmiths.css'; // Import a CSS file specific to this page
import danaProfileImage from './assets/danaprofile.png'; // Replace with the actual image path
import raniProfileImage from './assets/raniprofile.png'; // Replace with the actual image path

function MeetTheSmiths() {
  return (
    <div className="meet-the-smiths">
      <div className="header-box">
        <h1>Meet the Smiths</h1>
      </div>
      <div className="profile-container">
        <img src={danaProfileImage} alt="Dana Smith" className="profile-image" />
        <div className="profile-details">
          <div className="sub-header-box">
            <h2>Software Engineer, Writer<br />Entrepreneur, Teacher</h2>
          </div>
          <div className="text-box">
            <p>
              Hello, my name is Dana Smith! Stuff about Dana, Stuff about Dana Stuff
              about Dana, Stuff about Dana Stuff about Dana, Stuff about Dana Stuff
              about Dana, Stuff about Dana Stuff about Dana, Stuff about Dana Stuff
              about Dana, Stuff about Dana Stuff about Dana, Stuff about Dana Stuff
              about Dana, Stuff about Dana.  Hello, my name is Dana Smith! Stuff about Dana, Stuff about Dana Stuff
              about Dana, Stuff about Dana Stuff about Dana, Stuff about Dana Stuff
              about Dana, Stuff about Dana Stuff about Dana, Stuff about Dana Stuff
              about Dana, Stuff about Dana Stuff about Dana, Stuff about Dana Stuff
              about Dana, Stuff about Dana.
              Hello, my name is Dana Smith! Stuff about Dana, Stuff about Dana Stuff
              about Dana, Stuff about Dana Stuff about Dana, Stuff about Dana Stuff
              about Dana, Stuff about Dana Stuff about Dana, Stuff about Dana Stuff
              about Dana, Stuff about Dana Stuff about Dana, Stuff about Dana Stuff
              about Dana, Stuff about Dana.
              Hello, my name is Dana Smith! Stuff about Dana, Stuff about Dana Stuff
              about Dana, Stuff about Dana Stuff about Dana, Stuff about Dana Stuff
              about Dana, Stuff about Dana Stuff about Dana, Stuff about Dana Stuff
              about Dana, Stuff about Dana Stuff about Dana, Stuff about Dana Stuff
              about Dana, Stuff about Dana.
            </p>
            <a href="#" className="portfolio-link">Extended Portfolio Link</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetTheSmiths;