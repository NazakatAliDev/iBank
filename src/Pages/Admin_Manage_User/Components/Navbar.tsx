import Notification from "../../../assets/Notification.svg";
import Ellipse_45 from "../../../assets/Ellipse_45.svg";
function Navbar({ title, heading }: { title: string; heading: string }) {
  return (
    <>
      <div className="h-[70px] w-[full] flex justify-between px-[20px] mt-[20px]">
        <div className="mt-[8px]">
          <h2 className="text-[18px] text-[#034b5e] font-bold">{title}</h2>
          <p>{heading}</p>
        </div>
        <div>
          <div className="inline h-[50px] w-[50px] rounded-[50%] bg-[white] p-[8px] ">
            <img src={Notification} alt="" className="inline" />
          </div>
          <img src={Ellipse_45} alt="" className="inline mt-[10px]" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
