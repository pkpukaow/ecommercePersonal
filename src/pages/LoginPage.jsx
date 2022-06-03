import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useError } from "../contexts/ErrorContext";

function LoginPage() {
  const { login } = useAuth();
  const { setError } = useError();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitLogin = async (e) => {
    try {
      e.preventDefault();
      await login(username, password);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div>
      <div className="bg-blue-500 h-screen">
        {/* Header */}
        <div className=" bg-pink-400 flex justify-center items-center h-[72px]">
          HELLO
        </div>
        {/* Column */}
        <form
          onSubmit={handleSubmitLogin}
          className="flex justify-center items-center h-4/6"
        >
          <div className="flex flex-col border border-black rounded p-8 text-center bg-pink-600 gap-5">
            <h1 className="relative top-[-5px] text-2xl text-test">Welcome!</h1>
            <div>
              <input
                className="px-2 rounded"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <input
                className="px-2 rounded"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex">
              <button className="bg-blue-500 hover:bg-blue-500 text-white rounded grow">
                Log in
              </button>
            </div>
            <div>
              <button className="bg-blue-500 hover:bg-blue-500 text-white rounded p-1">
                sign up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
