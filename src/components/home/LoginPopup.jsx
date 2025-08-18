import { useContext, useState } from "react";
import api from "../../api/api";
import { AuthContext } from "../../api/AuthContext";

export default function LoginPopup({ onClose }) {
  const { setAuthenticated } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await api.post("/login/", { username, password });
      setAuthenticated(true);
      onClose();
    } catch (err) {
      console.error("Login failed");
    }
  };

  return (
    <div className="pointer-events-none fixed t-0 l-0 w-screen h-screen flex opacity-1 items-center justify-center z-50 bg-[#00000055]">
      <div className="w-1/4 h-1/3 bg-white">
        <h3>Login</h3>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}
