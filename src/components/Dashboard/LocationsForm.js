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
    
    
    const [count, setCount] = useState(1)
    const [lat, setLat] = useState(0)
    const [lng, setLng] = useState(0)
    const [name, setName] = useState('')
    const [test_case_input, setTest_case_input] = useState('')
    const [test_case_correct_output, setTest_case_correct_output] = useState('')
    const [diff, setDiff] = useState(0)

    const [description, setDescription] = useState('')

    function handleChangeLat (event) {
        setLat(event.target.value)
    }

    function handleChangeLng (event) {
        setLng(event.target.value)
    }

    function handleChangeName (event) {
        setName(event.target.value)
    }

    function handleChangeTCI (event) {
        setTest_case_input(event.target.value)
    }

    function handleChangeTCO (event) {
        setTest_case_correct_output(event.target.value)
    }

    function handleChangedescription(event) {
        setDescription(event.target.value)
    }

    function handleDiff(event) {
        setDiff(event.target.value)
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
                        let obj2 = {location_id, name, description, test_case_input, test_case_correct_output, diff, contest}
                        console.log('obj2',obj2)
                        axios.post('/api/questions',obj2)
                        .then(response =>{console.log('Question Response', response)})
                        .catch(error=>alert(error.message))
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
                          setDiff(0)
                          setDescription('')
                          setName('')
                          setTest_case_correct_output('')
                          setTest_case_input('')
                      }
                    }  
                )
            .catch(error => alert(error.message))
        }
    return (
        <div className='About'>
            <Card style={{background:"#4a47a3", width:"50vw", height:"75vh", marginTop:"2rem", marginLeft:"33vw", color:"white", padding:"5vh", paddingLeft:"7vh"}}>
                <Card.Title style={{marginBottom:"2rem", marginTop:"-1rem",marginLeft:"auto", marginRight:"auto", fontSize:"3rem"}}>
                    {count===1?'Locations and Questions':'Location '+ (count-1) +' is Added !!!'}
                </Card.Title>
            <Form>
                <Row>
                    <Col md> {/* md - adds responsiveness to columns*/}
                    <Row>
                        <Row style={{marginLeft:"20rem"}}>
                            <Card.Title style={{marginBottom:"2rem", marginTop:"-1rem", width:"50vw"}}>
                                Location {count}
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
                            <Form.Group controlId='formQName' style={{width:"21vw", marginRight:"2rem"}}>
                            <Row>
                                <Col>
                                <Form.Label name ='lng'  style={{fontSize:"0.9rem"}}>Question Name</Form.Label>
                                </Col>
                                
                                <Col>
                                <Form.Control type = 'name' value={name} onChange={handleChangeName} placeholder='' style={{width:"10vw"}}/>
                                </Col>
                            </Row>
                            </Form.Group>
                            <Form.Group controlId='formQName' style={{width:"21vw"}}>
                            <Row>
                                <Col>
                                <Form.Label name ='lng'  style={{fontSize:"0.9rem"}}>Test Case Input</Form.Label>
                                </Col>
                                
                                <Col>
                                <Form.Control type = 'name' value={test_case_input} onChange={handleChangeTCI} placeholder='' style={{width:"10vw"}}/>
                                </Col>
                            </Row>
                            </Form.Group>
                            <Form.Group controlId='formQName' style={{width:"21vw", marginRight:"2rem"}}>
                            <Row>
                                <Col>
                                <Form.Label name ='lng'  style={{fontSize:"0.9rem"}}>Test Case Output</Form.Label>
                                </Col>
                                
                                <Col>
                                <Form.Control type = 'name' value={test_case_correct_output} onChange={handleChangeTCO} placeholder='' style={{width:"10vw"}}/>
                                </Col>
                            </Row>
                            </Form.Group>
                            <Form.Group controlId='formQName' style={{width:"21vw"}}>
                            <Row>
                                <Col>
                                <Form.Label name ='lng'  style={{fontSize:"0.9rem"}}>Difficulty Level</Form.Label>
                                </Col>
                                
                                <Col>
                                <Form.Control as="select" value = {diff} onChange={handleDiff} style={{width:"10vw"}}>
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                    </Form.Control>
                                </Col>
                            </Row>
                            </Form.Group>
                            <Form.Group controlId='formQName' style={{width:"44vw"}}>
                            <Row>
                                <Col>
                                <Form.Label name ='lng'  style={{fontSize:"0.9rem"}}>Problem Statement</Form.Label>
                                </Col>
                                
                                <Col>
                                <textarea rows="4" cols="41" value={description} onChange={handleChangedescription} placeholder=''/>

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
