import React, {useState} from 'react'
import {Card, Form, Row, Col, Button } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import './About.css';
import axios from 'axios';
var locationID = [];


function LocationsForm(props) {
    let n = props.location.locationProps.locations;
    let contest = props.location.locationProps.contest
    let participants = props.location.locationProps.participants;
    var n_for_pass = n;
    
    
    const [count, setCount] = useState(1)
    const [lat, setLat] = useState(0)
    const [lng, setLng] = useState(0)

    function handleChangeLat (event) {
        setLat(event.target.value)
    }

    function handleChangeLng (event) {
        setLng(event.target.value)
    }

    

    let history = useHistory();
        
        function handleSubmit() 
        {
            let obj = {lat, lng, contest};
            if(count===n-1)
            {
                obj.is_last = true;
            }
            else
            {
                obj.is_last = false;
            }
            console.log('obj', obj)
            axios.post('/api/locations',obj)
            .then(response=>
                    {
                        locationID.push(response.data.location._id)
                        console.log(response.data.location._id)
                        console.log('response',response.data);
                        var location_id = response.data.location._id;
                        history.push({
                            pathname:'/Questions',
                            QuestionProps: {location_id, contest, count, n_for_pass, participants}
                        })
                        
                      setCount(count+1);
                      if(count >= n)
                      {
                          console.log("success")
                          console.log(locationID)
                          for(var j =0; j<locationID.length-1; j++)
                          {
                              var obj = {a1:locationID[j], a2:locationID[j+1]}
                              console.log(obj)
                              axios.post('/api/locations/link', obj)
                              .then(response=>{console.log(response.data)})
                              .catch(error=>alert(error.message))
                          }
                          history.push({
                            pathname:"/ParticipantsForm",
                            participantProps: {contest, participants}
                        })
                      }
                      else
                      {
                          setLat(0)
                          setLng(0)
                      }
                    }  
                )
            .catch(error => alert(error.message))
        }
    return (
        <div className='About'>
            <Card style={{background:"#4a47a3", width:"50vw", height:"75vh", marginTop:"2rem",marginLeft:"32vw", marginRight:"auto", color:"white", padding:"5vh", paddingLeft:"7vh"}}>
            
                <Card.Title style={{marginBottom:"2rem", marginTop:"-1rem",marginLeft:"auto", marginRight:"auto", fontSize:"3rem"}}>
                    {count===1?'Locations and Questions':'Location '+ (count-1) +' is Added !!!'}
                </Card.Title>
            <Form>
                <Row>
                    <Col md> {/* md - adds responsiveness to columns*/}
                    <Row>
                        <Row style={{marginLeft:"1rem"}}>
                            <Card.Title style={{marginBottom:"2rem", marginTop:"-1rem", width:"50vw"}}>
                                For given Location, Enter the following details:
                            </Card.Title>
                        </Row>
                        
                            <Form.Group controlId='formLattitude' style={{width:"21vw", marginRight:"2rem"}}>
                            <Row>
                                <Col>
                                <Form.Label  style={{fontSize:"0.9rem"}}> Lattitude</Form.Label>
                                </Col>
                                
                                <Col>
                                <Form.Control type = 'name' value={lat} onChange={handleChangeLat}  placeholder='' style={{width:"10vw"}}/>
                                </Col>
                                
                            </Row>
                            </Form.Group>
                            <Form.Group controlId='formNoOfLongitude' style={{width:"21vw"}}>
                            <Row>
                                <Col>
                                <Form.Label name ='lng'  style={{fontSize:"0.9rem"}}>Longitude</Form.Label>
                                </Col>
                                
                                <Col>
                                <Form.Control type = 'name' value={lng} onChange={handleChangeLng} placeholder='' style={{width:"10vw"}}/>
                                </Col>
                            </Row>
                            </Form.Group>
                        </Row>
                    </Col>
                </Row>
                <Row style={{justifyContent:"center"}}>
                      <Button variant='light' onClick={handleSubmit} style={{width:"10vw", borderRadius:"1rem"}}>Next</Button>
                </Row>
                
          </Form>
            </Card>
        </div>
    )
}

export default LocationsForm
