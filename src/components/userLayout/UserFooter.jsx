import { FaFacebook, FaTwitter, FaDiscord } from "react-icons/fa";

function UserFooter() {
  return (
    <div className="py-7  gap-4 bg-purple-900 flex flex-col justify-center items-center">
      <h1 className="text-purple-200 font-bold text-2xl">OUR SOCIAL</h1>
      <div className="flex gap-5 text-3xl text-purple-200">
        <FaFacebook />
        <FaTwitter />
        <FaDiscord />
      </div>
      <h1 className="text-purple-200">JOIN OUR MAILING LIST</h1>
      <div className="flex gap-5">
        <input className="rounded px-2" placeholder="E-mail" />
        <button className="hover:bg-purple-500  text-purple-500 border hover:text-purple-200  font-medium bg-purple-200 border-black px-2 rounded">
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
}

export default UserFooter;
