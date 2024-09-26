// import Side_menu from "./Components/Side_Menu";
import Menu from "./Components/Main_menu";
import Side_2 from "./Components/Side_2";

function Admin():JSX.Element {
  return (
    <>
      <div className="h-auto w-full flex relative">
        <div className="fixed top-0 left-0 overflow-y-auto w-[24%] h-[700px] overflow-x-hidden ">
          <Side_2 />
        </div>
        <div className="h-auto w-full ml-[24%] ">
          <Menu />
        </div>
      </div>
      
    </>
  );
}
export default Admin;
