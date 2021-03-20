import React, {useState, useEffect} from 'react'
import {Card, Form, Row, Col, Button } from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';
import './About.css';
import axios from 'axios';
var locationID = [];

function ParticipantsForm(props) {
    let contest = props.location.participantProps.contest;
    let participants = props.location.participantProps.participants;
    
    var n = participants;
    var cid = contest;
    const [email, setEmail] = useState('')
    const [count, setCount] = useState(1)

    function handleChangeEmail(event) {
        setEmail(event.target.value)
    }

    let history = useHistory();
        
        function handleSubmit() 
        {
            let obj = {email, cid};
            if(count===n-1)
            {
                obj.is_last = true;
            }
            else
            {
                obj.is_last = false;
            }
            console.log('obj', obj)
            axios.post('/api/contests/addp',obj)
            .then(response=>
                    {
                        //locationID.push(response.data.location._id)
                        //console.log(response.data.location._id)
                        console.log('response',response.data);
                        //var location_id = response.data.location._id;
                        //let obj2 = {location_id, name, description, test_case_input, test_case_correct_output, diff, contest}
                        //console.log('obj2',obj2)
                        //axios.post('/api/questions',obj2)
                        //.then(response =>{console.log('Question Response', response)})
                        //.catch(error=>alert(error.message))
                      setCount(count+1);
                      if(count >= n)
                      {
                          console.log("success")
                          //console.log(locationID)
                          /*for(var j =0; j<locationID.length-1; j++)
                          {
                              var obj = {a1:locationID[j], a2:locationID[j+1]}
                              console.log(obj)
                              axios.post('/api/locations/link', obj)
                              .then(response=>{console.log(response.data)})
                              .catch(error=>alert(error.message))
                          }*/
                          history.push({
                            pathname:"/Success",
                        })
                      }
                      else
                      {
                          setEmail('')
                      }
                    }  
                )
            .catch(error => alert(error.message))
        }
    return (
        <div className='About'>
            <Card style={{background:"#4a47a3", width:"50vw", height:"75vh", marginTop:"2rem", marginLeft:"33vw", color:"white", padding:"5vh", paddingLeft:"7vh"}}>
                <Card.Title style={{marginBottom:"2rem", marginTop:"-1rem",marginLeft:"auto", marginRight:"auto", fontSize:"2rem", fontWeight:"lighter"}}>
                    {count===1?'Locations Added Successfully !!!':'Participant '+ (count-1) +' Added Successfully !!!'}
                </Card.Title>
                <Card.Text style={{marginBottom:"2rem", marginTop:"-1rem",marginLeft:"auto", marginRight:"auto", fontSize:"3rem"}}>
                    Participants Form
                </Card.Text>
            <Form>
                <Row>
                    <Col md> {/* md - adds responsiveness to columns*/}
                    <Row>
                        <Row style={{marginLeft:"17rem"}}>
                            <Card.Title style={{marginBottom:"2rem", marginTop:"-1rem", width:"50vw"}}>
                                Participant {count}
                            </Card.Title>
                        </Row>
                        
                            <Form.Group controlId='formEmail' style={{width:"50vw", marginRight:"2rem"}}>
                            <Row>
                                <Col>
                                <Form.Label  style={{fontSize:"1.5rem"}}> Email</Form.Label>
                                </Col>
                                
                                <Col>
                                <Form.Control type = 'email' value={email} onChange={handleChangeEmail}  placeholder='' style={{width:"35vw"}}/>
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

export default ParticipantsForm
