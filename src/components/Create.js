import React, { Component } from 'react'
export class Create extends Component {
   


  render() {
    document.title='Create Room'
    return (
      <div>
      <h1 className="mt-3">Create Room</h1>
      <form className="container validate-form" noValidate style={{display:'flex',flexDirection:'column',alignItems:'center'}} action="/pollroom/create" method="post">
        <div className="container mt-4" style={{ width: `20rem`, marginTop: `8vh`, display:'flex',flexDirection:'column' }}>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">Room :</span>
            <input type="text" className="form-control" id="basic-url" placeholder="Room Name" name="roomName" aria-describedby="basic-addon3" />
            
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">Room Code :</span>
            <input type="password" className="form-control" id="basic-url" name="roomCode" aria-describedby="basic-addon3" />
          </div>
          
        </div>

        <button type="submit" className="btn btn-success">Create</button>

      </form>
    </div>
    )
  }
}

export default Create
