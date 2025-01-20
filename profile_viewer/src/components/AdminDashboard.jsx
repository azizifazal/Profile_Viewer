import React, { useState } from "react";

function AdminDashboard({ profiles, setProfiles }) {
  const [newProfile, setNewProfile] = useState({
    name: "",
    photo: "",
    description: "",
    address: "",
  });
  const [editingProfile, setEditingProfile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingProfile) {
      setEditingProfile({ ...editingProfile, [name]: value });
    } else {
      setNewProfile({ ...newProfile, [name]: value });
    }
  };

  const handleAddProfile = () => {
    if (
      newProfile.name &&
      newProfile.photo &&
      newProfile.description &&
      newProfile.address
    ) {
      setProfiles([...profiles, { id: Date.now(), ...newProfile }]);
      setNewProfile({ name: "", photo: "", description: "", address: "" });
      alert("Profile added successfully!");
    } else {
      alert("Please fill all fields before adding.");
    }
  };

  const handleEditProfile = (id) => {
    const profile = profiles.find((p) => p.id === id);
    setEditingProfile(profile);
  };

  const handleSaveEdit = () => {
    if (
      editingProfile.name &&
      editingProfile.photo &&
      editingProfile.description &&
      editingProfile.address
    ) {
      setProfiles(
        profiles.map((p) =>
          p.id === editingProfile.id ? editingProfile : p
        )
      );
      setEditingProfile(null);
      alert("Profile updated successfully!");
    } else {
      alert("Please fill all fields before saving.");
    }
  };

  const handleDeleteProfile = (id) => {
    if (window.confirm("Are you sure you want to delete this profile?")) {
      setProfiles(profiles.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>

      {/* Add/Edit Form */}
      <div className="bg-white p-4 shadow rounded mb-6">
        <h3 className="text-xl font-semibold mb-2">
          {editingProfile ? "Edit Profile" : "Add New Profile"}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={editingProfile ? editingProfile.name : newProfile.name}
            onChange={handleInputChange}
            placeholder="Name"
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="photo"
            value={editingProfile ? editingProfile.photo : newProfile.photo}
            onChange={handleInputChange}
            placeholder="Photo URL"
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="description"
            value={
              editingProfile ? editingProfile.description : newProfile.description
            }
            onChange={handleInputChange}
            placeholder="Description"
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="address"
            value={editingProfile ? editingProfile.address : newProfile.address}
            onChange={handleInputChange}
            placeholder="Address"
            className="p-2 border rounded"
          />
        </div>
        <div className="mt-4">
          {editingProfile ? (
            <button
              onClick={handleSaveEdit}
              className="bg-green-500 text-white px-4 py-2 rounded mr-2"
            >
              Save Changes
            </button>
          ) : (
            <button
              onClick={handleAddProfile}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add Profile
            </button>
          )}
          {editingProfile && (
            <button
              onClick={() => setEditingProfile(null)}
              className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* Profile List */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Profile List</h3>
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className="bg-white p-4 shadow rounded mb-4 flex justify-between items-center"
          >
            <div>
              <p className="font-bold">{profile.name}</p>
              <p className="text-sm text-gray-500">{profile.description}</p>
              <p className="text-sm text-gray-400">{profile.address}</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEditProfile(profile.id)}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteProfile(profile.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
