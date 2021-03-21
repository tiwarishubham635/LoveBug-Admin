import React, {useState, useEffect} from 'react'
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import { ContestList1 } from './ContestList';
import { ContestList2 } from './ContestListEven';
import './About.css'
import axios from 'axios'

function User() {
    const [contests, setContests] = useState([])

    useEffect(() => {
        axios.get('/api/contests/hack').then(response=>{console.log(response); setContests(response.data)})
    }, [])

    return (
        <div className='About' style={{height:'80vh'}}> 
            <Card style={{background:"#4a47a3", width:"70vw", height:"100vh", marginTop:"2rem", marginLeft:"23vw", color:"white", padding:"5vh", paddingLeft:"7vh"}}>
                <Container >
                    <Row>
                            <div style={{color:"white", marginBottom:"1rem", marginLeft:"1rem"}}>
                            Running Contests
                            </div>
                    </Row>
                    <Row style={{marginBottom:"1rem"}}>
                        {contests.map((item, index) => {
                            return(
                                <Col>
                                    <Card key={index} style={{cursor:"pointer", color:"black"}}>
                                        <Card.Img src='./logo.jpg' height="200vh"/>
                                        <Card.Body>
                                            <Card.Title>
                                                {item.name}
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        })}
                        
                    </Row>
                    
                </Container>
            </Card>
            
        </div>
    )
}

export default User
