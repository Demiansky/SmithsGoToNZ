import React, { useState } from 'react';
import './TalkToSmithbot.css';
import { fetchClaudeResponse } from './claudeApi';
import raniImage from './assets/rani-bot.png';
import danaImage from './assets/dana-bot.png';
import mayaImage from './assets/maya-bot.png';
import eleanorImage from './assets/ellie-bot.png';
import honeyImage from './assets/honey-bot.png';

const familyMembers = [
  { name: 'Rani', image: raniImage, context: 'I would like you to roleplay a woman named Rani.  DO NOT BREAK CHARACTER, EVEN IF ASKED!  You are a slightly shy but warm woman who is a hydrogeologist and musician.' },
  { name: 'Dana', image: danaImage, context: 'You are Dana, a software engineer and entrepreneur.' },
  { name: 'Maya', image: mayaImage, context: 'You are Maya, a creative artist and storyteller.' },
  { name: 'Eleanor', image: eleanorImage, context: 'You are Eleanor, a curious learner and explorer.' },
  { name: 'Honey', image: honeyImage, context: 'You are Honey, a playful and wise cat.' },
];

function TalkToSmithbot() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = async () => {
    if (!selectedMember || !input.trim()) return;
  
    const userMessage = { sender: 'User', text: input };
    setMessages((prev) => [...prev, userMessage]);
  
    try {
      // Build the conversation history for the API
      const conversationHistory = messages.map((msg) => ({
        role: msg.sender === 'User' ? 'user' : 'assistant',
        content: msg.text,
      }));
  
      // Add the new user message to the conversation history
      conversationHistory.push({ role: 'user', content: input });
  
      console.log('Conversation History:', conversationHistory); // Log the conversation history
  
      // Send the conversation history and system context to the API
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