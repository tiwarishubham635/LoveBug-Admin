import React, {useState} from 'react'
import {Card, Form, Row, Col, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './About.css';
import DateTimePicker from 'react-datetime-picker';
import axios from 'axios';
import { useHistory } from "react-router-dom";


function About() {

    const [participants, setParticipants] = useState(0)
    function handleChangeParticipants(event)
    {
        const value = event.target.value
        setParticipants(value)
    }

    const [locations, setLocations] = useState(1)
    function handleChangeLocations(event)
    {
        const value = event.target.value
        setLocations(value)
    }

    const [name, setname] = useState('')
    function handleChangename(event)
    {
        const value = event.target.value
        setname(value)
    }

    const [start_time, setstart_time] = useState('')
    const [end_time, setend_time] = useState('')

    
    //let start = start_time + "T"+StartTime + "00.000+05:30";


    const history = useHistory()


    const [flag, setFlag] = useState('')
    function handleSubmit()
    {
        const obj = {name, start_time,end_time}
        console.log('OBJECT',obj);
        axios.post('/api/contests',obj)
        .then(response=>
                    {
                        console.log(response);
                        if(response.data.success)
                        {
                            let contest = response.data.contest._id;
                            history.push({
                                pathname:"/LocationsForm",
                                locationProps: {locations, contest, participants}
                            })
                        } 
                    }
            ).catch(error=>setFlag(error))
    }
    

    return (
        <div className='About'>
            <Card style={{background:"#4a47a3", width:"50vw", height:"70vh", marginTop:"2rem", marginLeft:"33vw", color:"white", padding:"5vh", paddingLeft:"7vh"}}>
                <Card.Title style={{marginBottom:"2rem", marginTop:"-1rem",marginLeft:"auto", marginRight:"auto", fontSize:"3rem"}}>
                    New Contest Form
                </Card.Title>
            <Form>
                <Row>
                    <Col md> {/* md - adds responsiveness to columns*/}
                    <Form.Group controlId='formname'>
                            <Row>
                                <Col>
                                  <Form.Label style={{fontSize:"3vh"}}>Name of Contest</Form.Label>
                                </Col>
                                
                                <Col>
                                  <Form.Control type = 'name' value = {name} onChange ={handleChangename} placeholder='Enter' style={{}}/>
                                </Col>
                                
                            </Row>
                        </Form.Group>
                        <Form.Group controlId='formNoOfParticipants'>
                            <Row>
                                <Col>
                                  <Form.Label style={{fontSize:"3vh"}}>Number of Participants</Form.Label>
                                </Col>
                                
                                <Col>
                                  <Form.Control type = 'name' value = {participants} onChange = {handleChangeParticipants} placeholder='Enter' style={{}}/>
                                </Col>
                                
                            </Row>
                        </Form.Group>
                        <Form.Group controlId='formNoOfLocations'>
                            <Row >
                                <Col>
                                  <Form.Label style={{fontSize:"3vh"}}>Number of Locations</Form.Label>
                                </Col>
                                
                                <Col>
                                    <Form.Control as="select" value = {locations} onChange={handleChangeLocations} style={{}}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </Col>
                                
                            </Row>
                        </Form.Group>
                    
                        <Form.Group controlId='formstart_time'>
                            <Row >
                                <Col>
                                  <Form.Label style={{fontSize:"3vh"}}>Starting Date of Contest</Form.Label>
                                </Col>
                                
                                <Col style={{width:"2vw"}}>
                                    <DateTimePicker onChange={setstart_time} value={start_time}/>  
                                </Col>
                            </Row>
                        </Form.Group>

                        

                        <Form.Group controlId='formend_time'>
                            <Row>
                                <Col>
                                  <Form.Label style={{fontSize:"3vh"}}>Ending Date of Contest</Form.Label>
                                </Col>
                                
                                <Col>
                                <DateTimePicker onChange={setend_time} value={end_time}/>
                                </Col>
                                   
                            </Row>
                        </Form.Group>

                        
                    </Col>
                </Row>
                <Row style={{justifyContent:"center"}}>
                    <Link to={{
                        pathname:'/NewContest',
                        locations:{locations}
                    }}>
                      <Button variant='light' type='submit' style={{width:"10vw", borderRadius:"1rem"}} onClick={handleSubmit}>Next</Button>
                    </Link>
                   
                </Row>
                
          </Form>
            </Card>
        </div>
    )
}

export default About
