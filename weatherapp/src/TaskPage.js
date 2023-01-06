import React from 'react'
import { Nav, Container, FormControl, Navbar, Col,Form, Modal, Button, Dropdown, InputGroup, DropdownButton, Card, Row } from 'react-bootstrap'
import { useState,useEffect } from 'react';
import {db} from './firebaseConfig'; 
import {collection,getDocs,addDoc,doc,deleteDoc} from 'firebase/firestore';
import { query, orderBy, limit } from "firebase/firestore";
import { Link } from 'react-router-dom';

function TasksPage() {
    const [show, setShow] = useState(false);
    const [eshow, esetShow] = useState(false);
    const [Category,setCategory] = useState("Indoor Activity"); 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const ehandleClose = () => esetShow(false);
    const ehandleShow = () => esetShow(true);


    const [task,settask] = useState([]);
    const tasksCollection = collection(db,"tasks");

    useEffect(() => {
       const getTasks = async()=>{
            const data = await getDocs(tasksCollection);
            settask(data.docs.map((doc)=>({...doc.data(),id: doc.id})))
       }
       console.log(task.sort((a)=>{
           return a.date
       }));
       getTasks();
       console.log("Arr:"+task);
       console.log(task);
    }, [])
    

    const [mtaskName,setTaskName] = useState('');
    const [mdate,setDate] = useState('');
    const [mtime,setTime] = useState('');
    const [mpriority,setPriority] = useState('Low');
    const [musername,setUserName] = useState('Jo')

    const createTasks = async () =>{
          await addDoc(tasksCollection,{category:Category,date:mdate,priority:mpriority,taskName:mtaskName,time:mtime,userName:musername})
          window.location.reload(true);
    };

    const deleteUser = async (id) =>{
        const userDoc = doc (db,"tasks",id);
        await deleteDoc(userDoc)
        window.location.reload(true);
    }

    var date = new Date();
    var month;
    if(date.getMonth()+1 > 9){month = date.getMonth()+1}
    else{month = '0'+ (date.getMonth()+1)}
    var today = date.getFullYear()+'-'+(month)+'-'+date.getDate();
    var nodate = ''
  return (
    <div className="container-lg">
                <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/app#/app">
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <Form className="d-flex justify-content-between p-0 m-0 w-100">
                        <Link to="/landing">
                            <Button variant="primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                                   <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
                                </svg>
                            </Button>
                        </Link>
                        <Button variant="outline-success" onClick={handleShow}>Add Task</Button>
                    </Form>
                    </Navbar.Collapse>
                </Container>
                </Navbar>

                <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                    <Modal.Title>Add a Task</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                           <FormControl
                            placeholder="Task Name"
                            aria-label="Task Name"
                            aria-describedby="basic-addon2"
                            onChange={(e)=>{setTaskName(e.target.value)}}
                            />

                            <FormControl
                              type="date"
                              className="mt-2"
                              placeholder="Task date"
                              min = {today}
                              onChange={(e)=>{setDate(e.target.value)}}
                            />

                            <FormControl
                              type="time"
                              className="mt-2" 
                              onChange={(e)=>{setTime(e.target.value)}}
                            />

                            {/* <FormControl
                                placeholder="Priority"
                                aria-label="Priority"
                                aria-describedby="basic-addon2"
                                className="mt-2"
                                onChange={(e)=>{setPriority(e.target.value)}}
                            /> */}

                            <InputGroup className="mt-2">
                                <DropdownButton
                                variant="outline-secondary"
                                title="Priority"
                                id="input-group-dropdown-1"
                                >
                                <Dropdown.Item onClick={()=>{setPriority('High')}}>High</Dropdown.Item>
                                <Dropdown.Item onClick={()=>{setPriority('Medium')}}>Medium</Dropdown.Item>
                                <Dropdown.Item onClick={()=>{setPriority('Low')}}>Low</Dropdown.Item>
                                </DropdownButton>
                                <FormControl aria-label="Text input with dropdown button" placeholder={mpriority}/>
                            </InputGroup>
                               
                            <InputGroup className="mt-2">
                                <DropdownButton
                                variant="outline-secondary"
                                title="Category"
                                id="input-group-dropdown-1"
                                >
                                <Dropdown.Item onClick={()=>{setCategory('Indoor Activity')}}>Indoor Activity</Dropdown.Item>
                                <Dropdown.Item onClick={()=>{setCategory('Outdoor Activity')}}>Outdoor Activity</Dropdown.Item>
                                </DropdownButton>
                                <FormControl aria-label="Text input with dropdown button" placeholder={Category}/>
                            </InputGroup>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={function(event){ handleClose();createTasks()}}>
                            Create task
                        </Button>
                    </Modal.Footer>
                </Modal>

                

                {
                    task.map((etask,date)=>{
                       return(
                           <div>
                            
                           {etask.date != nodate?<h6>{etask.date}</h6>:<></>}  
                            
                           <Card className="mb-2 py-2 px-1">
                               <Row>
                                   <Col className="d-flex flex-column ms-3">
                                        <div className='h5'>{etask.taskName}</div>
                                        <div className='' style={{fontSize:"small"}}>{etask.category}</div>
                                        <div className='' style={{fontSize:"small"}}>{etask.date} {etask.time}</div>
                                   </Col>
                                   <Col className="d-flex flex-column align-items-center justify-content-center">
                                          <div className="h6">Priority</div>
                                          <div style={{fontSize:"small"}}>{etask.priority}</div>
                                   </Col>
                                   <Col className='d-flex align-items-center justify-content-center'>
                                       &nbsp;&nbsp;
                                       <Button className="btn-danger" onClick={()=> {deleteUser(etask.id);}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                            </svg>
                                       </Button>
                                   </Col>
                               </Row>
                           </Card>
                           </div>
                       );
                    })
                }
    </div>
  )
}

export default TasksPage