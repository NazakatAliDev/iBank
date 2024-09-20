function Aside(): JSX.Element {
  return (
    <>
      <div className="h-auto w-full">
        <div className="h-[300px] w-full py-[40px] pl-[30px] rounded-[10px]">
          <span className="text-[16px] font-bold text-[#298097]">Selected Users</span>
          <p className="text-[12px]">Here is a list username of selected users</p>
          <div className="h-[100px] mt-[35px] w-[90%] rounded-[10px] pl-[10px] pt-[20px] border-[2px] border-[grey]">
            <button className="bg-[#b9b9b9] px-[10px] text-[10px] rounded-[10px]">Kamadou Tanjiro</button>
            <button className="bg-[#b9b9b9] px-[10px] text-[10px] inline-block ml-[2px] rounded-[10px]">Robi Gojo Satorou</button>
            <button className="bg-[#b9b9b9] px-[10px] rounded-[10px] text-[10px] ml-[1px] mt-[10px]">Nico Robin</button>
            <button className="bg-[#b9b9b9] px-[10px] rounded-[10px] text-[10px] ml-[1px]">Usop Regen</button>
            <button className="bg-[#b9b9b9] px-[10px] rounded-[10px] text-[10px] ml-[1px]">Luffy99</button>
          </div>
        </div>
        <div>
          <div className="h-[370px] w-full py-[40px] pl-[30px] mt-[10px] rounded-[10px]">
            <span className="text-[16px] font-bold text-[#298097]">Input Amount</span>
            <p className="text-[12px]">Only selected users will be receive this balance</p>
            <div className="h-[100px] mt-[35px] w-[90%] rounded-[10px] pl-[10px] pt-[20px] border-[2px] border-[grey]">
              <span className="block text-[12px]">Amount</span>
              <input type="text" placeholder="Amount" className="rounded-[5px] my-[5px] pl-[15px] text-[12px]" />
              <br /> <input type="checkbox" checked className="mt-[45px]" /> <span className="text-[12px]">Are you sure transfer to this users ?</span>
              <button className="bg-[#f8ad15] mt-[20px] px-[85px] text-[11px] rounded-[10px] block text-white py-[10px]">Transfer</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aside;
