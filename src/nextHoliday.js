import React from 'react'
import Typography from '@material-ui/core/Typography';



class NextHoliday extends React.Component {

    constructor(props){
        super(props)
        
        this.state = {
          }    
   
    }  

    componentDidMount() {
        var today=new Date();
        var apiKey="6d034c65d939a776bfb539b8ff87e8790ddc3d96"
        var country="hr"
        var year=today.getFullYear()
        var nextYear=Number(today.getFullYear()+1)
        var calendarificURL="https://calendarific.com/api/v2/holidays?&api_key="+apiKey+"&country="+country+"&year="+year
        

        fetch(calendarificURL)
        .then(response => response.json())
        .then((responseJson) => {
            
          this.setState({ holidayListJsonThisYear: responseJson.response.holidays })
          this.getNextHoliday() 
                 
        })
        .catch(console.log)

        var calendarificURLNextYear="https://calendarific.com/api/v2/holidays?&api_key="+apiKey+"&country="+country+"&year="+nextYear

        fetch(calendarificURLNextYear)
        .then(response => response.json())
        .then((responseJson) => {
          this.setState({ holidayListJsonNextYear: responseJson.response.holidays })
          this.getNextHoliday()
        })
        .catch(console.log)
      }
      
    getNextHoliday=()=>{
        var today=new Date()
        
        const thisYearHolidays=this.state.holidayListJsonThisYear
        

        
        for (let i=0;i<thisYearHolidays.length;i++)
        {
            if  (thisYearHolidays[i].type[0]==="National holiday" || thisYearHolidays[i].type[0]==="Observance")
            {
                let currentHoliday=new Date(thisYearHolidays[i].date.datetime.year,thisYearHolidays[i].date.datetime.month-1,thisYearHolidays[i].date.datetime.day)
                
                if (today<currentHoliday )
                {        
                        this.setState({
                            nextHoliday:thisYearHolidays[i]                             
                        })
                        break
                }
            } 
        }
              
        let lastHolidayIndex=Number(thisYearHolidays.length-1)       
        
        let lastHoliday=thisYearHolidays[lastHolidayIndex]
        
        let lastHolidayDate=new Date(lastHoliday.date.datetime.year,lastHoliday.date.datetime.month-1,lastHoliday.date.datetime.day)
        const nextYearHolidays=this.state.holidayListJsonNextYear
        if (today>=lastHolidayDate)
        {
            this.setState({
                            nextHoliday:nextYearHolidays[0]
                        })                      
        }
        
    }  


       
    render(){
            
        return(
                
    <div >
        <Typography>
        The next Croatian holiday is :<br/>
        { this.state.nextHoliday &&
                <div>{this.state.nextHoliday.name}<br/> 
                {this.state.nextHoliday.date.datetime.day}.{this.state.nextHoliday.date.datetime.month}.{this.state.nextHoliday.date.datetime.year}. </div> 
        }
        <br/>     
        </Typography>
         
    </div>
    )
    }
  }   




  export default NextHoliday