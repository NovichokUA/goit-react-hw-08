import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";

const Login = () => {
  return (
    <div>
      Hello Login
      <LoginForm />
      <p>
        Or&emsp;
        <Link to={"/register"}>Registration</Link>
      </p>
    </div>
  );
};
export default Login;
