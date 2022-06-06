import logoImg from "../assets/picforbg/Logo_img.png";
import { Link, useNavigate } from "react-router-dom";
import Form from "../components/yup-form/Form";
import InputYup from "../components/yup-form/InputYup";
import SubmitButton from "../components/yup-form/SubmitButton";
import * as yup from "yup";
import { useAuth } from "../contexts/AuthContext";

function SignupPage() {
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    address: yup.string().required(),
    email: yup.string().email().required(),
    phoneNumber: yup.number().integer().required(),
    password: yup.string().min(4).max(16).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password")], null),
  });

  const handleSubmit = async ({
    firstName,
    lastName,
    username,
    address,
    email,
    phoneNumber,
    password,
    confirmPassword,
  }) => {
    await signUp({
      firstName,
      lastName,
      username,
      address,
      email,
      phoneNumber,
      password,
      confirmPassword,
    });
    navigate("/");
  };

  return (
    <div>
      {/* BG */}
      <div className="bg-[url('https://preview.redd.it/r1fuyfs3h2a81.png?auto=webp&s=d24b00a19dc07d06a395f097df1b7bfae62e2574')] h-screen bg-cover">
        {/* Header */}
        <div className=" bg-purple-600 flex justify-center items-center h-[104px] ">
          <Link to="/login">
            <img src={logoImg} className="w-[130px] pb-6" alt="" />
          </Link>
        </div>
        {/* Column */}
        <Form
          schema={schema}
          className="gap-3 space-y-4 bg-pink-300 opacity-[0.93] p-6 w-[400px] rounded mt-12 mx-auto"
        >
          <h1 className="text-center text-3xl font-bold pb-3">Sign up!</h1>
          <InputYup name="firstName" type="text" placeholder="Firstname" />
          <InputYup name="lastName" type="text" placeholder="Lastname" />
          <InputYup name="username" type="text" placeholder="Username" />
          <InputYup name="address" type="text" placeholder="Address" />
          <InputYup name="email" type="email" placeholder="Email" />
          <InputYup name="phoneNumber" type="text" placeholder="Phone Number" />
          <InputYup name="password" type="password" placeholder="Password" />
          <InputYup
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
          />
          <SubmitButton
            className="w-full bg-blue-500 hover:bg-blue-700 text-white rounded mt-4"
            onClick={handleSubmit}
          >
            Submit
          </SubmitButton>
        </Form>
      </div>
    </div>
  );
}

export default SignupPage;
