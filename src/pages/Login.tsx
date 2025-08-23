import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validUser = {
    userName: "admin@correo.com",
    password: "admin123",
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    switch (true) {
      case !userName:
        setError("Usuario requerido");
        return;
      case !password:
        setError("Contraseña requerida");
        return;
      case userName !== validUser.userName || password !== validUser.password:
        setError("Usuario o contraseña inválidos");
        return;
      case validUser.userName === userName && validUser.password === password:
        localStorage.setItem("isValidUser", "true");
        navigate("/map");
        return;
      default:
        setError("");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="userName">Usuario</label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              autoComplete="username"
              placeholder="nombre@correo.com"
            />
          </div>
          <div>
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              placeholder="··········"
            />
          </div>
          <button type="submit">Iniciar sesión</button>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
