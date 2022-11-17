import './App.css';

import {useState, useEffect} from "react"
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

function BasicCard(props) {
  return (
    <>
      <div style={{margin: 10, textAlign: "left"}}>
        <Card sx={{ minWidth: 275 }} >
          <CardContent>
          <Chip
            avatar={<Avatar src={props.blogData.profile_pic_url} />}
            label={props.blogData.name}

            /> <br/>

            {props.blogData.title}
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {props.blogData.creation_date}
            </Typography>
            <Typography variant="body2">
              {props.blogData.text}
            </Typography>
          </CardContent>
        </Card>
      </div>
      <Button
        variant="outlined" color="error"
        onClick={() => {
          alert('clicked');
        }}
      >
        DELETE
      </Button>
    </>
  );
}

function App() {
  let [blogs, setBlogs] = useState([])

  useEffect(
    ()=>{
      fetch('http://localhost/php-blog-example/backend/index.php/blogs')
        .then((response) => response.json())
        .then((data) => {
          setBlogs(data)
        });
    }, []
  )


  function f(b){
    let color = "red"
    if(b.user_id == 2)
      color = "lime"

    /*
    return <div style={{backgroundColor: color, margin: 5}}>
      <BasicCard3 blogData={b} />
    </div>
    */

    return <>
      <BasicCard blogData={b} />
      <br/>
    </>
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to the list of blogs!
        </p>
        {blogs.map(f)}
      </header>
    </div>
  );
}

export default App;
