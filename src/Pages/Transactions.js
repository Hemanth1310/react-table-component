import React, { Component } from 'react';

import { TableConstants } from './tableConstent';

import {Table} from '../Components/Pagination'
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css"
import {Testing} from './tableConstentMobileView'



export class Head extends Component {
    
    state={
        loading:true,
        data:[],
        ara:[],
        clicked:false,
        discription:null,
        title:null,
        displayed:false,
        isDesktop: window.innerWidth < 600,
        screenWidth: null,
       
    }

    componentDidMount(){
        const apiUrl = 'https://canopy-frontend-task.vercel.app/api/transactions';
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) =>{ 
            this.setState({
                ara:data['transactions']
            })

            console.log('This is your data', this.state.ara)
            
        
        });
       
    }
    
    render() {

        let posts=this.state.ara;
          
      
      
        const isDesktop =this.state.isDesktop;
        return (
            // <Styles>
            <div >

          
            {isDesktop ? (
                        <Table columns={Testing()} data={this.state.ara} />
              ) : (
                <Table columns={TableConstants()} data={this.state.ara} />
              )}     

           
            </div>
            
        
        )
    }
}

export default Head
