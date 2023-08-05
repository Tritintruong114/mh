import { Link } from "react-router-dom";

const services = [
  { name: "advertising", active: false },
  { name: "hotel", active: false },
  { name: "magazine", active: false },
  { name: "personal", active: false },
];

function Tabs() {
  return (
    <div className="pt-[6px] md:flex md:flex-col  sm:justify-center sm:items-center mb-[24px] grid xxs:grid-cols-4 justify-evenly items-center md:grid-cols-1 md:justify-start md:items-center md:mt-20 text-center">
      {services.map((service) => {
        return (
          <>
            <h2 className="text-sm hover:duration-700 cursor-pointer hover:opacity-100  font-Karla opacity-60 font-bold">
              <Link to={service.name}>
                {service.name}
              </Link>
            </h2>
          </>
        );
      })}
    </div>
  );
}

export default Tabs;
