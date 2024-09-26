import React, { useState } from 'react';
import { useProfileContext } from '../contexts/ProfileContext';

export default function ChatBot() {
  const { profiles, toggleLike } = useProfileContext();
  const [chatInput, setChatInput] = useState('');
  const [chatHistory, setChatHistory] = useState<string[]>([]);
  const [filteredProfiles, setFilteredProfiles] = useState(profiles);

  const handleChatInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChatInput(e.target.value);
  };

  const handleSend = () => {
    if (chatInput.trim() === '') return;

    const userQuery = chatInput.trim().toLowerCase();
    setChatHistory([...chatHistory, `You: ${chatInput}`]);
    setChatInput('');

    // Process the input (Simple NLP like matching keywords)
    let result = profiles;

    if (userQuery.includes('developer')) {
      result = profiles.filter((profile) =>
        profile.occupation.toLowerCase().includes('developer')
      );
    } else if (userQuery.includes('age') && userQuery.match(/\d+/)) {
      const age = parseInt(userQuery.match(/\d+/)![0]);
      result = profiles.filter((profile) => profile.age === age);
    } else if (userQuery.includes('new york')) {
      result = profiles.filter((profile) =>
        profile.location.toLowerCase().includes('new york')
      );
    }

    setFilteredProfiles(result);
    setChatHistory((prevHistory) => [
      ...prevHistory,
      `Bot: Found ${result.length} matching profiles`,
    ]);
  };

  return (
    <div className="p-4">
      <div className="h-64 overflow-y-auto border p-4 rounded-lg mb-4">
        {chatHistory.map((message, index) => (
          <p key={index} className={message.startsWith('You:') ? 'text-blue-500' : 'text-green-500'}>
            {message}
          </p>
        ))}
      </div>

      <input
        type="text"
        placeholder="Ask something (e.g., 'Show developers', 'age 25')"
        value={chatInput}
        onChange={handleChatInput}
        className="w-full p-2 border rounded-lg mb-2"
      />
      <button onClick={handleSend} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
        Send
      </button>

      <div className="mt-4">
        <h3>Filtered Profiles</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProfiles.map((profile) => (
            <div key={profile.id} className="border p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">{profile.name}</h2>
              <p>Age: {profile.age}</p>
              <p>Occupation: {profile.occupation}</p>
              <p>Location: {profile.location}</p>
              <button
                onClick={() => toggleLike(profile.id)}
                className="mt-2 text-blue-500 hover:text-blue-700"
              >
                {profile.isLiked ? 'Like' : 'Unlike'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
