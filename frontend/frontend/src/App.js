import './App.css';

import {useState} from "react"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function BasicCard(props) {
  return (
    <div style={{margin: 10}}>
      <Card sx={{ minWidth: 275 }} >
        <CardContent>
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

  fetch('http://localhost/php-blog-example/backend/index.php/blogs')
    .then((response) => response.json())
    .then((data) => {
      setBlogs(data)
    });

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to the list of blogs!
        </p>

        {blogs.map((b)=>{
            return <BasicCard blogData={b} />
        })}


      </header>
    </div>
  );
}

export default App;
