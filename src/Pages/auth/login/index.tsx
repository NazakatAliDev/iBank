import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import icon_eye from "../../../assets/icon_eye.svg";

function Form(): JSX.Element {
  const [inputValue, setInputValue] = useState<string>("example@mail.com");
  const [passValue, setPassValue] = useState<string>("");
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
  const [isValidPassword, setIsValidPassword] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [hasLowercase, setHasLowercase] = useState<boolean>(false);
  const [hasUppercase, setHasUppercase] = useState<boolean>(false);
  const [hasNumber, setHasNumber] = useState<boolean>(false);
  const [hasMinLength, setHasMinLength] = useState<boolean>(false);
  const [showCriteria, setShowCriteria] = useState<boolean>(true);

  console.log(hasLowercase);

  const navigate = useNavigate();

  function handleEmail(value: string): void {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setIsValidEmail(emailRegex.test(value));
    localStorage.setItem("authToken", "sampleToken");
    navigate("/");
  }

  function handlePasswordChange(value: string): void {
    setPassValue(value);

    const lowercase = /[a-z]/.test(value);
    const uppercase = /[A-Z]/.test(value);
    const number = /\d/.test(value);
    const minLength = value.length >= 8;

    setHasLowercase(lowercase);
    setHasUppercase(uppercase);
    setHasNumber(number);
    setHasMinLength(minLength);

    const isPasswordValid = lowercase && uppercase && number && minLength;
    setIsValidPassword(isPasswordValid);

    setShowCriteria(!isPasswordValid);
  }

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  return (
    <>
      <div className="h-[560px] w-[640px] bg-[black] mx-auto rounded-[20px] mt-[20px] overflow-hidden">
        <h1 className="text-[#A1E8FC] text-center text-[30px] font-bold pt-[25px]">Login as Administrator</h1>
        <div>
          <label className="text-[#3c3c3c] ml-[42px] block mb-[10px] mt-[55px]">Email</label>
          <input
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              handleEmail(e.target.value);
            }}
            type="text"
            className="text-[white] bg-[black] mx-auto block border-[1px] border-[#3c3c3c] outline-none w-[560px] pl-[30px] py-[12px] rounded-[10px]"
            placeholder="Email"
          />
          <p className={`text-[red] text-[13px] mt-[10px] ml-[40px] transition-all duration-300 ${isValidEmail ? "invisible" : "visible"}`}>Please enter a valid email address</p>

          <label className="text-[#3c3c3c] ml-[42px] block mb-[15px] mt-[15px]">Password</label>
          <div className="flex overflow-hidden w-[560px] mx-auto rounded-[10px] border-[#3c3c3c] outline-none border-[1px]">
            <input type={showPassword ? "text" : "password"} className="text-[white] bg-[black] block w-[500px] pl-[30px] py-[12px] outline-none overflow-hidden rounded-[10px]" placeholder="New Password" value={passValue} onChange={(e) => handlePasswordChange(e.target.value)} />
            <img src={icon_eye} alt="Toggle Password Visibility" className="hover:cursor-pointer" onClick={togglePasswordVisibility} />
          </div>

          <div className={`ml-[42px] mt-[10px] text-white transition-all duration-300 ${showCriteria ? "visible" : "invisible"}`}>
            <p className={`${hasLowercase ? "text-green-500" : "text-red-500"}`}>• At least one lowercase letter</p>
            <p className={`${hasUppercase ? "text-green-500" : "text-red-500"}`}>• At least one uppercase letter</p>
            <p className={`${hasNumber ? "text-green-500" : "text-red-500"}`}>• At least one number</p>
            <p className={`${hasMinLength ? "text-green-500" : "text-red-500"}`}>• Minimum 8 characters</p>
          </div>

          <button className="mx-auto block bg-[#f9b52e] font-bold outline-none w-[560px] pl-[30px] py-[12px] rounded-[10px] mt-[40px]" onClick={() => handleEmail(inputValue)}>
            Sign in
          </button>
        </div>
      </div>
    </>
  );
}

export default Form;
