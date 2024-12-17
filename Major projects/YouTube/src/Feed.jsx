import React from 'react'
import Sidebar from './Sidebar';
import Videos from './Videos'
import { useState, useEffect } from 'react'
import {fetchFromAPI} from './utils/fetchFromAPI'
import { Box, Stack, Typography } from "@mui/material";

const Feed = () => {

 const[selected,setselected] = useState('New')
 const[videos,setvideos] = useState([])
  useEffect(() => {
      fetchFromAPI(`search?part=snippet&q=${selected}`)
      .then((data) => setvideos(data.items))
  },[selected])

  return (
    <Stack sx={{flexDirection : { sx : 'column', md : 'row'}}}>
         <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "4px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
           <Sidebar selected = {selected} setselected = {setselected}/>
           <Typography className='copyright'
           variant='body2' sx={{ mt:5, color : 'blue'}}>
            Copyright 2024 Developer
           </Typography>
      </Box>
     
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h3" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selected}
        </Typography>
        <Videos videos={videos}/>
        </Box>
    </Stack>
  )
}

export default Feed