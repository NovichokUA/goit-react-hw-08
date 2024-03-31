import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import css from "./Login.module.css";

const Login = () => {
  return (
    <div>
      <p className={css.title}>Please Log In</p>
      <LoginForm />
      <p className={css.title}>
        Or&emsp;
        <Link to={"/register"}>Registration</Link>
      </p>
    </div>
  );
};
export default Login;
