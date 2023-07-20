import { Box, Button, Stack } from '@mui/material'


const Body_Appbar = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column', // เปลี่ยนเป็นการแสดงเป็นคอลัมน์
      height: 500,
      width: "100%",
      alignItems: 'center',
      justifyContent: 'start',
      bgcolor: 'background.default',
      color: 'text.primary',
      borderRadius: 1,
      paddingTop:2
    }}>
      <Stack spacing={2} >
        <Button variant="contained" color="primary" href='/calculateWater'>
          calculateWater
        </Button>

        <Button variant="contained" color="primary" href='/UI'>
          Page_UI
        </Button>
        <Button variant="contained" color="primary" href='/UI2'>
          Page_UI2
        </Button>
        <Button variant="contained" color="primary" href='/UI3'>
          Page_UI3
        </Button>
      </Stack>
    </Box>
  )
}

export default Body_Appbar