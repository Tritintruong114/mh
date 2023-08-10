import { useState } from "react";
import { Link } from "react-router-dom";

const services = [
  { name: "advertising", active: false },
  { name: "hotel", active: false },
  { name: "magazine", active: false },
  { name: "personal", active: false },
];

function Tabs() {
  const [isActive, setIsActive] = useState("");

  const addActive = (name) => {
    setIsActive(name);
  };
  return (
    <div className="pt-[6px] md:flex md:flex-col md:fixed md:ml-20  sm:justify-center sm:items-center mb-[24px] grid xxs:grid-cols-4 justify-evenly items-center md:grid-cols-1 md:col-span-1 md:col-start-1 md:justify-start md:items-center md:mt-20 text-center">
      {services.map((service, index) => {
        return (
          <h2
            onClick={() => addActive(service.name)}
            key={index}
            className={`text-sm xl:text-base hover:duration-700 cursor-pointer hover:opacity-100  font-Karla opacity-50 font-bold ${
              isActive == service.name ? "--active" : null
            }`}>
            <Link to={`/${service.name}`}>{service.name}</Link>
          </h2>
        );
      })}
    </div>
  );
}

export default Tabs;
