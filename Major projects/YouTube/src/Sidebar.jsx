import React from 'react'
import { Stack,Box } from '@mui/material'
import { categories } from './utils/Icons'

const Sidebar = ({selected,setselected}) => {

  let userselected = 'New'
  return (
   <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "90%" },
      flexDirection: { md: "column" },
    }}
  >
     {categories.map(category => (
      <>
        <button className='category-btn' onClick={() => setselected(category.name)}
        style={{backgroundColor : category.name === userselected ? '#FC1503' : 'black', color : 'white' }} key={category.name}>
          <span style={{marginRight : '2em'}}>{category.icon}</span>
            <span style={{ opacity: category.name === userselected ? "1" : "0.8" }}>
          {category.name}
        </span>
        </button>
      </>
    ))}
  </Stack>
  )
}

export default Sidebar