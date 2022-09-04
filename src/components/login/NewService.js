import React from "react";

const NewService = (props) => {
  return (
    <div className="newService">
      <input
        type="text"
        name="naslov"
        placeholder="Naslov"
        required
        className="newServiceH3"
      />
      <textarea name="opis" id="opis" cols="30" rows="10" required></textarea>
      <input type="image" src="" alt="" />
      <button>Izloži</button>
    </div>
  );
};

export default NewService;
