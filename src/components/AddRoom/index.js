import { useState } from "react";
import axios from "../../utilities/axios";
import "./index.css";

const roomTypes = [
  {
    label: "Regular",
    value: "REGULAR",
  },
  {
    label: "Semi Deluxe",
    value: "SEMI_DELUXE",
  },
  {
    label: "Deluxe",
    value: "DELUXE",
  },
];
const amenitiesType = [
  {
    label: "Wifi",
    value: "wifi",
  },
  {
    label: "TV",
    value: "tv",
  },
  {
    label: "Fridge",
    value: "fridge",
  },
];

const AddRoom = () => {
  const [data, setData] = useState({
    name: "",
    detail: "",
    price: "",
    roomType: roomTypes[0].value,
    amenities: "",
  });

  const inputChange = (event) => {
    const id = event.target.name;
    const value = event.target.value;
    setData({ ...data, [id]: value });
  };
  const radioButtonChange = (event) => {
    const id = event.target.name;
    const value = event.target.value;
    let finalData = data[id] || [];
    if (finalData.find((item) => item === value)) {
      finalData = finalData.filter((item) => item !== value);
    } else {
      finalData = [...finalData, value];
    }
    setData({ ...data, [id]: finalData });
  };

  const addRoom = () => {
    axios
      .post("/addRoom", {
        roomName: data.name,
        roomType: data.roomType,
        detail: data.detail,
        price: data.price,
        amenities: data.amenities,
      })
      .then((res) => {
        alert("Room Data saved successfully");
        window.location = "/";
      })
      .catch((err) => {
        alert("Error in saving data");
      });
  };

  return (
    <div className="addRoom">
      <h1 className="addRoom_title">Add Room</h1>
      <div className="addRoom_input_container">
        <div className="addRoom_name">Name</div>
        <input
          name="name"
          type="text"
          className="addRoom_value"
          placeholder="Room Name"
          value={data.name}
          onChange={inputChange}
        ></input>
      </div>
      <div className="addRoom_input_container">
        <div className="addRoom_name">Detail</div>
        <input
          name="detail"
          type="text"
          className="addRoom_value"
          placeholder="Room Detail"
          value={data.detail}
          onChange={inputChange}
        ></input>
      </div>
      <div className="addRoom_input_container">
        <div className="addRoom_name">Amenities</div>
        <div className="flex column">
          {amenitiesType.map(({ value, label }) => (
            <div className="addRoom_radio-buttons">
              <input
                id={value}
                name="amenities"
                type="checkbox"
                className="addroom-radio-button"
                value={value}
                onChange={radioButtonChange}
              />
              <label htmlFor={value}>{label}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="addRoom_input_container">
        <div className="addRoom_name">Price</div>
        <input
          name="price"
          type="number"
          className="addRoom_value"
          placeholder="Room Price"
          value={data.price}
          onChange={inputChange}
          min="0"
        ></input>
      </div>
      <div className="addRoom_input_container">
        <div className="addRoom_name">Type</div>
        <select
          name="roomType"
          className="addRoom_select"
          onChange={inputChange}
        >
          {roomTypes.map(({ value, label }) => (
            <option
              key={value}
              selected={data.roomType === value}
              value={value}
            >
              {label}
            </option>
          ))}
        </select>
      </div>
      <button type="button" className="addRoom_addButton" onClick={addRoom}>
        Add
      </button>
    </div>
  );
};

export default AddRoom;
