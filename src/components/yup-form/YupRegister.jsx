// import logoImg from "../assets/picforbg/Logo_img.png";
// import bgImg from "../assets/picforbg/Login_Pic.gif";
// import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// const schema = yup.object().shape({
//   firstName: yup.string().required(),
//   lastName: yup.string().required(),
//   username: yup.string().required(),
//   address: yup.string().required(),
//   email: yup.string().email().required(),
//   phoneNumber: yup.number().integer().required(),
//   password: yup.string().min(8).max(16).required(),
//   confirmPassword: yup.string().oneOf([yup.ref("password")], null),
// });

// function SignupPage() {
//   const { register, handleSubmitSignup, errors } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const submitForm = (data) => {
//     console.log(data);
//   };

//   return (
//     <div>
//       <div className="bg-pink-400 h-screen">
//         {/* Header */}
//         <div className=" bg-purple-600 flex justify-center items-center h-[104px] ">
//           <Link to="/login">
//             <img src={logoImg} className="w-[130px] pb-6" alt="" />
//           </Link>
//         </div>
//         {/* Column */}
//         <div className="absolute z-20">
//           <img src={bgImg} alt="" />
//         </div>
//         <form
//           onSubmit={handleSubmitSignup(submitForm)}
//           className="flex justify-center items-center mt-[100px]"
//         >
//           <div className="justify-center min-w-[35%] min-h-[520px] flex flex-col border border-black rounded px-8 text-center bg-pink-600 z-50 gap-4">
//             <h1 className="text-3xl font-bold pb-6">Sign up</h1>
//             <div className="flex">
//               <input
//                 type="text"
//                 name="firstName"
//                 ref={register}
//                 className="px-2 rounded grow"
//                 placeholder="Firstname"
//               />
//               <p> {errors.firstName?.message} </p>
//             </div>
//             <div className="flex">
//               <input
//                 type="text"
//                 name="lastName"
//                 ref={register}
//                 className="px-2 rounded grow"
//                 placeholder="Lastname"
//               />
//               <p> {errors.lastName?.message} </p>
//             </div>
//             <div className="flex">
//               <input
//                 type="text"
//                 name="username"
//                 ref={register}
//                 className="px-2 rounded grow"
//                 placeholder="Username"
//               />
//               <p> {errors.username?.message} </p>
//             </div>
//             <div className="flex">
//               <input
//                 type="text"
//                 name="address"
//                 ref={register}
//                 className="px-2 rounded grow"
//                 placeholder="Address"
//               />
//               <p> {errors.address?.message} </p>
//             </div>
//             <div className="flex">
//               <input
//                 type="text"
//                 name="email"
//                 ref={register}
//                 className="px-2 rounded grow"
//                 placeholder="Email"
//               />
//               <p> {errors.email?.message} </p>
//             </div>
//             <div className="flex">
//               <input
//                 type="text"
//                 name="phoneNumber"
//                 ref={register}
//                 className="px-2 rounded grow"
//                 placeholder="Phone Number"
//               />
//             </div>
//             <div className="flex">
//               <input
//                 type="text"
//                 name="password"
//                 ref={register}
//                 className="px-2 rounded grow"
//                 placeholder="Password"
//               />
//               <p> {errors.password?.message} </p>
//             </div>
//             <div className="flex">
//               <input
//                 type="text"
//                 name="confirmPassword"
//                 ref={register}
//                 className="px-2 rounded grow"
//                 placeholder="Confirm Password"
//               />
//               <p> {errors.confirmPassword && "Password not match!"} </p>
//             </div>
//             <button
//               type="submit"
//               id="submit"
//               className="bg-blue-500 hover:bg-blue-700 text-white rounded mt-4"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default SignupPage;

// -----------------------------------------------------------

// import logoImg from "../assets/picforbg/Logo_img.png";
// import bgImg from "../assets/picforbg/Login_Pic.gif";
// import { Link } from "react-router-dom";

// function SignupPage() {
//   return (
//     <div>
//       <div className="bg-pink-400 h-screen">
//         {/* Header */}
//         <div className=" bg-purple-600 flex justify-center items-center h-[104px] ">
//           <Link to="/login">
//             <img src={logoImg} className="w-[130px] pb-6" alt="" />
//           </Link>
//         </div>
//         {/* Column */}
//         <div className="absolute z-20">
//           <img src={bgImg} alt="" />
//         </div>
//         <form className="flex justify-center items-center mt-[100px]">
//           <div className="justify-center min-w-[35%] min-h-[520px] flex flex-col border border-black rounded px-8 text-center bg-pink-600 z-50 gap-4">
//             <h1 className="text-3xl font-bold pb-6">Sign up</h1>
//             <div className="flex">
//               <input
//                 type="text"
//                 className="px-2 rounded grow"
//                 placeholder="Firstname"
//               />
//             </div>
//             <div className="flex">
//               <input
//                 type="text"
//                 className="px-2 rounded grow"
//                 placeholder="Lastname"
//               />
//             </div>
//             <div className="flex">
//               <input
//                 type="text"
//                 className="px-2 rounded grow"
//                 placeholder="Username"
//               />
//             </div>
//             <div className="flex">
//               <input
//                 type="text"
//                 className="px-2 rounded grow"
//                 placeholder="Address"
//               />
//             </div>
//             <div className="flex">
//               <input
//                 type="text"
//                 className="px-2 rounded grow"
//                 placeholder="Email"
//               />
//             </div>
//             <div className="flex">
//               <input
//                 type="text"
//                 className="px-2 rounded grow"
//                 placeholder="Phone Number"
//               />
//             </div>
//             <div className="flex">
//               <input
//                 type="text"
//                 className="px-2 rounded grow"
//                 placeholder="Password"
//               />
//             </div>
//             <div className="flex">
//               <input
//                 type="text"
//                 className="px-2 rounded grow"
//                 placeholder="Confirm Password"
//               />
//             </div>
//             <button
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-700 text-white rounded mt-4"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default SignupPage;
