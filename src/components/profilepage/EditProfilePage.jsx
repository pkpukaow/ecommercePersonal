import { useState, useEffect } from "react";
import SortByIcon from "../button/SortByIcon";
import PasswordEditContent from "./editpages/PasswordEditContent";
import ProfileEditContent from "./editpages/ProfileEditContent";
import axios from "../../config/axios";

function EditProfilePage() {
  const [data, setData] = useState({});
  const [status, setStatus] = useState(true);

  const fetchData = async () => {
    const res = await axios.get("/auth/user");
    setData(res.data.user);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClickProfile = (e) => {
    e.preventDefault();
    setStatus(true);
  };

  const handleClickPassword = (e) => {
    e.preventDefault();
    setStatus(false);
  };

  const handleSubmitEdit = async (profilePic) => {
    try {
      const formData = new FormData();
      formData.append("profilePic", profilePic);
      formData.append("firstName", data?.firstName);
      formData.append("lastName", data?.lastName);
      formData.append("email", data?.email);
      formData.append("address", data?.address);
      formData.append("phoneNumber", data?.phoneNumber);
      await axios.patch("/auth/update", formData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="bg-pink-300">
        <div>
          <div className="pt-8 pb-10 flex justify-center items-center gap-10 font-medium text-2xl text-white">
            <SortByIcon
              onClick={handleClickProfile}
              title="Profile"
              isFocused={status === true}
            />
            <SortByIcon
              onClick={handleClickPassword}
              title="Password"
              isFocused={status === false}
            />
          </div>
        </div>

        {status ? (
          <>
            <ProfileEditContent
              data={data}
              setData={setData}
              updateProfile={handleSubmitEdit}
            />
          </>
        ) : (
          <>
            <PasswordEditContent data={data} setData={setData} />
          </>
        )}
      </div>
    </>
  );
}

export default EditProfilePage;
