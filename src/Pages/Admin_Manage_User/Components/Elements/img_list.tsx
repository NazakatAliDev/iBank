interface Img_Props {
  src: string;
  title: string;
  open: boolean;
  isActive: boolean;
}

function Img_list({ src, title, open, isActive }: Img_Props): JSX.Element {
  return (
    <>
      <div className={`${!open && "w-[35px]"} duration-300 flex h-auto w-[200px]`}>
        <img src={src} alt="This is Side Menu Img" className="mt-[28px] h-[20px]" />
        <span className={`${!open && "hidden"} duration-200 ml-[25px] mt-[28px] text-[15px] hover:bg-[#cbc9c9] cursor-pointer ${isActive ? "text-yellow-500" : "text-[#d0d0d0]"}`}>{title}</span>
      </div>
    </>
  );
}

export default Img_list;
