import React from "react";

function Profile() {
  const auth = JSON.parse(localStorage.getItem("auth"));
  //   console.log(auth);
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Profile</h2>
      <p>{auth.email}</p>
    </div>
  );
}

export default Profile;
