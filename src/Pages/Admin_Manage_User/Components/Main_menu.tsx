import Table_1 from "./Elements/Table";
import Navbar from "./Navbar";

function Menu(): JSX.Element {
  return (
    <>
      <div className="h-auto w-full mx-auto bg-[#f8f8f8]">
        <Navbar title="Manage Users" heading="Manage and organize your users" />
        <Table_1 />
      </div>
    </>
  );
}

export default Menu;
