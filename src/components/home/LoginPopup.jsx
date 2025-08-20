import { useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants";

export const LoginPopup = ({ menuOpen, setMenuOpen }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      const res = await api.post("/api/token/", { username, password });
      localStorage.setItem(ACCESS_TOKEN, res.data.access);
      localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
      navigate("/admin");
    } catch (error) {
      setErrorMsg("Wrong username and/or Password...");
    }
  };

  const handleKeypress = (e) => {
    if (e.keyCode == 13) {
      handleSubmit();
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-80 bg-[#00000099] ${
        menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-76 h-90 bg-gray-50 p-6 rounded-2xl rounded-tr-none flex flex-col justify-between">
        <h3 className="t1 text-primary-dark">Login</h3>
        <div className="flex flex-col gap-8">
          <p className="text-red-500 text-sm">{errorMsg}</p>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border-1 border-solid border-gray-700 p-1 rounded-sm"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-1 border-solid border-gray-700 p-1 rounded-sm"
            onKeyDownCapture={handleKeypress}
            required
          />
        </div>
        <div className="flex gap-6">
          <button
            className="cursor-pointer t3 bg-primary-dark pt-0.5 pb-0.5 pl-3 pr-3 w-19 rounded-sm text-gray-50"
            onClick={handleSubmit}
          >
            Login
          </button>
          <button
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer t3 bg-red-400 pt-0.5 pb-0.5 pl-3 pr-3 w-20 rounded-sm text-gray-50"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
