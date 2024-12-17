import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Box} from '@mui/material'
import { Navbar } from './Navbar'
import Feed from './Feed'
import VideoDetail from './VideoDetail'
import Search from './SearchBar'
import ChannelDetail from './ChannelDetail'

const App = () => {
  return(
<BrowserRouter>
  <Box sx={{background : 'black'}}>
  <Navbar/>
  <Routes>
  <Route path="/" element={<Feed />}></Route>
    <Route path="/video/ :id" element={<VideoDetail />}></Route>
     <Route path="/channel/ :id" element={<ChannelDetail />}></Route>
       <Route path="/search/ :searchTerm" element={<Search />}></Route>
  </Routes>
   </Box>
</BrowserRouter>
)}

export default App