import React from "react";
import ProfileList from "./components/ProfileList";
import "./App.css";



function App() {
  return (
    <div className="min-h-screen bg-slate-500 p-4">

      <h1 className="text-4xl font-bold text-center mb-8">Profile Viewer</h1>
      <ProfileList />
    </div>
  );
}

export default App;
