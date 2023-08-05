const services = [
  { name: "advertising", active: false },
  { name: "hotel & resort", active: false },
  { name: "magazine", active: false },
  { name: "personal", active: false },
];

function Tabs() {
  return (
    <div className="pt-[6px] mb-[24px] grid xxs:grid-cols-2 md:grid-cols-4 justify-evenly items-center text-center">
      {services.map((service) => {
        return (
          <>
            <h2 className="text-sm hover:duration-700 cursor-pointer hover:opacity-100  font-Karla opacity-60 font-bold">
              {service.name}
            </h2>
          </>
        );
      })}
    </div>
  );
}

export default Tabs;
