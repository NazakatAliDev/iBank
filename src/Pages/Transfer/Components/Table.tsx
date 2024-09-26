import search from "../../../assets/search.svg";
import { useSelector } from "react-redux";
import { fetchUserDataAsync } from "./../../store/reducer/reducer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Aside from "./aside";

interface Transfer_Props {
  title: string;
  description: string;
}

function Transfer_Table({ title, description }: Transfer_Props): JSX.Element {
  const Api_Data = useSelector((state) => state.user.data);
  // console.log(Api_Data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserDataAsync());
  });

  console.log(Api_Data);
  return (
    <>
      <div className="flex">
        <div className="h-auto px-[20px] mt-[50px] w-full ">
          <span className=" text-[#034b5e] text-[20px] font-bold">{title}</span>
          <div className="flex  w-[700px] mb-[30px]">
            <p className="text-[14px]">{description}</p>
            <div className="flex bg-[#ffffff] shadow-lg w-[250px] ml-[15px] rounded-[5px]">
              <img src={search} alt="" />
              <input type="text" placeholder="search" className="pl-[5px] outline-none" />
            </div>
          </div>

          <table className="table-auto h-auto w-full border-collapse rounded-lg text-[14px]">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Username</th>
                <th className="px-4 py-2 text-left">Account Number</th>
              </tr>
            </thead>
            <tbody>
              {Api_Data.map((item) => (
                <tr key={item.id}>
                  <td className="px-4 py-3">{item.name}</td>
                  <td className="px-4 py-3">{item.username}</td>
                  <td className="px-4 py-3">{item.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="h-auto mt-[50px] w-[20%] mx-auto flex justify-evenly">
            <button className="bg-[#fcba2d] px-[10px] rounded-[6px] text-[white]">1</button>
            <button className="bg-[#eff2f2] hover:bg-[#fcba2d] hover:text-white px-[10px] rounded-[6px] text-[black]">2</button>
            <button className="bg-[#eff2f2] hover:bg-[#fcba2d] hover:text-white px-[10px] rounded-[6px] text-[black]">3</button>
            <button className="bg-[#eff2f2] hover:bg-[#fcba2d] hover:text-white px-[10px] rounded-[6px] text-[black]">4</button>
            <button className="bg-[#eff2f2] hover:bg-[#fcba2d] hover:text-white px-[10px] rounded-[6px] text-[black]">5</button>
            <button className="bg-[#eff2f2] hover:bg-[#fcba2d] hover:text-white px-[10px] rounded-[6px] text-[black]">&lt;</button>
          </div>
        </div>

        <div>
          <Aside />
        </div>
      </div>
    </>
  );
}

export default Transfer_Table;
