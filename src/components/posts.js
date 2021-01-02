import React, { useState, useEffect } from 'react';
import { Card,
        Button,
        Alert,
        Form,
        FormGroup,
        Label,
        Input,
        CardTitle,
        CardText,
        Row,
        Col } from 'reactstrap';
import { RemoveScrollBar } from 'react-remove-scroll-bar';
import { position, button } from '../styles/postCard.css';
import { styles } from '../styles/postForm.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import CommentIcon from '@material-ui/icons/Comment';
import api from '../api/axios';


const Post = (props) =>{

  const [ posts, setPosts ] = useState([]);
  const [ user, setUser ] = useState('');
  const [ incomplete, setIncomplete ] = useState(false);
  const [ title, setTitle ] = useState('');
  const [ content, setContent ] = useState('');
  const [ open, setOpen ] = useState(false);
  const [ loading, setLoading ] = useState(false);
  const [ successful, setSuccessful ] = useState(false);

  useEffect(() =>{
    const token = localStorage.getItem('token');
    if (!token) {
      props.history.push('/login');
    }
    api.get('/api/blogs/posts', {headers:{auth_token:token}})
    .then(res=>{
       setPosts(res.data.message.reverse());
       setUser(res.data.user);
     })
    .catch(err=>{
       console.log(err);
    })
  }, [])

  const changeTitle = (event) =>{
    setTitle(event.target.value);
  }

  const changeContent = (event) =>{
    setContent(event.target.value);
  }

  const dislikeButton = (id) =>{
    const token = localStorage.getItem('token');
    fetch(`http://localhost:5000/api/blogs/dislike/${id}`, {
      method:'PATCH',
      headers: {
        auth_token:token,

      }
    })
    .then(res => res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
    let newPosts = [...posts];
    let postToLike, postIndex;
    for (var i = 0; i < posts.length; i++) {
      if (posts[i]. _id == id) {
        postIndex = posts.indexOf(posts[i]);
        postToLike = {...posts[i]};
        break;
      }
    }
    postToLike.dislikes += 1
    newPosts[postIndex] = postToLike
    setPosts(newPosts);
  }

  const likeButton = (id) =>{
    const token = localStorage.getItem('token');
    fetch(`http://localhost:5000/api/blogs/like/${id}`, {
      method:'PATCH',
      headers: {
        auth_token:token,
      }
    })
    .then(res => res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
    let newPosts = [...posts];
    let postToLike, postIndex;
    for (var i = 0; i < posts.length; i++) {
      if (posts[i]. _id == id) {
        postIndex = posts.indexOf(posts[i]);
        postToLike = {...posts[i]};
        break;
      }
    }
    postToLike.likes += 1
    newPosts[postIndex] = postToLike
    setPosts(newPosts);
  }

  const submitForm = (event) =>{
    event.preventDefault();
    setIncomplete(false);
    setOpen(true);
    setLoading(false);
    setSuccessful(false);
    if (title === ''|| content === '') {
      setIncomplete(true);
      setOpen(true);
      setLoading(true);
      setTimeout(()=>{
        setOpen(false);
        setLoading(false);
      }, 2000)
      return;
    }else{
      const token = localStorage.getItem('token');
      setSuccessful(true);
      setOpen(true)
      setLoading(true);
      setTimeout(()=>{
        setOpen(false);
        setLoading(false);
      }, 2000)
      api.post('/api/blogs/create',{title:title, content:content}, {headers:{auth_token:token}})
      .then(res=>{
        setPosts([res.data.message, ...posts])
        setTitle(null);
        setContent(null);
      })
      .catch(err=>{
        console.log(err);
      })
    }
  }
  const blogs = posts.map(post=>{
    return(
      <Row>
      <Col sm={{ size: 6, order: 0, offset: 3 }}>
          <Card body className = "position">
            <CardTitle tag="h5">{ post.title }</CardTitle>
            <CardText>
            { post.content }
            <br />
            <Button onClick = { () => likeButton(post._id) } color = "success" size="md" style ={{margin:'20px'}}>
              <ThumbUpIcon /> { post.likes } Likes
            </Button>
            <Button  size = "md" style = {{margin:'20px'}}>
              < CommentIcon /> { post.comment.length } Coments
            </Button>
            <Button onClick = { () => dislikeButton(post._id) } color="danger" size = "md" style = {{margin:'20px'}}>
              <ThumbDownIcon /> { post.dislikes } Dislikes
            </Button>
            </CardText>
          </Card>
        </Col>
      </Row>
    )

  })
  return(
    <React.Fragment>
    {
      incomplete ?
      <Alert color = "danger" isOpen = { open }>
      Both fields must be filled.
      </Alert>
      :
      null
    }
    {
      !incomplete && successful ?
      <Alert color = "success" isOpen = { open }>
      Successfully Posted
      </Alert>
      :
      null
    }
      <Form>
        <FormGroup>
          <Label for = "blogTitle" className="style">Blog Title </Label>
          <Col sm={{ size: 6, order: 6, offset: 3 }}>
            <Input
              type = 'textarea'
              name = "text"
              id = "blogTitle"
              className = "blogtitle"
              placeholder = "Enter Blog Title..."
              onChange = { changeTitle }
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText" className="style">Blog Content</Label>
          <Col sm={{ size: 6, order: 6, offset: 3 }}>
            <Input
              type="textarea"
              name="text"
              id="exampleText"
              className = "textarea"
              placeholder = "Enter Blog Content..."
              onChange = { changeContent }
            />
          </Col>
        </FormGroup>
      </Form>
      {
        !loading?
        <Button disbaled = { false } onClick = { submitForm } color = "primary" size ="lg">Post</Button>
        :
        <Button disabled = { true } onClick = { submitForm } color = "primary" size ="lg">Posting...</Button>
      }
      { blogs }
    </React.Fragment>
  )
}
export default Post;
