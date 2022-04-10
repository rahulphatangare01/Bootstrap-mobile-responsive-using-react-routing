import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
         <div className="main ">
        <div className="jumbotron">
          <h1 className="display-4 text-center" style={{color: 'red', fontWeight: 'bold', fontStyle: 'italic'}}>Home Page - RP Group</h1>
          <p className="lead text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus ipsam dolore expedita, similique, cum sequi perferendis temporibus, nostrum laudantium aut reprehenderit libero modi ipsum sit debitis facilis ut optio fugiat?
          </p>
          <div className="text-center">
          <Link className="btn btn-primary btn-lg text-center"  to="/product"> Product Page</Link>
          <Link className="btn btn-dark btn-lg text-center"  to="/service1"> Service1</Link>

           
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="card" style={{width: '18rem'}}>
                <img src="https://source.unsplash.com/286x180/?house,android" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button type="button" className="btn btn-light">Edit</button>
                  <button type="button" className="btn btn-light">View</button>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card" style={{width: '18rem'}}>
                <img src="https://source.unsplash.com/286x180/?river,android" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button type="button" className="btn btn-light">Edit</button>
                  <button type="button" className="btn btn-light">View</button>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card" style={{width: '18rem'}}>
                <img src="https://source.unsplash.com/286x180/?mountan,android" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-light">Left</button>
                    <button type="button" className="btn btn-light">View</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home