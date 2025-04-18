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
            <h2>Dana Smith: Software Engineer, Writer, Entrepreneur, Teacher</h2>
          </div>
          <div className="text-box">
            <p>
              Dana Smith is a self taught software engineer with an education in Biology 
              and Data Science.  His work experience has been on both sides of Software 
              Engineering as a scrappy startup founder as well as a senior engineer at 
              a U.S. Fortune 500 company.  As a startup founder (known to fans as "Demian"), 
              he built complex deep simulation software based on principles of geology, ecology, 
              climate science and plate tectonics.  He wrote the core simulation code, 
              managed team members, built communities, and built a brand.  As a senior software 
              engineer in the corporate world, he architected, coded, and deployed modern software 
              and data pipelines.  Both roles he found deeply satisfying!
            </p>
            <p> 
              Dana is fascinated by the emerging domain of artificial intelligence, and has experience
              with Machine Learning through Graph Databases as well as experience with a broad range 
              of generative AI (via large language models, Stable Diffusion, and Music Generation).

            </p>
            <p>  
              Dana is also an experienced public speaker, former university instructor, a writer, and 
              loves all things creative.  No phrase in the English language gives him more excitement than 
              "it can't be done."
            </p>
            <a href="#" className="portfolio-link">Extended Portfolio Link</a>
          </div>
        </div>
      </div>
      <div className="profile-container">
        <img src={raniProfileImage} alt="Rani Smith" className="profile-image" />
        <div className="profile-details">
          <div className="sub-header-box">
            <h2>Rani Smith: Hydrogeologist, Project Manager, Musician</h2>
          </div>
          <div className="text-box">
            <p>
              Rani Smith is a hydrogeologist with 18 years of experience 
            </p>
            <a href="#" className="portfolio-link">Extended Portfolio Link</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetTheSmiths;