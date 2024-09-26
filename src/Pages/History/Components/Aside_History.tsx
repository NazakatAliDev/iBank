import { useSelector } from "react-redux";
import search1 from "../../../assets/search.svg";

function Aside_History(): JSX.Element {
  const Api_Data = useSelector((state) => state.user.data);
  // console.log(Api_Data);
  return (
    <>
      <div className="h-auto w-full">
        <div className="h-[200px] w-full py-[40px] pl-[12px] rounded-[10px]">
          <span className="text-[16px] font-bold text-[#298097]">Your Transfer to Users</span>
          <p className="text-[12px]">Select one or more that you want to transfer</p>
          <div className="h-auto flex w-full mt-[20px]">
            <select className="px-[10px] text-[12px] py-[3px] rounded-[6px] border border-[grey]">
              <option value="">Filter by</option>
            </select>
            <div className="flex bg-[#ffffff] shadow-lg w-[160px] ml-[10px] rounded-[5px]">
              <img src={search1} alt="" />
              <input type="text" placeholder="search" className="pl-[5px] outline-none w-[40%]" />
            </div>
          </div>
        </div>
        <div className="border-solid border-[2px] border-[grey] rounded-[10px]">
          <table className="table-auto h-auto w-full border-collapse b rounded-lg text-[14px]">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Receiver</th>
                <th className="px-4 py-2 text-left">Date Transfer</th>
              </tr>
            </thead>
            <tbody>
              {Api_Data.map((item) => (
                <tr key={item.id}>
                  <td className="px-4 py-3">{item.name}</td>
                  <td className="px-4 py-3">{item.username}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="h-auto mt-[50px] w-[80%] mx-auto flex justify-evenly">
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

export default Aside_History;
