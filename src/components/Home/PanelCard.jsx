import React from 'react'
import '../CSS/PanelCard.css'
import { TextField } from '@mui/material'
const PanelCard = (props) => {
  return (
    <div className="inputs">
        <TextField type='text' sx={{marginRight:'102px'}} ref={props.ref1} className='search' placeholder={props.placeholder1}></TextField>
        <TextField type='text' ref={props.ref2} className='search' placeholder='Speech'></TextField>
    </div>
  )
}

export default PanelCard