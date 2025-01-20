import React, { useState } from "react";
import ProfileCard from "./ProfileCard";
import ProfileDetails from "./ProfileDetails";
import MapView from "./MapView";
import AdminDashboard from "./AdminDashboard";


function ProfileList() {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "John Doe",
      photo: "https://shorturl.at/8DOQV",
      description: "Software Engineer : Builds and maintains software solutions to solve complex problems",
      address: "1600 Amphitheatre Parkway, Mountain View, CA",
    },
    {
      id: 2,
      name: "Alina Smith",
      photo: "https://shorturl.at/jvTiG",
      description: "Architect: Designs scalable and efficient system architectures for optimal performance.",
      address: "10 Downing Street, London, UK",
    },
    {
      id: 3,
      name: "Roy Martin",
      photo: "https://shorturl.at/KXvsP",
      description: "Apllication Developer : Creates user-friendly applications tailored to specific needs",
      address: "425 Market Street, San Francisco, CA",
    },
    {
      id: 4,
      name: "Alexander",
      photo: "https://shorturl.at/Ky2SR",
      description: "Graphic Designer :  Crafts visually appealing designs for branding, media, and communication",
      address: "1601 Willow Road, Menlo Park, CA",
    },
    {
      id: 5,
      name: "Jane Smith",
      photo: "https://shorturl.at/BPP6P",
      description: "Artist :  Expresses creativity through various mediums, evoking emotions and ideas.",
      address: "Near San Francisco City Public Street  - San Francisco, CA",
    },
    

  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [mapAddress, setMapAddress] = useState(null);
  const [isAdminView, setIsAdminView] = useState(false); // Toggle between admin and user view

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search profiles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-3/4 p-2 border border-gray-300 rounded-md"
        />
        <button
          onClick={() => setIsAdminView(!isAdminView)}
          className="p-2 bg-blue-500 text-white rounded-md"
        >
          {isAdminView ? "View Profiles" : "Admin Dashboard"}
        </button>
      </div>

      {isAdminView ? (
        <AdminDashboard profiles={profiles} setProfiles={setProfiles} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredProfiles.map((profile) => (
            <ProfileCard
              key={profile.id}
              profile={profile}
              onShowDetails={() => setSelectedProfile(profile)}
              onShowMap={() => setMapAddress(profile.address)}
            />
          ))}
        </div>
      )}

      {selectedProfile && (
        <ProfileDetails
          profile={selectedProfile}
          onClose={() => setSelectedProfile(null)}
        />
      )}
      {mapAddress && (
        <MapView address={mapAddress} onClose={() => setMapAddress(null)} />
      )}
    </div>
  );
}

export default ProfileList;
