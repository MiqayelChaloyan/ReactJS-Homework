import './App.css';
import { useState, useEffect } from 'react'

/* Select Form */
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

/* Button */
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

/* Avatar */
import Avatar from '@mui/material/Avatar';


function App() {
  const [imgURL, setImgURL] = useState('');
  const [breed, setBreed] = useState(['']);
  const [select, setSelect] = useState('');

  const BASE_URL = "https://dog.ceo/api/breed/";

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list")
      .then(resp => resp.json())
      .then(data => {
        setBreed(data.message)
        console.log(data.message)
      })
      .catch(err => {
        console.log("error fetching list");
      });
  }, [])


  const getDogImage = () => {
    let url = BASE_URL + select + "/images/random";
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        setImgURL(data.message)
        console.log(data.message)
      })
      .catch(err => {
        console.log("error fetching image");
      });
  };

  const handleSelect = (event) => {
    setSelect(event.target.value)
  }

  return (
    <div className="App">
      <div className='form-fetch'>
        <FormControl sx={{ m: 1, minWidth: 190 }} size="small">
          <InputLabel id="demo-select-small">Breed</InputLabel>
          <Select onChange={handleSelect}
            labelId="demo-select-small"
            id="demo-select-small"
            value={select}
            label="Breed"

          >
            {breed.map(e =>
              <MenuItem value={e}>{e}</MenuItem>
            )}
          </Select>
        </FormControl>

        <Stack spacing={2} direction="row">
          <Button disabled={!select} onClick={getDogImage} variant="outlined">Fetch..</Button>
        </Stack>
      </div>

      <div>
        <Stack direction="row" spacing={2}>
          <Avatar className="doggy_img" alt="dog" style={{ display: !imgURL ? "none" : "block" }} src={imgURL} sx={{ width: 550, height: 550 }} variant="square" />
        </Stack>
      </div>

    </div>
  );
}

export default App;
