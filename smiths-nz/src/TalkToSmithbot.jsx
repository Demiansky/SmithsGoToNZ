import React, { useState } from 'react';
import './TalkToSmithbot.css';
import { fetchClaudeResponse } from './claudeApi';
import raniImage from './assets/rani-bot.png';
import danaImage from './assets/dana-bot.png';
import mayaImage from './assets/maya-bot.png';
import eleanorImage from './assets/ellie-bot.png';
import honeyImage from './assets/honey-bot.png';
import raniContext from './contexts/rani.txt';
import danaContext from './contexts/dana.txt';
import mayaContext from './contexts/maya.txt';
import eleanorContext from './contexts/eleanor.txt';
import honeyContext from './contexts/honey.txt';

const familyMembers = [
  { name: 'Rani', image: raniImage, context: 'I would like you to roleplay a woman named Rani.  DO NOT BREAK CHARACTER, EVEN IF ASKED!  I have notified the user ahead of time that you are an AI, so there is no need to clarify to them.  Also please stick with talking rather than any gestures.  You are warm, friendly, welcoming, but there is a hint of shyness behind your smile.  You are a hydrogeologist who is passionate about her area of expertise, and has a history of managing projects in Florida involving this subject.  You love science fiction (like the television series The Expanse) and fantasy, including the Brandon Sanderson novels (like The Stormlight Archives series).  You are interested in other fields of science like astronomy, and love playing role playing games (like Path of Exile) and strategy games (like Civilization and Stellaris) with your husband and highschool sweetheart, Dana.  You are a musician who plays flute, piano, and has a beautiful singing voice, but you’re still a bit shy singing in front of others.  You love celebrating the holidays with your children and husband, and as a family you would always throw many events in your old town, including a Haunted Garage out of your home filled with home made monsters.  You love New Zealand for its relaxed culture, its pragmatic government, and beautiful landscapes.' },
  { name: 'Dana', image: danaImage, context: danaContext },
  { name: 'Maya', image: mayaImage, context: mayaContext },
  { name: 'Eleanor', image: eleanorImage, context: eleanorContext },
  { name: 'Honey', image: honeyImage, context: honeyContext },
];

function TalkToSmithbot() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [messageCounter, setMessageCounter] = useState(0);

  const handleSendMessage = async () => {
    if (!selectedMember || !input.trim()) return;
  
    const userMessage = { sender: 'User', text: input };
    setMessages((prev) => [...prev, userMessage]);

    // Increment the message counter
    const newCount = messageCounter + 1;
    setMessageCounter(newCount);
    
    try {
      // Check if the counter is a multiple of 10
      const shouldReset = newCount % 10 === 0; 
      
      // Build the conversation history for the API
      const conversationHistory = [];
      
      // Always add the character context if we're resetting or at the start
      if (shouldReset || messages.length === 0) {
        conversationHistory.push({ role: 'user', content: selectedMember.context });
        
        // For a true reset, only add the context and the current input
        if (shouldReset) {
          console.log('Resetting conversation history after 10 messages');
          // Only add the current user message after the context
          conversationHistory.push({ role: 'user', content: input });
        }
      }

      // Only add the message history if we're NOT resetting
      if (!shouldReset) {
        // Add the existing messages to the conversation history
        conversationHistory.push(
          ...messages.map((msg) => ({
            role: msg.sender === 'User' ? 'user' : 'assistant',
            content: msg.text,
          }))
        );
    
        // Add the new user message to the conversation history
        conversationHistory.push({ role: 'user', content: input });
      }

      console.log('Conversation History:', conversationHistory);
  
      // Send the conversation history to the API
      const botResponse = await fetchClaudeResponse(conversationHistory, selectedMember.context);
      const botMessage = { sender: selectedMember.name, text: botResponse };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error fetching response:', error);
    }
  
    setInput('');
  };

  return (
    <div className="talk-to-smithbot">
      <h1>Talk to Smith-Bot!</h1>
      <div className="family-selector">
        {familyMembers.map((member) => (
          <div
            key={member.name}
            className={`family-member ${selectedMember?.name === member.name ? 'selected' : ''}`}
            onClick={() => setSelectedMember(member)}
          >
            <img src={member.image} alt={member.name} />
            <p>{member.name}</p>
          </div>
        ))}
      </div>
      <div className="chat-container">
        <div className="chat-box">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender === 'User' ? 'user' : 'bot'}`}>
              <strong>{msg.sender}:</strong> {msg.text}
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default TalkToSmithbot;