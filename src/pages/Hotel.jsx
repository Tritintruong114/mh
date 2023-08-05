//Fetching data

const galleries = [
  {
    name: "Havana Resort",
    img: "https://c4.wallpaperflare.com/wallpaper/282/810/421/ocean-summer-summertime-hotel-wallpaper-preview.jpg",
  },
  {
    name: "Intercontinental Resort",
    img: "https://media.cntraveller.com/photos/611be86ed5b6f5a4a3deefe9/16:9/w_2560%2Cc_limit/Seaside-Pool-Villa-intercontinental-danang-sun-peninsula-resort-danang-vietnam-conde-nast-traveller-7feb17-pr.jpg",
  },
  {
    name: "Sheraton Resort",
    img: "https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/http://www.cfmedia.vfmleonardo.com/imageRepo/6/0/100/22/801/nhasi-exterior-7572-ver-clsc_O/Sheraton-Nha-Trang-Hotel-%26-Spa-Exterior.jpg?tr=w-780%2Ch-437%2Cfo-auto",
  },
];
function Hotel() {
  return (
    <div className="w-full gap-3 h-full justify-center items-center grid grid-cols-1 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
      {galleries.map((item, index) => {
        return (
          <>
            <div
              key={index}
              className="w-full group relative overflow-hidden bg-red-300">
              <img
                className="w-full duration-700 hover:scale-110 aspect-video object-cover"
                src={item.img}
              />
              <p className="font-medium left-1 group-hover:opacity-100 opacity-0 duration-700 bg-black  text-white bottom-0 px-3 font-Karla absolute">
                {item.name}
              </p>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Hotel;
