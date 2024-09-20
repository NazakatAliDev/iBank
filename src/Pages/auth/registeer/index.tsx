import React, { useState } from "react";

function Form_2():JSX.Element {
  const [inputValue, setInputValue] = useState("example@mail.com");
  const [passValue, setPassValue] = useState<string>("");
  const [confirmPassValue, setConfirmPassValue] = useState<string>("");
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
  const [isValidPassword, setIsValidPassword] = useState<boolean>(false);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState<boolean>(true);

  const [hasLowercase, setHasLowercase] = useState<boolean>(false);
  const [hasUppercase, setHasUppercase] = useState<boolean>(false);
  const [hasNumber, setHasNumber] = useState<boolean>(false);
  const [hasMinLength, setHasMinLength] = useState<boolean>(false);

  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  function validateEmail(value: string): void {
    setIsValidEmail(emailRegex.test(value));
  }

  function validatePassword(value: string): void {
    setHasLowercase(/[a-z]/.test(value));
    setHasUppercase(/[A-Z]/.test(value));
    setHasNumber(/\d/.test(value));
    setHasMinLength(value.length >= 8);

    const isPasswordValid = /[a-z]/.test(value) && /[A-Z]/.test(value) && /\d/.test(value) && value.length >= 8;

    setIsValidPassword(isPasswordValid);
  }

  function validateConfirmPassword(value: string): void {
    setIsConfirmPasswordValid(passValue === value);
  }

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const newValue = e.target.value;
    setInputValue(newValue);
    validateEmail(newValue);
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const newValue = e.target.value;
    setPassValue(newValue);
    validatePassword(newValue);
    validateConfirmPassword(confirmPassValue);
  }

  function handleConfirmPasswordChange(e: React.ChangeEvent<HTMLInputElement>):void {
    const newValue = e.target.value;
    setConfirmPassValue(newValue);
    validateConfirmPassword(newValue);
  }

  function handleSubmit():void {
    if (isValidEmail && isValidPassword && isConfirmPasswordValid) {
      console.log("Form submitted successfully!");
    }
  }

  return (
    <div className="h-[660px] w-[640px] bg-[black] mx-auto rounded-[20px] mt-[5px] overflow-hidden">
      <h1 className="text-[#A1E8FC] text-center text-[30px] font-bold pt-[25px]">Reset Password</h1>
      <p className="text-center mt-[20px] text-white">Create your new password</p>
      <div>
        <label className="text-[#3c3c3c] ml-[42px] block mb-[10px] mt-[35px]">Email</label>
        <input type="text" value={inputValue} onChange={handleEmailChange} className="text-[white] bg-[black] mx-auto block border-[1px] border-[#3c3c3c] outline-none w-[560px] pl-[30px] py-[12px] rounded-[10px]" placeholder="Email" />
        <p className={`text-[red] text-[13px] mt-[10px] ml-[40px] ${isValidEmail ? "invisible" : "visible"}`}>Please enter a valid email address</p>

        <label className="text-[#3c3c3c] ml-[42px] block mb-[15px] mt-[5px]">New Password</label>
        <input type="password" value={passValue} onChange={handlePasswordChange} className="text-[white] bg-[black] mx-auto block border-[1px] border-[#3c3c3c] outline-none w-[560px] pl-[30px] py-[12px] rounded-[10px]" placeholder="New Password" />

        {!isValidPassword && (
          <div className="ml-[42px] mt-[10px] text-white">
            <p className={`${hasLowercase ? "text-green-500" : "text-red-500"}`}>• At least one lowercase letter</p>
            <p className={`${hasUppercase ? "text-green-500" : "text-red-500"}`}>• At least one uppercase letter</p>
            <p className={`${hasNumber ? "text-green-500" : "text-red-500"}`}>• At least one number</p>
            <p className={`${hasMinLength ? "text-green-500" : "text-red-500"}`}>• Minimum 8 characters</p>
          </div>
        )}

        <label className="text-[#3c3c3c] ml-[42px] block mb-[15px] mt-[5px]">Confirm New Password</label>
        <input type="password" value={confirmPassValue} onChange={handleConfirmPasswordChange} className="text-[white] bg-[black] mx-auto block border-[1px] border-[#3c3c3c] outline-none w-[560px] pl-[30px] py-[12px] rounded-[10px]" placeholder="Confirm New Password" />
        <p className={`text-[red] text-[13px] mt-[10px] ml-[40px] ${isConfirmPasswordValid ? "invisible" : "visible"}`}>Passwords do not match</p>

        <button onClick={handleSubmit} className="mx-auto block bg-[#f9b52e] font-bold outline-none w-[560px] pl-[30px] py-[12px] rounded-[10px] mt-[12px]">
          Reset Password
        </button>
      </div>
    </div>
  );
}

export default Form_2;
