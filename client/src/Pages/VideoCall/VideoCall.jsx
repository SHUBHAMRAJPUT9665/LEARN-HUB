import React from 'react';
import HomeLayout from '../../Layouts/HomeLayout';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VideoCall = () => {
  const [roomCode, setRoomCode] = useState('');
  const navigate = useNavigate();
  console.log(roomCode);

  function handleFormSubmit(e) {
    e.preventDefault();
    navigate(`/room`, { state: { roomCode } });
  }

  return (
  
      <div className="flex justify-center items-center h-screen bg-black">
        <form onSubmit={handleFormSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm">
          <div className="mb-6">
            <label htmlFor="room-code" className="block text-white text-sm font-bold mb-2">
              Enter Room Code
            </label>
            <input
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
              id="room-code"
              type="text"
              required
              placeholder="Enter Room Code"
              className="w-full px-3 py-2 border rounded-lg shadow-sm bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Join Room
          </button>
        </form>
      </div>
  );
};

export default VideoCall;
