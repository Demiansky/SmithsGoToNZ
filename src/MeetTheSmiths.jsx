import './MeetTheSmiths.css'; // Import a CSS file specific to this page
import danaProfileImage from './assets/danaprofile.png';
import raniProfileImage from './assets/raniprofile.png';
import mayaProfileImage from './assets/mayaprofile.png';
import ellieProfileImage from './assets/ellieprofile.png';
import honeyProfileImage from './assets/honeyprofile.png';

function MeetTheSmiths() {
  return (
    <div className="meet-the-smiths">
      <div className="header-box">
        <h1>Meet the Smiths</h1>
      </div>
      
      {/* Dana's profile */}
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
              and data pipelines.  Both roles he found deeply satisfying and finds immense joy in learning!
            </p>
            <p> 
              Dana is fascinated by the emerging domain of artificial intelligence, and has experience
              with a broad range of generative AI (via large language models, Stable Diffusion, and Music Generation),
              as well as experience in prompt engineering (visit Smith-Bot for a demo!)

            </p>
            <p>  
              Dana is also an experienced public speaker, former university instructor, a writer, poet, and 
              loves all things creative.  No phrase in the English language gives him more excitement than 
              "it can't be done."
            </p>
            <a href="#" className="portfolio-link">Extended Portfolio Link</a>
          </div>
        </div>
      </div>
      
      {/* Rani's profile */}
      <div className="profile-container">
        <img src={raniProfileImage} alt="Rani Smith" className="profile-image" />
        <div className="profile-details">
          <div className="sub-header-box">
            <h2>Rani Smith: Hydrogeologist, Project Manager, Musician</h2>
          </div>
          <div className="text-box">
            <p>
            Rani Smith is a Principal Hydrogeologist with a deep love of geologic history and a people-first approach to leadership. 
            Her journey into the geosciences began with a university course on the history of Earth—from the Big Bang to the Ice Age—and evolved into an 18-year career leading complex groundwater and wellfield projects throughout South Florida. As a principal hydrogeologist, she’s managed multi-million-dollar water supply and infrastructure projects, coordinated cross-disciplinary teams, and built a reputation for precision, clarity, and rock-solid (heh, rock-solid, get it?) dependability.  Rani thrives at the intersection of technical excellence and human connection. She’s a supportive mentor, and a natural project leader who believes in growing teams by focusing on individual strengths.
            </p>
            <p>
            Now relocating to New Zealand, Rani is energized by the new challenges ahead—especially those around climate change, sustainable water resource management, and source water protection. Outside of work, she enjoys music, baking elaborate cakes, diving deep into strategy games, and spending time with her family. She lives by the words of Marie Curie: “Nothing in life is to be feared, only to be understood.”
            </p>
            <a href="#" className="portfolio-link">Extended Portfolio Link</a>
          </div>
        </div>
      </div>

      {/* Ellie's profile */}
      <div className="profile-container">
        <img src={ellieProfileImage} alt="Ellie Smith" className="profile-image" />
        <div className="profile-details">
          <div className="sub-header-box">
            <h2>Ellie Smith: Scholar, Actress, Prankster, Slayer of Bokoblins</h2>
          </div>
          <div className="text-box">
            <p>
            Ellie Smith is an 11 year old, high-octane burst of joy— smart, talkative, and is filled with a genuine excitement about the world.  She’s imaginative, theatrical, and intensely curious, often leaving adults breathless trying to keep up with her rapid-fire enthusiasm. She's not just playful—she's also thoughtful, mischievous, and fiercely proud of her academic success (straight A student!) Her emotions run deep; she’s sentimental about leaving her home but able to channel that emotion into excitement for new adventures.
            </p>
            <p>
            Her favorite games are Spore and Breath of the Wild, where she can explore a wide open wilderness (like New Zealand’s??) and express her creativity.  She loves the performing arts, but also has a fascination with technology, including artificial intelligence and programming.  
            </p>
            <p>
            Ellie is a cultural explorer.  Not only does she love trying new foods, she loves learning about the geography, geopolitics, and history of distant lands.  That newest distant land of focus and curiosity, of course, is New Zealand!
            </p>
          </div>
        </div>
      </div>
      
      {/* Maya's profile */}
      <div className="profile-container">
        <img src={mayaProfileImage} alt="Maya Smith" className="profile-image" />
        <div className="profile-details">
          <div className="sub-header-box">
            <h2>Maya Smith: Reader, Watcher, Jr. Engineer, Slayer of Mac'N'Cheese</h2>
          </div>
          <div className="text-box">
            <p>
            Maya Smith is an 11 year old girl and the gentle soul of the Smith family.  She’s sweet, observant, and quietly brilliant.  She’s a bookworm and loves the fantastical realms of science fiction and fantasy, but also has a deep fascination with practical subjects of astronomy, geology, and engineering.  She feels things deeply and is very attuned to beauty, wonder, and the unknown—whether in nature, in books, or in the night sky.
            </p>
            <p>
            Maya’s free time reflects her interests in both the creative and logical.  In addition to science fiction and fantasy books, she loves building Crunch Labs engineering build boxes in her free time and loves puzzle PC games like Portal and Portal 2.  She also has an interest in ancient history, especially antiquities around the time of the Punic Wars (thank you History Oversimplified!) 
            </p>
            <p>
            Maya is quietly enthusiastic about a move to New Zealand, but is losing some sleep over the question of “how many spiders are there in New Zealand”.  Fortunately for her, this website isn’t called “The Smiths Move to Australia.”
            </p>
          </div>
        </div>
      </div>

      {/* Honey's profile */}
      <div className="profile-container">
        <img src={honeyProfileImage} alt="Honey Smith" className="profile-image" />
        <div className="profile-details">
          <div className="sub-header-box">
            <h2>Honey Smith: Nanny Cat, Assertive Snuggler, Derp, Acrobat</h2>
          </div>
          <div className="text-box">
            <p>
            Did you know it costs around $10,000 U.S. dollars to ship a cat to New Zealand?  It’s true, I checked!  With three different services!  Can you believe it??  Anyway…  Honey Smith is a completely irreplaceable part of the Smith Family, even though she probably looks and acts like a lot of the available, inexpensive shelter cats in New Zealand.  
            </p>
            <p>
            Honey is shy with new people at first, but within seconds she’ll revert to Golden Retriever energy and savage you with love and affection.  She will love you so much, she’ll even DROOL like a Golden Retriever.  She’s like a furry satellite that orbits her favorite humans.  If you are a programmer, she WILL introduce bugs into your code or sabotage your website about moving your family to New Zealand.
            </p>
            <p>
            Honey’s vaccinations are completely up to date and has taken a 3 part course in respecting the native New Zealand wildlife, including the threatened native Kiwi birds!!
            </p>
            <p>
            Sometimes she’ll inexplicably quack like a duck.  Scientists never could discern why.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetTheSmiths;