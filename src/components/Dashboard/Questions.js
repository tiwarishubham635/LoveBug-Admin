import React, {useState} from 'react'
import {Card, Form, Row, Col, Button } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import './About.css';
import axios from 'axios';

function Questions(props) {
    console.log('PROOOOPS',props)

    var contest = props.location.QuestionProps.contest;
    var location_id = props.location.QuestionProps.location_id;
    var location_count = props.location.QuestionProps.count;
    var locations = props.location.QuestionProps.n_for_pass;
    var participants = props.location.QuestionProps.participants;

    locations = locations - 1

    const [count, setCount] = useState(1)
    const [name, setName] = useState('')
    const [test_case_input, setTest_case_input] = useState('')
    const [test_case_correct_output, setTest_case_correct_output] = useState('')
    const [diff, setDiff] = useState(0)
    const [description, setDescription] = useState('')

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

    var history = useHistory();

    function handleSubmit() {
        var obj = {location_id, name, description, test_case_input, test_case_correct_output, diff, contest}
        console.log('inputs',obj)
        axios.post('/api/questions',obj)
        .then(response =>{
            console.log(response)
            setCount(count+1);
            setDiff(diff+1);
            console.log('diff',diff)
            if(count >= 3)
            {
                console.log("success")
                history.push({
                    pathname:"/LocationsForm",
                    locationProps: {locations, contest, participants}
                })
            }
            else
            {
                setDiff(0)
                setDescription('')
                setName('')
                setTest_case_correct_output('')
                setTest_case_input('')
            }
        })
        .catch(error=>{console.log(error)})

    }

    return (
        <div className='About'>
            <Card style={{background:"#4a47a3", width:"50vw", height:"70vh", marginTop:"2rem", marginLeft:"33vw", color:"white", padding:"5vh", paddingLeft:"7vh"}}>
            <Card.Title style={{marginBottom:"2rem", marginTop:"-1rem",marginLeft:"auto", marginRight:"auto", fontSize:"3rem"}}>
                    {count===1?'Easy':(count===2?'Medium':'Tough')}{' Level Question'}
                </Card.Title>
            
                <Form>
            <Row>
                <Col md> {/* md - adds responsiveness to columns*/}
                <Row>
                    <Row style={{marginLeft:"17rem"}}>
                        <Card.Title style={{marginBottom:"2rem", marginTop:"-1rem", width:"50vw"}}>
                            Location {location_count}
                        </Card.Title>
                    </Row>
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
                            <Form.Control as="select" value = {diff} onChange={handleDiff} style={{width:"10vw"}} disabled>
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

export default Questions
