import React from 'react'

function Contactus() {
  return (
    <div>
        <div className="main ">
        <div className="container jumbotron mt-30 ">
          <h2 className="text-center">Contacts us</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium tempora minima, veniam, ducimus ipsam in mollitia sapiente dolores unde, explicabo harum ullam distinctio molestias laborum vero voluptates. Ratione, fugiat illum.
          </p>
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Name</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Massage</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contactus