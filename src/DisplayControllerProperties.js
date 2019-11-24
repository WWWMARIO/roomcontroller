import React from 'react'
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


class DisplayControllerProperties extends React.Component {

    constructor(props){
        super(props)
    //this.setState({CurrentTempFromLocalStorage:JSON.parse(localStorage.getItem("currentTemperatureLocal"))})


        this.state = {       
            //CurrentTempFromLocalStorage:JSON.parse(localStorage.getItem("currentTemperatureLocal"))
            CurrentTempFromLocalStorage:""
          }    
   
    }

    componentDidMount() { 
        setTimeout(() => {
            console.log( "this.setState")

            this.setState({CurrentTempFromLocalStorage:JSON.parse(localStorage.getItem("currentTemperatureLocal"))})
          }, 1000)        
        
        }



    changeCurrentTempFromLocalStorage=event=>
    
    {        
        let CurrentTempFromLocalStorage=JSON.parse(localStorage.getItem("currentTemperatureLocal"))
           
        if (event.target.value==='+')
        {
            CurrentTempFromLocalStorage[this.props.item.id]=String(Number(CurrentTempFromLocalStorage[this.props.item.id])+1)
        }            
        if (event.target.value==='-')
        {
            CurrentTempFromLocalStorage[this.props.item.id]=String(Number(CurrentTempFromLocalStorage[this.props.item.id])-1)
        }
        localStorage.setItem("currentTemperatureLocal",JSON.stringify(CurrentTempFromLocalStorage))
       
        this.setState ({
            CurrentTempFromLocalStorage:CurrentTempFromLocalStorage
        })
        
    
    }


    render(){
    
        return(
                
    <Table size="small" >
        <TableRow >
            <TableCell colSpan={3}><strong>Properties:</strong></TableCell>
        </TableRow>
        <TableRow>
            <TableCell>Set temperature:</TableCell>
            <TableCell>{this.state.CurrentTempFromLocalStorage[this.props.item.id]}
                
            <button variant="contained" value="+" onClick={this.changeCurrentTempFromLocalStorage}>+</button>
            <button variant="contained" value="-" onClick={this.changeCurrentTempFromLocalStorage}>-</button>
                         
            
            </TableCell>
        </TableRow>
        <TableRow>
            <TableCell>Current temperature:</TableCell>
            <TableCell>{this.props.item.properties[8].Value}</TableCell>
        </TableRow>          
        <TableRow>
            <TableCell>{this.props.item.properties[24].Value==="1"?<p>DND</p>:<p></p>}</TableCell>            
        </TableRow>
        <TableRow>
            <TableCell>{this.props.item.properties[38].Value==="1"?<p>Occupied</p>:<p></p>} </TableCell>            
        </TableRow>        
              

    </Table>    
    )
    }
}


export default DisplayControllerProperties