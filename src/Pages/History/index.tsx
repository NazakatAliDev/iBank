import Side_2 from "../Admin_Manage_User/Components/Side_2";
import Navbar from "../Admin_Manage_User/Components/Navbar";
import Menu_History from "./Components/menu";

function History(): JSX.Element {
  return (
    <>
      <div className="h-auto w-full flex overflow-hidden relative">
        <div className="h-[600px] w-[23%] fixed top-0 left-0 overflow-y-auto overflow-x-hidden">
          <Side_2 />
        </div>

        <div className="h-auto w-full ml-[23%] px-[10px]">
          <Navbar title="History Transfer" heading="Transfers balance to your users" />
          <Menu_History />
        </div>
      </div>
    </>
  );
}

export default History;
