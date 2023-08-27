import { useCallback, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function LoginForm() {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const onComplete = (event) => {
    event.preventDefault();
    if (userName == "Admin" && password == "12345") {
      localStorage.setItem("isAuth", true);
      return navigate("/profile");
    }
    setError(true);
  };

  return (
    <>
      <form action="" onSubmit={onComplete}>
        <input
          required
          type="text"
          placeholder="username"
          onChange={(e) => setUserName(e.currentTarget.value)}
        />
        <input
          required
          type="text"
          placeholder="password"
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <button type="submit">SignIn</button>
        {error && <>Имя пользователя или пароль введены не верно </>}
      </form>
    </>
  );
}

export default LoginForm;
