import React from "react";

function Services() {
  let services = [
    { id: 1, name: "Group Training", photo: "./groupTrain.jpg" },
    { id: 2, name: "Individual Training", photo: "./individual.jpg" },
    { id: 3, name: "Fitnes ", photo: "./fitnes.jpg" },
    { id: 4, name: "Dietitian", photo: "./Dietitian.jpg" },
  ];

  return (
    <section className="bg-black text-white p-0 m-0">
      <div className=" h-screen flex justify-end items-center flex-col">
        <h1 className="text-center text-[2em] pt-[50px]">Our Services</h1>

        <div className="overflow-x-auto lg:overflow-visible grid grid-cols-2 gap-[20px]  py-[40px] md:px-0 px-[15px]">
          {services.map((service) => (
            <div key={service.id} className="shrink-0">
              <img
                src={service.photo}
                alt={service.name}
                className="w-[300px] h-[240px]"
              />
              <h3 className="text-center">{service.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
