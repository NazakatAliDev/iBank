import { useState } from "react";
import Logo from "../../../assets/logo.svg";
import Img_list from "./Elements/img_list";
import Profile from "../../../assets/Profile.svg";
import Dash_Board from "../../../assets/Dash_Board.svg";
import Arrow from "../../../assets/Arrow.svg";
import History from "../../../assets/History.svg";
import Inbox from "../../../assets/Inbox.svg";
import Information from "../../../assets/Information.svg";
import Out from "../../../assets/Out.svg";
import { FaArrowLeftLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function Side_2(): JSX.Element {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <>
      <div className="flex">
        <div className={`bg-[green] h-[850px] p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
          <FaArrowLeftLong className={`bg-white border-[1px] border-[#2b004e] text-[#2b004e] text-2xl cursor-pointer p-[3px] rounded-[50%] absolute right-[-10px] ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />
          <img src={Logo} alt="" className={`mx-auto w-[215px] pt-[5px] ${!open && "hidden"}`} />
          <h3 className={`${!open && "hidden"} text-[18px] mt-[30px] mb-[5px] text-[#034b5e] ml-[20px] font-bold`}>General</h3>
          <div className="flex h-[255px] w-[250px] mx-auto">
            <div className="ml-[23px]">
              <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                {({ isActive }) => <Img_list src={Dash_Board} title="Dashboard" open={open} isActive={isActive} />}
              </NavLink>
              <NavLink to="/manage_user" className={({ isActive }) => (isActive ? "active" : "")}>
                {({ isActive }) => <Img_list src={Profile} title="Manage Users" open={open} isActive={isActive} />}
              </NavLink>
              <NavLink to="/Transfer_to_Users" className={({ isActive }) => (isActive ? "active" : "")}>
                {({ isActive }) => <Img_list src={Arrow} title="Transfer to Users" open={open} isActive={isActive} />}
              </NavLink>
              <NavLink to="/History" className={({ isActive }) => (isActive ? "active" : "")}>
                {({ isActive }) => <Img_list src={History} title="History" open={open} isActive={isActive} />}
              </NavLink>
              <NavLink to="/Inbox" className={({ isActive }) => (isActive ? "active" : "")}>
                {({ isActive }) => <Img_list src={Inbox} title="Inbox" open={open} isActive={isActive} />}
              </NavLink>
            </div>
          </div>
          <hr className={`w-[90%] mt-[30px] mx-auto p-[1px] bg-[#d0d0d0] ${!open && "hidden"}`} />
          <h3 className={`${!open && "hidden"} text-[18px] mt-[30px] mb-[5px] text-[#034b5e] ml-[20px] font-bold`}>Other</h3>
          <div className="flex h-[70px] w-[250px] mx-auto">
            <div className="ml-[23px]">
              <Img_list src={Information} title="Help & Support" open={open} isActive={false} />
            </div>
          </div>
          <div className={`flex h-[70px] w-[250px] mx-auto mt-[106px]`}>
            <div className="ml-[23px]">
              <Img_list src={Out} title="Log Out" open={open} isActive={false}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Side_2;
