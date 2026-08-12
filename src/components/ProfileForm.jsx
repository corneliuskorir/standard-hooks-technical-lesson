import React, { useEffect, useId, useRef, useState } from "react";

function ProfileForm() {
  const [userName, setUserName] = useState("");

  const inputRef = useRef(null);

  const inputId = useId();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h2>Profile Form</h2>
      {/* TODO: Update this label-input pair to use the dynamically generated ID */}
      <label htmlFor={inputId}>Name:</label>
      <input
        id={inputId}
        ref={inputRef}
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <p>Current Name: {userName || "Guest"}</p>
    </div>
  );
}

export default ProfileForm;
