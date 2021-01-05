import React, { useState, useEffect } from 'react';
import LoginNavbar from '../components/loginNavbar';
import {Row,
        Col,
        Card,
        CardTitle,
        Button,
        CardText} from 'reactstrap';
import DeleteIcon from '@material-ui/icons/Delete';
import { icon } from '../styles/myPosts.css';
import Footer from '../components/loginfooter';
import api from '../api/axios';

 const MyDashBoard = (props) =>{
   const token = localStorage.getItem('token');
   const [ currentUser, setCurrentUser ] = useState('');
   const [ myBlogs, setMyBlogs ] = useState([]);
   const [ empty, setEmpty ] = useState(false);
   if (!token) {
     props.history.push('/login')
   }
   useEffect(() =>{
     api.get('/api/blogs/posts', {headers:{auth_token:token}})
     .then(res=>{
       setCurrentUser(res.data.user);
       console.log(currentUser);
     })
     .catch(err=>{
       console.log(err);
     })
     api.get('/api/blogs/mydashboard', {headers:{auth_token:token}})
     .then(res=>{
       setMyBlogs(res.data.message);
       if (res.data.message.length === 0) {
         setEmpty(true)
       }
     })
     .catch(err=>{
       console.log(err);
     })
   }, [])

   const myOwnBlogs = myBlogs.map(blog=>{
     return(
       <Row>
       <Col sm={{ size: 6, order: 0, offset: 3 }}>
           <Card body className = "position">
             <CardTitle tag="h5">{ blog.title }</CardTitle>
             <CardText>
             { blog.content }
             <br />
             </CardText>
           </Card>
         </Col>
       </Row>
     )
   })
   return(
     <React.Fragment>
      <LoginNavbar user = { currentUser } />
        {
          empty ?
          <Col sm={{ size: 6, order: 6, offset: 3 }}>
          <Card style={{height:'100px', marginTop:'100px', paddingTop:'30px'}}><CardText><h3> you dont have any blogs</h3></CardText></Card>
          </Col>
          :
          myOwnBlogs
         }
     </React.Fragment>
   )
 }

 export default MyDashBoard;
