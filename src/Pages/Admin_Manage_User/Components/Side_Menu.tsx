import Logo from "../../../assets/logo.svg";
import Img_list from "./Elements/img_list";
import Text_List from "./Elements/Text_List";
import Profile from "../../../assets/Profile.svg";
import Dash_Board from "../../../assets/Dash_Board.svg";
import Arrow from "../../../assets/Arrow.svg";
import History from "../../../assets/History.svg";
import Inbox from "../../../assets/Inbox.svg";
import Information from "../../../assets/Information.svg";
import Out from "../../../assets/Out.svg";

function Side_menu() {
  return (
    <>
      <div className="h-auto w-[300px] bg-[#00eaff]">
      <img src={Logo} alt="" className="mx-auto w-[215px] pt-[15px]" />
        <h3 className="text-[18px] mt-[30px] mb-[5px] text-[#034b5e] ml-[40px] font-bold">General</h3>
        <div className="flex h-[255px] w-[250px] mx-auto">
          <div className="ml-[23px]">
            <Img_list src={Dash_Board} title={""} open={false} isActive={false} />
            <Img_list src={Profile} title={""} open={false} isActive={false} />
            <Img_list src={Arrow} title={""} open={false} isActive={false} />
            <Img_list src={History} title={""} open={false} isActive={false} />
            <Img_list src={Inbox} title={""} open={false} isActive={false} />
          </div>
          <div className="ml-[25px]">
            <Text_List title="Dashboard" />
            <Text_List title="Manage Users" />
            <Text_List title="Transfer to Users" />
            <Text_List title="History" />
            <Text_List title="Inbox" />
          </div>
        </div>
        <hr className="w-[90%] mx-auto p-[1px] bg-[#d0d0d0]" />
        <h3 className="text-[18px] mt-[30px] mb-[5px] text-[#034b5e] ml-[40px] font-bold">Other</h3>
        <div className="flex h-[70px] w-[250px] mx-auto">
          <div className="ml-[23px]">
            <Img_list src={Information} title={""} open={false} isActive={false} />
          </div>
          <div className="ml-[25px]">
            <Text_List title="Help & Support" />
          </div>
        </div>

        <div className="flex h-[70px] w-[250px] mx-auto mt-[200px]">
          <div className="ml-[23px]">
            <Img_list src={Out} title={""} open={false} isActive={false} />
          </div>
          <div className="ml-[25px]">
            <Text_List title="Log Out" />
          </div>
        </div><img src={Logo} alt="" className="mx-auto w-[215px] pt-[15px]" />
        <h3 className="text-[18px] mt-[30px] mb-[5px] text-[#034b5e] ml-[40px] font-bold">General</h3>
        <div className="flex h-[255px] w-[250px] mx-auto">
          <div className="ml-[23px]">
            <Img_list src={Dash_Board} title={""} open={false} isActive={false} />
            <Img_list src={Profile} title={""} open={false} isActive={false} />
            <Img_list src={Arrow} title={""} open={false} isActive={false} />
            <Img_list src={History} title={""} open={false} isActive={false} />
            <Img_list src={Inbox} title={""} open={false} isActive={false} />
          </div>
          <div className="ml-[25px]">
            <Text_List title="Dashboard" />
            <Text_List title="Manage Users" />
            <Text_List title="Transfer to Users" />
            <Text_List title="History" />
            <Text_List title="Inbox" />
          </div>
        </div>
        <hr className="w-[90%] mx-auto p-[1px] bg-[#d0d0d0]" />
        <h3 className="text-[18px] mt-[30px] mb-[5px] text-[#034b5e] ml-[40px] font-bold">Other</h3>
        <div className="flex h-[70px] w-[250px] mx-auto">
          <div className="ml-[23px]">
            <Img_list src={Information} title={""} open={false} isActive={false} />
          </div>
          <div className="ml-[25px]">
            <Text_List title="Help & Support" />
          </div>
        </div>

        <div className="flex h-[70px] w-[250px] mx-auto mt-[200px]">
          <div className="ml-[23px]">
            <Img_list src={Out} title={""} open={false} isActive={false} />
          </div>
          <div className="ml-[25px]">
            <Text_List title="Log Out" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Side_menu;
