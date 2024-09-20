import search from "../../../assets/search.svg";

function Menu_History(): JSX.Element {
  return (
    <>
      <div className="h-auto w-full py-[50px]">
        <span className=" text-[#034b5e] text-[20px] font-bold ml-[20px] ">Transfer Users to Users</span>
        <p className="text-[12px] ml-[20px] ">Select one or more that you want to transfer</p>
        <div className="h-auto w-full  flex justify-evenly mt-[20px]">
          <select className="px-[10px] text-[12px] py-[3px] border border-[grey] rounded-[6px]">
            <option value="">Filter by</option>
          </select>
          <select className="px-[10px] text-[12px] py-[3px] rounded-[6px] border border-[grey]">
            <option value="">Sort by</option>
          </select>
          <div className="flex bg-[#ffffff] shadow-lg w-[250px] ml-[15px] rounded-[5px]">
            <img src={search} alt="" />
            <input type="text" placeholder="search" className="pl-[5px] outline-none" />
          </div>
        </div>
        <div className="border-solid border-[2px] border-[grey] rounded-[10px] mt-[15px]">
          <table className="table-auto h-auto w-full border-collapse b rounded-lg text-[14px]">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Sender</th>
                <th className="px-4 py-2 text-left">Receive</th>
                <th className="px-4 py-2 text-left">Date Transfer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-3">Fadhil Arga</td>
                <td className="px-4 py-3">Katrhyn21</td>
                <td className="px-4 py-3">(808) 555-0111</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Fadhil Aksara</td>
                <td className="px-4 py-3">Henrygaul</td>
                <td className="px-4 py-3">(208) 555-0112</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Fadhil Rubian</td>
                <td className="px-4 py-3">Penagolem</td>
                <td className="px-4 py-3">(239) 555-0108</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Fadhil Gimari</td>
                <td className="px-4 py-3">Floydbanjir</td>
                <td className="px-4 py-3">(480) 555-0103</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Fadhil Muhammad</td>
                <td className="px-4 py-3">Katrhyn21</td>
                <td className="px-4 py-3">(808) 555-0111</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Fadhil Sausu</td>
                <td className="px-4 py-3">Henrygaul</td>
                <td className="px-4 py-3">(208) 555-0112</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Fadhil Robert</td>
                <td className="px-4 py-3">Penagolem</td>
                <td className="px-4 py-3">(239) 555-0108</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="h-auto mt-[50px] w-[40%] mx-auto flex justify-evenly">
          <button className="bg-[#fcba2d] px-[10px] rounded-[6px] text-[white]">1</button>
          <button className="bg-[#eff2f2] hover:bg-[#fcba2d] hover:text-white px-[10px] rounded-[6px] text-[black]">2</button>
          <button className="bg-[#eff2f2] hover:bg-[#fcba2d] hover:text-white px-[10px] rounded-[6px] text-[black]">3</button>
          <button className="bg-[#eff2f2] hover:bg-[#fcba2d] hover:text-white px-[10px] rounded-[6px] text-[black]">4</button>
          <button className="bg-[#eff2f2] hover:bg-[#fcba2d] hover:text-white px-[10px] rounded-[6px] text-[black]">5</button>
          <button className="bg-[#eff2f2] hover:bg-[#fcba2d] hover:text-white px-[10px] rounded-[6px] text-[black]">&lt;</button>
        </div>
      </div>
    </>
  );
}

export default Menu_History;
