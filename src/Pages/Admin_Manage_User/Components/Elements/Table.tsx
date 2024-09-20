import search from "../../../../assets/search.svg";

function Table_1(): JSX.Element {
  return (
    <>
    <div className="bg-[white] px-[20px] mt-[25px] pb-[40px] rounded-[10px]">
      <div className="flex  bg-[white] pt-[50px]">
        <div className="w-[40%] ">
          <h1 className="text-[18px] text-[#034b5e] font-bold">User List</h1>
        </div>
        <div className="h-auto w-[60%] flex justify-between rounded">
          <div className="flex bg-[#ffffff] h-auto w-[240px] shadow">
            <img src={search} alt="" className="h-[25px] mt-[5px] ml-[8px]" />
            <input type="text" placeholder="Search" className="pl-[8px] ml-[8px] border-none outline-none" />
          </div>
          <div>
            <select name="Filter by" className="py-[7px] px-[12px] rounded-[12px] bg-[#f8f8f8] font-bold mr-[10px]">
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
      <div className="h-auto w-full mt-[34px] bg-[white]">
        <table className="table-auto rounded-[10px] w-[100%] border border-slate-600 border-spacing-4 border-separate">
          <thead>
            <tr className="border-collapse border border-slate-500">
              <th className="text-left text-[18px] text-[#034b5e] font-bold">Name</th>
              <th className="text-left text-[18px] text-[#034b5e] font-bold">Username</th>
              <th className="text-left text-[18px] text-[#034b5e] font-bold">Account Number</th>
              <th className="text-left text-[18px] text-[#034b5e] font-bold">Balance</th>
              <th className="text-left text-[18px] text-[#034b5e] font-bold">Branch</th>
              <th className="text-left text-[18px] text-[#034b5e] font-bold">Swift Code</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="">Kathryn Murphy</td>
              <td className="">Katrhyn21</td>
              <td className="">(808) 555-0111</td>
              <td className="">$2229.78</td>
              <td className="">Jember</td>
              <td className="">68342</td>
            </tr>
            <tr>
              <td className="">Courtney Henry</td>
              <td className="">Henrygaul</td>
              <td className="">(208) 555-0112</td>
              <td className="">$778.35</td>
              <td className="">Banyuwangi</td>
              <td className="">68488</td>
            </tr>
            <tr>
              <td className="">Eleanor Pena</td>
              <td className="">Penagolem</td>
              <td className="">(239) 555-0108</td>
              <td className="">$328.85</td>
              <td className="">Surabaya</td>
              <td className="">62912</td>
            </tr>
            <tr>
              <td className="">Floyd Miles</td>
              <td className="">Floydbanjir</td>
              <td className="">(480) 555-0103</td>
              <td className="">$2193.78</td>
              <td className="">Purwokerto</td>
              <td className="">90882</td>
            </tr>
            <tr>
              <td className="">Kathryn Murphy</td>
              <td className="">Katrhyn21</td>
              <td className="">(808) 555-0111</td>
              <td className="">$219.78</td>
              <td className="">Jember</td>
              <td className="">68342</td>
            </tr>
            <tr>
              <td className="">Courtney Henry</td>
              <td className="">Henrygaul</td>
              <td className="">(208) 555-0112</td>
              <td className="">$778.35</td>
              <td className="">Banyuwangi</td>
              <td className="">68488</td>
            </tr>
            <tr>
              <td className="">Eleanor Pena</td>
              <td className="">Penagolem</td>
              <td className="">(239) 555-0108</td>
              <td className="">$328.85</td>
              <td className="">Surabaya</td>
              <td className="">62912</td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
}

export default Table_1;
