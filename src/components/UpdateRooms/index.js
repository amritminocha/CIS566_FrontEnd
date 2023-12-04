import './index.css';
import roomData from '../../utilities/room-data.json';
import RoomList from '../RoomList';

const UpdateRoom = () =>{
 return <RoomList title="Update Room" isUpdate={true}/>
}

export default UpdateRoom;
