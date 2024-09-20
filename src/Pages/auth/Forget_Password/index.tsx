import { useState } from "react";
import Call from "../../../assets/Call.svg";
import Message from "../../../assets/Message.svg";

function Forget_Password():JSX.Element {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [inputValue, setInputValue] = useState<string>("");
  const [valid, setValid] = useState<boolean>(true);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>):void {
    const value = e.target.value;
    setInputValue(value);

    if (emailRegex.test(value)) {
      setValid(true);
    } else {
      setValid(false);
    }
  }

  return (
    <>
      <div className="h-[670px] w-[640px] bg-white shadow-lg mx-auto rounded-[20px] mt-[5px] overflow-hidden">
        <h1 className="text-[#034b5e] text-center text-[30px] font-bold pt-[25px]">Forgot Password</h1>
        <p className="text-center mt-[20px] text-[#98a0b2]">Please select an option to send the reset password link</p>
        <div className="mt-[40px]">
          <div className="rounded-[10px] w-[550px] border-[2px] border-[#69a6b6] mx-auto py-[30px] px-[25px]">
            <div className="w-[550px] rounded-[10px] flex mx-auto py-[30px]">
              <div className="w-[50px] bg-[#69a6b6] h-[45px] rounded-full mr-[20px]">
                <img src={Message} alt="Message Icon" className="mx-auto p-[10px]" />
              </div>
              <div>
                <h3 className="text-[#034b5e] font-bold">Reset via Email</h3>
                <p>We will send a link to reset your password</p>
              </div>
            </div>
            <input type="text" value={inputValue} onChange={handleInputChange} className="text-[#3f3f3f] bg-[#f0f0f0] mx-auto block border-[1px] border-[#98a0b2] outline-none w-[500px] pl-[30px] py-[12px] rounded-[10px]" placeholder="Email" />
            <p className={`text-[red] text-[12px] mt-[5px] ${valid ? "invisible" : "visible"}`}>Please Enter a valid Email Address</p>
          </div>

          <div className="w-[550px] mt-[50px] rounded-[10px] border-[1px] border-[#98a0b2] flex mx-auto py-[30px] px-[25px]">
            <div className="w-[50px] bg-[#eaecf0] h-[45px] rounded-full mr-[20px]">
              <img src={Call} alt="Call Icon" className="mx-auto p-[10px]" />
            </div>
            <div>
              <h3 className="text-[#98a0b2] font-bold">Reset via SMS</h3>
              <p>We will send a link to reset your password via SMS</p>
            </div>
          </div>

          <button className="mx-auto text-white block bg-[#f9b52e] font-bold outline-none w-[560px] pl-[30px] py-[12px] rounded-[10px] mt-[50px]" disabled={!valid}>
            Send Link Reset Password
          </button>
        </div>
      </div>
    </>
  );
}

export default Forget_Password;
