import { LiaBarsSolid } from "react-icons/lia";

function Header() {
  return (
    <div className="w-full h-full xl:col-start-3 md:mb-9 xl:items-center xl:justify-center xs:justify-between border-b xl:border-0 border-opacity-30 border-black pb-4 xs:flex-row  flex-col uppercase flex justify-center items-center font-Karla font-bold tracking-widest">
      <h2 className="xl:text-md">ManhHieu</h2>
      <div className=" mt-4 xs:m-0 text-xs gap-[9px] xl:hidden flex justify-center items-center">
        <p className="font-medium text-sm">Menu</p>
        <LiaBarsSolid />
      </div>
      <div className="absolute bottom-0 hidden xl:grid">
        <p className="font-bold opacity-40 hover:opacity-100 cursor-pointer duration-300">Projects</p>
        <p className="font-bold opacity-40 hover:opacity-100 cursor-pointer duration-300">Client</p>
        <p className="font-bold opacity-40 hover:opacity-100 cursor-pointer duration-300">Contact</p>
      </div>
    </div>
  );
}

export default Header;
