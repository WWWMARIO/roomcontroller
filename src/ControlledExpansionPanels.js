import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import displayControllerSettings from './displayControllerSettings'
import displayControllerDetails from './displayControllerDetails.js'
import DisplayControllerProperties from './DisplayControllerProperties.js'
import Divider from '@material-ui/core/Divider';
import clsx from 'clsx';
import QRCode from './qrcode.js'
import ExpansionPanelContent from './expansionPanelContent'
import Grid from '@material-ui/core/Grid';








class ControlledExpansionPanels extends React.Component {
  constructor(props) {
      super(props);
      
      
      this.state = {
          
        
        

      };
  }





 render(){

 

  return (

      
      <ExpansionPanel     id={"row-"+this.props.controller.id} expanded={this.props.expandedRow === this.props.controller.id} >
        <ExpansionPanelSummary style={{backgroundColor: "lightblue"}} onClick={()=>this.props.handleRowClick(this.props.controller.id)}
  expandIcon={<ExpandMoreIcon/> }
          aria-controls="panel1bh-content"
                >
          <div style={{flexGrow: "1"}}>
            
          <Grid container item xs={12} spacing={3}>
            <Grid item xs={4}>           
                Zone:{this.props.controller.zone}       
              
            </Grid>
            <Grid item xs={4}>
                {this.props.controller.name}
            </Grid>
            <Grid item xs={4}>           
                Address:{this.props.controller.address}            
            </Grid>
          </Grid>
          </div>

       
















          
        </ExpansionPanelSummary>

        <ExpansionPanelDetails style={{minHeight:"550px"}}/*className={classes.details}*/>          
                   
          <ExpansionPanelContent displayDetailsOrSetting={this.props.displayDetailsOrSetting} 
          handleClickDetailsOrSetting={this.props.handleClickDetailsOrSetting} controller={this.props.controller}
          />
          
          
          
        </ExpansionPanelDetails>
        
        
      </ExpansionPanel> 
      
      
    
  );
}
}




export default ControlledExpansionPanels