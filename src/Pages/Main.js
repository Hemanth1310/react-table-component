import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
export class Main extends Component {
    render() {
        return (
            <div style={{alignItems: "center"}}>
                <nav class="navbar navbar-dark bg-dark">
                <a class="navbar-brand" href="#">
                    DemoAPP
                </a>
                </nav>
                <br></br>
                <div class="row justify-content-center">
                    <h1>Select the data u want to view</h1>
                </div>
                <br></br>
                {/* <div>Click <NavLink to='/Transactions'>Here</NavLink> to view Transaction data</div>
                <div>Click <NavLink to='/Holdings'>Here</NavLink> to view Holdings data</div> */}
                <div class="row justify-content-center" >
                    <div class="col-sm-5">
                        <div class="card text-center text-white bg-danger mb-3">
                        <div class="card-body">
                            <h5 class="card-title">Transactions</h5>
                            <p class="card-text">To view Transaction data</p>
                            <a href="#"  ><NavLink to='/Transactions' class="btn btn-outline-warning text-white">Click Here</NavLink></a>
                        </div>
                        </div>
                    </div>
                    <div class="col-sm-5">
                        <div class="card text-center text-white  bg-info mb-3">
                        <div class="card-body">
                            <h5 class="card-title">Holdings</h5>
                            <p class="card-text">to view Holdings data</p>
                            <a href="#" ><NavLink to='/Holdings' class="btn btn-outline-warning text-white">Click Here</NavLink></a>
                        </div>
                        </div>
                    </div>
                    </div>
            
            
            
            </div>

        )
    }
}

export default Main
