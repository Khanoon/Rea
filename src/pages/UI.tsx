import { Box, Button, Grid, Stack } from '@mui/material'
import ResponsiveAppBar from '../compone/appbar'
import MediaCard from '../compone/card'

const UI = () => {
    return (
        <>
            <ResponsiveAppBar />
            <Box sx={{
                display: 'flex',
                flexDirection: 'column', // เปลี่ยนเป็นการแสดงเป็นคอลัมน์
                height: "100%",
                width: "100%",
                paddingBottom: 5,
                alignItems: 'center',
                justifyContent: 'start',
                bgcolor: 'background.default',
                color: 'text.primary',
                borderRadius: 1,
                paddingTop: 2
            }}>
                <Box sx={{ width: '80%' }}>
                    <h1>Album example</h1>
                    <p>Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                </Box>
                <Box>
                    <Stack direction={'row'} spacing={2} >
                        <Button variant="contained" color="primary" >
                            Main call to action
                        </Button>

                        <Button  color="primary" sx={{ background: '#9fc3e6' }}>
                            Secondary action
                        </Button>
                    </Stack>
                </Box>

            </Box>
            <Box sx={{
                scrollPaddingTop: 10,
                display: 'flex',
                flexDirection: 'column', // เปลี่ยนเป็นการแสดงเป็นคอลัมน์
                height: "100%",
                width: "100%",
                paddingBottom: 5,
                alignItems: 'center',
                justifyContent: 'start',
                bgcolor: '#f8f9fa',
                color: 'text.primary',
                borderRadius: 1,
                paddingTop: 2
            }}>
                <Box sx={{ width: '80%' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <MediaCard />
                        </Grid>
                        <Grid item xs={4}>
                            <MediaCard />
                        </Grid>
                        <Grid item xs={4}>
                            <MediaCard />
                        </Grid>
                        <Grid item xs={4}>
                            <MediaCard />
                        </Grid>
                        <Grid item xs={4}>
                            <MediaCard />
                        </Grid>
                        <Grid item xs={4}>
                            <MediaCard />
                        </Grid>
                        <Grid item xs={4}>
                            <MediaCard />
                        </Grid>
                        <Grid item xs={4}>
                            <MediaCard />
                        </Grid>
                        <Grid item xs={4}>
                            <MediaCard />
                        </Grid>
                    </Grid>

                </Box>

            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column', // เปลี่ยนเป็นการแสดงเป็นคอลัมน์
                height: "100%",
                width: "100%",
                paddingBottom: 5,
                alignItems: 'center',
                justifyContent: 'start',
                bgcolor: 'background.default',
                color: 'text.primary',
                borderRadius: 1,
                paddingTop: 2
            }}>
                <Box sx={{ width: '80%' }}>
                    <p>Album example is © Bootstrap, but please download and customize it for yourself!</p>
                    <p>New to Bootstrap? Visit the homepage  or read our getting started guide</p>
                </Box>
            </Box>
        </>


    )
}

export default UI