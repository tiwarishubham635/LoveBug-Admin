import React, {useState, useEffect} from 'react'
import {Card, Form, Row, Col, Button } from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';
import './About.css';
import axios from 'axios';
var locationID = [];

function Success(props) {
    return (
        <div className='About'>
            <Card style={{background:"#290149",width:"50vw", height:"75vh", marginTop:"2rem", marginLeft:"33vw", color:"white", padding:"10vh", paddingLeft:"7vh"}}>
                <Card.Img src = ''/>
                <Card.Title style={{marginBottom:"2rem", marginTop:"-1rem",marginLeft:"auto", marginRight:"auto", fontSize:"2rem", fontWeight:"lighter"}}>
                    Congratulations
                </Card.Title>
                <Card.Text style={{marginBottom:"2rem", marginTop:"-1rem",marginLeft:"auto", marginRight:"auto", fontSize:"4rem", textAlign:"center"}}>
                    Contest Created Successfully !!!
                </Card.Text>
                <Link to='/'>
                    <Row style={{justifyContent:"center"}}>
                        <Button variant='success' style={{width:"20vw", borderRadius:"1rem"}}>Go back to Home Screen</Button>
                    </Row>
                </Link>
            </Card>
            
        </div>
    )
}

export default Success
//;#290149