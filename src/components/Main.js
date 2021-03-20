import React from 'react';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import './Main.css';
import './ContestList';
import { ContestList } from './ContestList';
import {Link} from 'react-router-dom';


function Main() {
    return (
        <div className='Main-Component'>
            <Container fluid >
                <Row>
                    <Col>
                        <div className='flip-card'>
                            <div className='flip-card-inner'>
                                <div className='flip-card-front'>
                                   <Card.Img src='https://images.unsplash.com/photo-1611095970111-fc87b5315dc3?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80' />
                                </div>
                                <div className='flip-card-back'>
                                    Hello
                                </div>
                            </div>
                            
                        </div>
                    </Col>
                    <Col>
                        <Card style={{marginTop:"1rem", width:"100%", height:"25rem", alignItems:"center", justifyContent:"center" }}>
                            <Card.Body>
                                <Card.Text>
                                    <ul>
                                        <li className='list'>
                                            Start a New Contest
                                        </li>
                                        <li className='list'>
                                            Enter the Number of Particpants
                                        </li>
                                        <li className='list'>
                                            Add Locations and Coding Questions
                                        </li>
                                        <li className='list'>
                                            You are Done !
                                        </li>
                                    </ul>
                                </Card.Text>
                                <Link to='/NewContest'>
                                   <Button type='submit' style={{background:"#7868e6"}}>Start a New Contest Now !</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <div className='Main-Heading'>
                    Recent Contests
                    </div>
                </Row>
                <Row style={{marginBottom:"1rem"}}>
                    {ContestList.map((item, index) => {
                        return(
                            <Col>
                                <Card key={index}>
                                    <Card.Img src={item.poster} height="200vh"/>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
                <Row style={{marginBottom:"1rem"}}>
                    {ContestList.map((item, index) => {
                        return(
                            <Col>
                                <Card key={index}>
                                    <Card.Img src={item.poster} height="200vh"/>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
                <Row style={{marginBottom:"1rem"}}>
                    {ContestList.map((item, index) => {
                        return(
                            <Col>
                                <Card key={index} width='100%'>
                                    <Card.Img src={item.poster} height="200vh"/>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
                
            </Container>
        </div>
    )
}

export default Main
