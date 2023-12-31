function Footer() {
  return (
    <div className="w-full xl:flex xl:flex-col xl:justify-center xl:items-center right-0 xl:w-1/2 border-t pt-[21px] border-black border-opacity-30">
      <div className="flex gap-2 w-full justify-center items-cente uppercase font-medium text-xxs tracking-widest text-center">
        <p>Facebook</p>
        <p>/</p>
        <p>Instagram</p>
      </div>

      <div className="font-light font-Karla w-1/2  grid xxs:flex justify-center uppercase items-center text-xxs tracking-widest mt-[21px]">
        <p>manhhieucontact@gmail.com / (+84) 111 111 111</p>
        {/* <p>(+84) 111 111 111</p> */}
      </div>
    </div>
  );
}

export default Footer;
