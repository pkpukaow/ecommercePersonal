import { useState } from "react";
import axios from "../../../config/axios";

function PasswordEditContent() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.patch("/auth/password", {
      currentPassword,
      newPassword,
      confirmNewPassword,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="px-[30vw] mx-auto">
      <div className="grid grid-rows-3 gap-4 font-semibold text-lg">
        <div className="grid grid-cols-12">
          <label className="col-span-4 self-center">Old Password</label>
          <input
            className="rounded col-span-8"
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-12">
          <label className="col-span-4 self-center">New Password</label>
          <input
            className="rounded col-span-8"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-12">
          <label className="col-span-4 self-center">Confirm Password</label>
          <input
            className="rounded col-span-8"
            type="password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
        </div>
        <div className="text-center my-6">
          <button
            type="submit"
            className="bg-blue-300 hover:bg-blue-800 text-white text-lg font-medium px-6 py-1 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PasswordEditContent;
