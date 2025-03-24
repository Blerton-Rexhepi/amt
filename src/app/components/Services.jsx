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
      <div className=" h-screen">
        <h1 className="text-center text-[2em] pt-[50px]">Our Services</h1>

        <div className=" flex gap-[20px] justify-center items-center py-[40px]">
          {services.map((service) => (
            <div key={service.id} className="">
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
