import './Rooms.scss';
// import room1 from '../../assets/room1.jpg'
import RoomsItem from './RoomsItem';



const Rooms = () => {
  return (
    <>

        <div className="rooms">
            <div className="container">
                <div className="rooms content">
                    <div className="rooms-title">Nasze pokoje</div>
                    <div className="rooms-items">

                      <RoomsItem />
                        
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Rooms
