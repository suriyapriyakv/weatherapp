import React from 'react'
import { Row,Col, Container,Button } from 'react-bootstrap'
import rain from './assets/Clear.jpg'
import cloud from './assets/Cloudy.jpg'
import { useEffect } from 'react'
import './LandingPage.css'
import { Link } from 'react-router-dom'

function LandingPage() {

    const APIdata = null; 
    var pressuredata = null;
    var temperature = null;
    var visibility = null; 
    var humidity = null;
    var weathertype= null;
    var windspeed = null;
    var place = null;
    var tempmax = null;
    var tempmin = null;
    var feelslike = null;
    var sunrise = null;
    var sunset = null;
    
    useEffect(() => {
      const API_KEY ='eb1f6aac53801fd343ac3e13592ab7a6';
      navigator.geolocation.getCurrentPosition((success) => {
          let {latitude, longitude } = success.coords;
          fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`).then(res => res.json()).then(data => {
            console.log(data)
            pressuredata = data.main.pressure
            temperature = data.main.temp
            visibility = data.visibility
            humidity = data.main.humidity
            weathertype = data.weather[0].main
            windspeed = data.wind.speed
            tempmax = data.main.temp_max
            tempmin = data.main.temp_min
            feelslike = data.main.feels_like
            sunrise = data.sys.sunrise
            sunset = data.sys.sunset
            place = data.name
            console.log(place)

            localStorage.setItem("Pressure",pressuredata);
            localStorage.setItem("Temperature",parseInt(temperature*0.1));
            localStorage.setItem("Visibility",visibility);
            localStorage.setItem("Humidity",humidity);
            localStorage.setItem("Type",weathertype);
            localStorage.setItem("Speed",windspeed);
            localStorage.setItem("Place",place)
            localStorage.setItem("tempmin",parseInt(tempmin*0.1));
            localStorage.setItem("tempmax",parseInt(tempmax*0.1));
            localStorage.setItem("sunrise",sunrise);
            localStorage.setItem("sunset",sunset);
            localStorage.setItem("feelslike",parseInt(feelslike*0.1));
          })
      })
    }, [])  

  return (
    <div>  
        <div className="BgDiv kenburns-top-left" 
              style={{
                backgroundImage: localStorage.getItem("Type").toString().includes("Clouds") ? `url(${cloud})`:`url(${rain})` ,
                height:'100vh'
              }}
        >
        </div>
    
        <div className="TextDiv tracking-in-expand">
            <div className='TopBar mt-3 ms-4 d-flex align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-geo-alt" viewBox="0 0 16 16">
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
                <span style={{fontWeight:"bold",color:"#FFF",fontSize:'large'}}>&nbsp;{localStorage.getItem("Place")}</span>
            </div>
            <div className="MainDetails"> 
                 <div className="grid" >
                    <Container > 
                     <Row style={{padding:0}}>
                          <Col style={{fontSize:'144px',padding:0,margin:0}}>{localStorage.getItem("Temperature")}&deg;C</Col>
                          <Col>
                              <Row style={{height:'50%',padding:0}} className="d-flex align-items-end"><span style={{fontSize:"200%",justifyItems:'bottom'}}>{localStorage.getItem("Type")}</span></Row>
                              <Row className=""><span style={{fontWeight:'normal',fontSize:'large'}}>08:20 - Sunday,May 21</span></Row>
                              <Row>
                                <Link to="/taskspage">
                                   <Button style={{backgroundColor:'darkorange',borderColor:'orange'}}>Go To tasks Page</Button>
                                </Link>
                              </Row>
                          </Col>
                     </Row>
                    </Container> 
                 </div>
             </div> 
             <div className="sideRow">
                     <Container className="p-4 pe-5" style={{color:'white'}}>
                        <Col>
                            <Row>Pressure: {localStorage.getItem("Pressure")}mb</Row><hr/>
                            <Row>Visibility: {localStorage.getItem("Visibility")}</Row><hr/>
                            <Row>Humidity: {localStorage.getItem("Humidity")}</Row><hr/>
                            <Row>WindSpeed: {localStorage.getItem("Speed")}knots</Row><hr/>
                            <Row>Sun Rise: {localStorage.getItem("sunrise")}</Row><hr/>
                            <Row>Sun Set: {localStorage.getItem("sunset")}</Row><hr/>
                            <Row>Temperature Min: {localStorage.getItem("tempmin")}</Row><hr/>
                            <Row>Temperature Max: {localStorage.getItem("tempmax")}</Row><hr/>
                            <Row>Feel Like: {localStorage.getItem("feelslike")}</Row><hr/>
                        </Col>
                     </Container> 
             </div>
        </div>
    </div>
  )
}

export default LandingPage