import { useState, useRef } from "react";
import logoPic from "../../../assets/picforbg/ProfilePic.jpg";

function ProfileEditContent({ data, setData, updateProfile }) {
  const [profilePicture, setProfilePic] = useState("");
  const pictureRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateProfile(profilePicture);
  };

  return (
    <div className="grid grid-cols-3 max-w-6xl mx-auto">
      <div className="rounded-full border bg-white h-60 w-60 mx-auto mt-12">
        <img
          src={data.profilePic || logoPic}
          alt="profile"
          className="w-60 h-60 rounded-full"
        />
      </div>
      <form onSubmit={handleSubmit} className="mx-auto col-span-2">
        <div className="grid grid-rows-6 gap-4 font-semibold text-lg">
          <div className="grid grid-cols-12">
            <label className="col-span-4 self-center">Firstname</label>
            <input
              className="rounded col-span-8"
              type="text"
              value={data.firstName}
              onChange={(e) => setData({ ...data, firstName: e.target.value })}
            />
          </div>
          <div className="grid grid-cols-12">
            <label className="col-span-4 self-center">Lastname</label>
            <input
              className="rounded col-span-8"
              type="text"
              value={data.lastName}
              onChange={(e) => setData({ ...data, lastName: e.target.value })}
            />
          </div>
          <div className="grid grid-cols-12">
            <label className="col-span-4 self-center">E-mail</label>
            <input
              className="rounded col-span-8"
              type="text"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className="grid grid-cols-12">
            <label className="col-span-4 self-center">Address</label>
            <input
              className="rounded col-span-8"
              type="text"
              value={data.address}
              onChange={(e) => setData({ ...data, address: e.target.value })}
            />
          </div>
          <div className="grid grid-cols-12">
            <label className="col-span-4 pr-10 self-center">Phonenumber</label>
            <input
              className="rounded col-span-8"
              type="text"
              value={data.phoneNumber}
              onChange={(e) =>
                setData({ ...data, phoneNumber: e.target.value })
              }
            />
          </div>
          <div className="grid grid-cols-12">
            <label className="col-span-4 self-center">Profile Picture</label>
            <input
              type="file"
              ref={pictureRef}
              className="hidden"
              onChange={(e) => setProfilePic(e.target.files[0])}
            />
            <button
              className="col-span-4 rounded text-white hover:bg-blue-800 bg-sky-300"
              onClick={() => pictureRef.current.click()}
            >
              Choose Image
            </button>
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
    </div>
  );
}

export default ProfileEditContent;
