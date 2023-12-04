import "./index.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../utilities/axios";

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

const UpdateRoom = () => {
  const { roomId } = useParams();
  const roomData = localStorage.getItem("selectedRoom");
  const [roomValue, setRoomValue] = useState(JSON.parse(roomData));

  useEffect(() => {
    axios
      .get(`/findRoom?id=${roomId}`)
      .then((res) => {
        setRoomValue(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (roomValue === {}) {
    return <div className="updateRoom updateRoom_wrongId">Wrong Room Id</div>;
  }

  const updateHandler = () => {
    axios.put('/updateRoom', roomValue).then((res) => {
      window.alert("Room Updated");
      window.location = "/rooms";
    });
  };

  const inputChange = (event) => {
    const id = event.target.name;
    const value = event.target.value;
    setRoomValue({ ...roomValue, [id]: value });
  };

  const radioButtonChange = (event) => {
    const id = event.target.name;
    const value = event.target.value;
    let finalData = roomValue[id] || [];
    if (finalData.find((item) => item === value)) {
      finalData = finalData.filter((item) => item !== value);
    } else {
      finalData = [...finalData, value];
    }
    setRoomValue({ ...roomValue, [id]: finalData });
  };

  return (
    <div className="updateRoom">
      <h1 className="updateRoom_title">Update Room</h1>
      <div className="updateRoom_input_container">
        <div className="updateRoom_name">Name</div>
        <input
          name="roomName"
          type="text"
          className="updateRoom_value"
          onChange={inputChange}
          placeholder="Room Name"
          value={roomValue.roomName}
        ></input>
      </div>
      <div className="updateRoom_input_container">
        <div className="updateRoom_name">Detail</div>
        <input
          name="detail"
          type="text"
          className="updateRoom_value"
          onChange={inputChange}
          placeholder="Room Detail"
          value={roomValue.detail}
        ></input>
      </div>
      <div className="updateRoom_input_container">
        <div className="updateRoom_name">Amenities</div>
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
                checked={(roomValue.amenities || []).find((item) => item === value)}
              />
              <label htmlFor={value}>{label}</label>
            </div>
          ))}
        </div>
        {/* <input
          name="amenities"
          type="text"
          className="updateRoom_value"
          onChange={inputChange}
          placeholder="Amenities"
          value={roomValue.amenities}
        ></input> */}
      </div>
      <div className="updateRoom_input_container">
        <div className="updateRoom_name">Price</div>
        <input
          name="price"
          type="number"
          className="updateRoom_value"
          onChange={inputChange}
          placeholder="Room Price"
          value={roomValue.price}
        ></input>
      </div>
      <div className="updateRoom_input_container">
        <div className="updateRoom_name">Type</div>
        <select
          name="type"
          className="updateRoom_select"
          onChange={inputChange}
        >
          <option value="Deluxe" selected={roomValue.type === "Deluxe"}>
            Deluxe
          </option>
          <option value="Regular" selected={roomValue.type === "Regular"}>
            Regular
          </option>
        </select>
      </div>
      <button
        type="button"
        className="updateRoom_addButton"
        onClick={updateHandler}
      >
        Update
      </button>
    </div>
  );
};

export default UpdateRoom;
