import React, { useState, useEffect, useRef } from 'react';
import './SiteSkillstack.css';

// Import skill icons
import componentStructure from './assets/site-skills/component-structure.png';
import contentCreation from './assets/site-skills/content-creation.png';
import coreTechnology from './assets/site-skills/core-technology-stack.png';
import interactiveElements from './assets/site-skills/interactive-elements.png';
import multimediaIntegration from './assets/site-skills/multimedia-integration.png';
import specialHighlights from './assets/site-skills/special-highlights.png';
import stateManagement from './assets/site-skills/state-management.png';
import stylingAndDesign from './assets/site-skills/styling-and-design.png';
import visualDesign from './assets/site-skills/visual-design.png';

// Import tool images
import netlifyImg from './assets/site-skills/netlify.png';
import githubImg from './assets/site-skills/github.png';
import claudeApiImg from './assets/site-skills/claude-api.png';
import vsCodeImg from './assets/site-skills/vs-code.png';
import miroImg from './assets/site-skills/miro.png';
import audacityImg from './assets/site-skills/audacity.png';
import gimpImg from './assets/site-skills/gimp.png';

function SiteSkillstack() {
  const containerRef = useRef(null);
  const [selectedTool, setSelectedTool] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null); // New state for expanded skill

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        if (selectedTool !== null) {
          setSelectedTool(null);
        }
        if (selectedSkill !== null) {
          setSelectedSkill(null);
        }
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [selectedTool, selectedSkill]);

  // Function to center the clicked skill in the carousel
  const handleSkillScroll = (e) => {
    const container = containerRef.current;
    const clickedItem = e.currentTarget;
    
    if (container && clickedItem) {
      // Calculate scroll position to center the item
      const containerRect = container.getBoundingClientRect();
      const itemRect = clickedItem.getBoundingClientRect();
      
      const containerCenter = containerRect.width / 2;
      const itemCenter = itemRect.width / 2;
      const scrollOffset = itemRect.left - containerRect.left;
      
      const scrollTo = container.scrollLeft + scrollOffset - containerCenter + itemCenter;
      
      container.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };
  
  // Handle skill click to both scroll and expand
  const handleSkillClick = (skill, e) => {
    handleSkillScroll(e);
    setSelectedSkill(skill);
  };

  // Define your skills - just one set, no duplicates needed
  const skills = [
    { name: 'Component Structure', icon: componentStructure },
    { name: 'Content Creation', icon: contentCreation },
    { name: 'Core Technology', icon: coreTechnology },
    { name: 'Interactive Elements', icon: interactiveElements },
    { name: 'Multimedia Integration', icon: multimediaIntegration },
    { name: 'Special Highlights', icon: specialHighlights },
    { name: 'State Management', icon: stateManagement },
    { name: 'Styling & Design', icon: stylingAndDesign },
    { name: 'Visual Design', icon: visualDesign }
  ];
  
  // Tools data
  const tools = [
    {
      name: 'Netlify',
      image: netlifyImg,
      description: 'Netlify is a remote cloud computing development platform with serverless backend capabilities. I used it to register my domain as well as build, deploy, and deploy my web app, configure DNS, generate encrypted HTTPS certificates, and manage website metrics.'
    },
    {
      name: 'Github',
      image: githubImg,
      description: 'Github is a developer platform that allows developers to create, store, manage, and share their control. I used to it store my project, track bugs, control access, and store versions of my project.  You can visit the repo for this project here: https://github.com/Demiansky/SmithsGoToNZ'
    },
    {
      name: 'Claude API',
      image: claudeApiImg,
      description: "Claude is a family of large language models, and I used Claude's API and prompt engineering principles to create a family chat bot that would roleplay and emulate the characteristics and personalities of my family members."
    },
    {
      name: 'VS Code',
      image: vsCodeImg,
      description: 'VS Code is an integrated development environment used for programming, syntax highlighting, intelligent code completion, and other code related functions. As is the case with IDEs, I used it to write and manage my website project.'
    },
    {
      name: 'Miro',
      image: miroImg,
      description: 'Miro is a digital, shareable collaboration platform for distributed team communication. I often use it for collaborative architecture and shareable mock ups for website/app design and data architecture.'
    },
    {
      name: 'Audacity',
      image: audacityImg,
      description: "Audacity is a free software used to record or edit audio. I used it to capture, edit, and modify a Lofi version of Green Day's hit single, 'American Idiot' to use as background music for my website."
    },
    {
      name: 'GIMP',
      image: gimpImg,
      description: 'GIMP is a cross-platform image editor which I use to modify images, do graphic design, build my own custom GIFs, and procedurally modify images to style match using my own custom programmed filters.'
    },
  ];

  const renderDescriptionWithLinks = (text) => {
    // Regex to match URLs
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    
    // Use a different approach - replace URLs with placeholders, then replace the placeholders with links
    const placeholders = [];
    
    // Replace URLs with placeholders
    const textWithPlaceholders = text.replace(urlRegex, (match) => {
      const placeholder = `__LINK_${placeholders.length}__`;
      placeholders.push(match);
      return placeholder;
    });
    
    // Split by placeholders
    const parts = textWithPlaceholders.split(/(\_\_LINK\_\d+\_\_)/g);
    
    // Build result
    const result = [];
    
    parts.forEach(part => {
      // Check if this part is a placeholder
      const placeholderMatch = part.match(/\_\_LINK\_(\d+)\_\_/);
      
      if (placeholderMatch) {
        // It's a placeholder, replace with link
        const index = parseInt(placeholderMatch[1]);
        const url = placeholders[index];
        
        result.push(
          <a 
            key={`link-${index}`}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-link"
          >
            {url}
          </a>
        );
      } else {
        // It's regular text
        result.push(part);
      }
    });
    
    return result;
  };
  
  return (
    <div className="skillstack-container">
      <h1 className="skillstack-title">Site Skills</h1>
      <div className="site-skills-text-box">
        <p>Wonder what skills I used to build this website?  Take a peak down below!  Everything you see here was custom built by me, Dana Smith.  Design, architecture, artwork, graphic design, frontend, backend, programming, copy, and cheesy jokes!  Down below are the various skills on display, programming languages, and tools used!</p>
      </div>
      <section className="skills-section">
        {/* Skills carousel section */}
        <div className="skills-carousel-container" ref={containerRef}>
          <div className="skills-row">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="skill-icon"
                onClick={(e) => handleSkillClick(skill, e)}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <h1 className="skillstack-title">Tools Used</h1>
      <div className="site-skills-text-box">
        <p>Below are some screen caps of me using a few of the additional tools and programs I used to assist in producing code and content along the way.  You might have the skills to build a house, but those skills aren't much good without hammers, drills, and nails!  The same is true of software engineering!</p>
      </div>
      <section className="tools-section">
        
        <div className="tools-grid">
          {tools.map((tool, index) => (
            <div key={index} className="tool-card">
              <h3>{tool.name}</h3>
              <div 
                className="tool-image"
                onClick={() => setSelectedTool(tool)}
              >
                <img src={tool.image} alt={`Example of ${tool.name}`} />
              </div>

              {/* Replace the simple paragraph with this function that detects URLs */}
              <div className="tool-description">
                {renderDescriptionWithLinks(tool.description)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Expanded Overlay */}
      {selectedSkill && (
        <div 
          className="skill-overlay active"
          onClick={() => setSelectedSkill(null)}
        >
          <div 
            className="skill-expanded"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedSkill.icon} 
              alt={selectedSkill.name}
            />
            <h3 className="skill-expanded-title">{selectedSkill.name}</h3>
            <button 
              className="skill-close-btn"
              onClick={() => setSelectedSkill(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
      
      {/* Tools Expanded Overlay */}
      {selectedTool && (
        <div 
          className="image-modal-overlay"
          onClick={() => setSelectedTool(null)} 
        >
          <div 
            className="image-modal-content"
            onClick={(e) => e.stopPropagation()} 
          >
            <img 
              src={selectedTool.image} 
              alt={`Fullscreen view of ${selectedTool.name}`}
            />
            <h3>{selectedTool.name}</h3>
            <button 
              className="modal-close-btn"
              onClick={() => setSelectedTool(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default SiteSkillstack;