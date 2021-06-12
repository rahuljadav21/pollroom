import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import Polls from './Polls';

function Child({room,polls,user }) {
    document.title=`${room.roomName}`
   return (
        <>
            <div id="title"><h3>{room.roomName}</h3>
            <p>Please submit each poll only if you sure. You can only submit once. </p>
            </div>
            <div className="container">
                <div className="poll-container">

                    {<Polls room={room} polls={polls} user={user} />}
                </div>
                <div className="add-container">
                    <form action={`/pollroom/room/${room._id}`} method='post'>
                        <textarea name="question" id="" cols="20" rows="10" placeholder="Paste/Type the question here"></textarea>
                        <button style={{background:'#198754'}}>Add</button>
                    </form>
                </div>
            </div>

        </>
    );

}

function Parent() {

    const [room, setRoom] = useState({})
    const [polls, setPolls] = useState([])
    const { id } = useParams();

    const fetchRoom = async () => {
        await axios.get(`/pollroom/room/${id}`, { withCredentials: true })
            .then((res) => {

                setRoom(res.data)
                setPolls(res.data.polls)
            });

    }

    useEffect(() => {
        fetchRoom();
    });

    const [user,setUser] = useState({})
    useEffect(() => {
      axios.get("/getuser", { withCredentials: true }).then((res) => {
         
          setUser(res.data)
      });
  }, []);



    return (
        <>

            {room && <Child room={room} polls={polls} user={user} />}

        </>
    );
}



export default Parent
