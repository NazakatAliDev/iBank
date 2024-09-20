import search from "../../../../assets/search.svg";

function Table_Nav(): JSX.Element {
  return (
    <>
      <div className="flex mt-[80px] bg-[white]">
        <div className="w-[40%]">
          <h1 className="text-[18px] text-[#034b5e] font-bold">User List</h1>
        </div>
        <div className="h-auto w-[60%] flex justify-between rounded">
          <div className="flex bg-[#ffffff] h-auto w-[240px]">
            <img src={search} alt="" className="h-[25px] mt-[5px] ml-[8px]" />
            <input type="text" placeholder="Search" className="pl-[8px] ml-[8px]" />
          </div>
          <div>
            <select name="Filter by" className="py-[7px] px-[12px] rounded-[12px] bg-[#f8f8f8] font-bold ">
              <option value="Filter by" className="px-[15px]">
                Filter by
              </option>
            </select>
            <select name="Filter by" className="py-[7px] px-[12px] rounded-[12px] bg-[#f8f8f8] font-bold ">
              <option value="Filter by" className="px-[15px]">
                Sort by
              </option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table_Nav;
