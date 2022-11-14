import './App.css';

import {useState, useEffect} from "react"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function BasicCard(props) {
  return (
    <div style={{margin: 10}}>
      <Card sx={{ minWidth: 275 }} >
        <CardContent>
          {props.blogData.title} <br/><br/>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {props.blogData.creation_date}
          </Typography>
          <Typography variant="body2">
            {props.blogData.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
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

    return <div style={{backgroundColor: color, margin: 5}}>
      <BasicCard blogData={b} />
    </div>
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
