import React from "react";

function ProfileCard({ profile, onShowDetails, onShowMap }) {
  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-md transition">
      <img
        src={profile.photo}
        alt={profile.name}
        className="w-20 h-20 mx-auto rounded-full mb-4"
      />
      <h3 className="text-lg font-bold text-center">{profile.name}</h3>
      <p className="text-white text-center mb-4">{profile.description}</p>
      <div className="flex justify-between">
        <button
          onClick={onShowDetails}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          View Details
        </button>
        <button
          onClick={onShowMap}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Summary
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;
