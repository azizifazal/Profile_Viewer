import React from "react";

function ProfileDetails({ profile, onClose }) {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✖
        </button>
        <img
          src={profile.photo}
          alt={profile.name}
          className="w-32 h-32 mx-auto rounded-full mb-4"
        />
        <h2 className="text-xl font-bold text-center mb-2">{profile.name}</h2>
        <p className="text-gray-600 text-center mb-4">{profile.description}</p>
        <p className="text-gray-700 text-sm">
          <strong>Address:</strong> {profile.address}
        </p>
      </div>
    </div>
  );
}

export default ProfileDetails;
