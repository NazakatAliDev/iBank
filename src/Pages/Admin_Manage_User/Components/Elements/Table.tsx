import search from "../../../../assets/search.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserDataAsync } from "../../../store/reducer/reducer";

function Table_1(): JSX.Element {
  const dispatch = useDispatch();
  const Api_Data = useSelector((state) => state.user.data);

  useEffect(() => {
    dispatch(fetchUserDataAsync());
  }, [dispatch]);

  return (
    <>
      <div className="bg-[white] px-[20px] mt-[25px] pb-[40px] rounded-[10px] w-full">
        <div className="flex bg-[white] pt-[50px]">
          <div className="w-[40%] ">
            <h1 className="text-[18px] text-[#034b5e] font-bold">User List</h1>
          </div>
          <div className="h-auto w-[full] flex justify-between rounded">
            <div className="flex bg-[#ffffff] h-auto w-[240px] shadow">
              <img src={search} alt="" className="h-[25px] mt-[5px] ml-[8px]" />
              <input type="text" placeholder="Search" className="pl-[8px] ml-[8px] border-none outline-none" />
            </div>
            <div className="ml-[20px]">
              <select name="Filter by" className="py-[7px] px-[12px] rounded-[12px] bg-[#f8f8f8] font-bold mr-[10px]">
                <option value="">Filter by</option>
              </select>
              <select name="Sort by" className="py-[7px] px-[12px] rounded-[12px] bg-[#f8f8f8] font-bold">
                <option value="">Sort by</option>
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
              {Api_Data.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.address.city}</td>
                  <td>{user.address.suite}</td>
                  <td>{user.address.zipcode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Table_1;
