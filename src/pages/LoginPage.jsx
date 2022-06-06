import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useError } from "../contexts/ErrorContext";
import logoImg from "../assets/picforbg/Logo_img.png";
import bgImg from "../assets/picforbg/Login_Pic.gif";

function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { setError } = useError();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitLogin = async (e) => {
    try {
      e.preventDefault();
      await login(username, password);
      navigate("/");
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div>
      <div className="bg-pink-400 h-screen">
        {/* Header */}
        <div className=" bg-purple-600 flex justify-center items-center h-[104px] ">
          <img src={logoImg} className="w-[130px] pb-6" alt="" />
        </div>
        {/* Column */}
        <div className="absolute z-20">
          <img src={bgImg} alt="" />
        </div>
        <form
          onSubmit={handleSubmitLogin}
          className="flex justify-center items-center h-5/6"
        >
          <div className="justify-center min-w-[35%] min-h-[330px] flex flex-col border border-black rounded px-8 text-center bg-pink-600 z-50 gap-5">
            <h1 className="text-3xl font-semibold mb-5">Welcome!</h1>
            <div className="flex">
              <input
                className="px-2 rounded grow"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex">
              <input
                className="px-2 rounded grow"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white rounded grow"
              >
                Log in
              </button>
            </div>
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white rounded px-3 py-1">
                <Link to="/signup">Sign up</Link>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
