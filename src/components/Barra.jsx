import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const Barra = ({resultado}) => {
    const shapeStyles = {  width: 20, height: 20, marginLeft: 5};
    const shapeCircleStyles = { borderRadius: '50%' };
    let calPercent = resultado * 100 / 30;
    if (calPercent > 100) {
        calPercent = 93;
    }
  return (
    <div style={{marginTop: 200,marginLeft:100}}>
        <div style={{display: 'grid', marginLeft:`${calPercent}%`}}>
            <span style={{marginLeft:15}}>{resultado}</span>
            <ArrowDropDownIcon sx={{fontSize:50}}/>
        </div>
        <Box
          sx={{
            width: 500,
            height: 100,
            borderRadius: 2,
            background: "linear-gradient(to right,#448fcb ,#338d34, #86ae18, #e2b500,#c25923)",
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
         <Stack spacing={4} direction="row" style={{marginTop:10, marginLeft:15}}>
            <Badge color="secondary" overlap="circular">
                <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles, bgcolor:'#448fcb' }} />
            </Badge>
            <Badge color="secondary" overlap="circular">
                <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles, bgcolor:'#338d34' }} />
            </Badge>
            <Badge color="secondary" overlap="circular">
                <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles, bgcolor:'#86ae18' }} />
            </Badge>
            <Badge color="secondary" overlap="circular">
                <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles, bgcolor:'#e2b500' }} />
            </Badge>
            <Badge color="secondary" overlap="circular">
                <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles, bgcolor:'#c25923' }} />
            </Badge>
        </Stack>
        <Stack spacing={5} direction="row" style={{marginTop:10, marginLeft:55}}>
            <span>2-4%</span>
            <span>6-13%</span>
            <span>14-17%</span>
            <span>18-25%</span>
            <span>25% +</span>
        </Stack>
        <Stack spacing={4} direction="row" style={{marginTop:10, marginLeft:35}}>
            <span>Esencial</span>
            <span>Deportista</span>
            <span>Fitness</span>
            <span>Aceptable</span>
            <span>Obeso</span>
        </Stack>
    </div>
  )
}

export default Barra
