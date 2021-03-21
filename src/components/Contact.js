import React, {useState} from 'react'
import {Card, Form, Row, Col, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './About.css';
import DateTimePicker from 'react-datetime-picker';
import axios from 'axios';
import { useHistory } from "react-router-dom";


function Contact() {

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
    function handleChangeFlag(event) {
        setFlag(event.target.value);
    }

    return (
        <div className='About'>
            <Card style={{background:"#4a47a3", width:"50vw", height:"70vh", marginTop:"2rem", marginLeft:"33vw", color:"white", padding:"5vh", paddingLeft:"7vh"}}>
                <Card.Title style={{marginBottom:"2rem", marginTop:"-1rem",marginLeft:"auto", marginRight:"auto", fontSize:"3rem"}}>
                    Help and Support
                </Card.Title>
            <Form>
                <Row>
                    <Col md> {/* md - adds responsiveness to columns*/}
                    <Form.Group controlId='formname'>
                            <Row>
                                <Col>
                                  <Form.Label style={{fontSize:"3vh"}}>Email Address</Form.Label>
                                </Col>
                                
                                <Col>
                                  <Form.Control type = 'email' value = {name} onChange ={handleChangename} placeholder='abc@example.com' style={{width:"33vw"}}/>
                                </Col>
                                
                            </Row>
                        </Form.Group>
                        <Form.Group controlId='formNoOfParticipants'>
                            <Row>
                                <Col>
                                  <Form.Label style={{fontSize:"3vh"}}>Your Query</Form.Label>
                                </Col>
                                
                                <Col>
                                <textarea rows="7" cols="41" value={flag} onChange={handleChangeFlag} placeholder=''/>
                                </Col>
                                
                            </Row>
                        </Form.Group>
                    </Col>
                </Row>
                <Row style={{justifyContent:"center"}}>
                    <Link to={{
                        pathname:'/Success',
                        props:'Query'
                    }}>
                      <Button variant='light' type='submit' style={{width:"10vw", borderRadius:"1rem"}} >Submit</Button>
                    </Link>
                   
                </Row>
                
          </Form>
            </Card>
        </div>
    )
}

export default Contact
