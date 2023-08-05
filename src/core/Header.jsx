import { LiaBarsSolid } from "react-icons/lia";

function Header() {
  return (
    <div className="w-full border-b border-opacity-30 border-black pb-4  flex-col uppercase flex justify-center items-center font-Karla font-bold tracking-widest">
      <h2>ManhHieu</h2>
      <div className="w-full mt-4 text-xs gap-[9px] flex justify-center items-center">
        <p className="font-medium text-sm">Menu</p>
        <LiaBarsSolid />
      </div>
    </div>
  );
}

export default Header;
