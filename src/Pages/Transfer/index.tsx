import Side_2 from "../Admin_Manage_User/Components/Side_2";
import Navbar from "../Admin_Manage_User/Components/Navbar";
import Transfer_Table from "./Components/Table";
import Aside from "./Components/aside";

function Transfer(): JSX.Element {
  return (
    <>
      <div className="flex w-[full] relative">
        <div className="w-[307px] h-[600px] fixed top-0 left-0 overflow-y-auto overflow-x-hidden">
          <Side_2 />
        </div>
        <div className="h-auto w-[54%] ml-[23%]">
          <Navbar title="Transfer to Users" heading="Transfers balance to your users" />
          <Transfer_Table title="Transfer to Users" description="Select one or more that you want to transfer" />
        </div>
        <div className="h-[auto] w-[23%] pt-[80px]">
          <Aside />
        </div>
      </div>
    </>
  );
}

export default Transfer;
