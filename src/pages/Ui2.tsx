import ResponsiveAppBar from '../compone/appbar'
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Checkbox, Grid, Slider, Stack, TextField, Typography } from '@mui/material'


const Ui2 = () => {
    return (
        <>
            <ResponsiveAppBar />
            <Box sx={{
                display: 'flex',
                flexDirection: 'column', // เปลี่ยนเป็นการแสดงเป็นคอลัมน์
                height: "100%",
                width: "100%",
                alignItems: 'center',
                justifyContent: 'start',
                bgcolor: 'background.default',
                color: 'text.primary',
                borderRadius: 1,
                paddingTop: 2

            }}>
                <Card >
                    <Grid container spacing={2} p={2} ml={0} width={'100%'}>
                        <Grid sm={6} xs={12} sx={{ pr: 1 }}>

                            <Box component="img"
                                sx={{
                                    height: "50%",
                                    width: "80%",

                                }}
                                alt="The house from the offer."
                                src="https://img.freepik.com/free-photo/people-making-hands-heart-shape-silhouette-sunset_53876-15987.jpg" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'start' }}>
                                    กล้อง
                                </Typography>
                                <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                            </CardContent>


                        </Grid>

                        <Grid sm={6} xs={12} sx={{ pl: 1 }}>
                            <Stack spacing={1} sx={{ pb: 5 }}>
                                <Card sx={{ p: 2 }}>
                                    <Box sx={{ width: "100%" }}>
                                        <Stack spacing={1} sx={{ pb: 5 }}>
                                            <Typography variant="h5" sx={{ textAlign: 'start' }}>
                                                sad
                                            </Typography>
                                            <Typography component="p" sx={{ textAlign: 'start' }}>
                                                Something short and leading about the collection below—its contents, the creator, etc.
                                                Make it short and sweet, but not too short so folks don’t simply skip over it entirely.
                                            </Typography>
                                        </Stack><Stack spacing={1} >
                                            <Typography variant="h5" sx={{ textAlign: 'start' }}>
                                                sad
                                            </Typography>
                                            <Typography component="p" sx={{ textAlign: 'start' }}>
                                                sadf
                                            </Typography>
                                            <TextField fullWidth label="fullWidth" id="fullWidth" />
                                            <Button variant="outlined" sx={{ width: "30%", bgcolor: '#9fc3e6', }}>Outlined</Button>
                                        </Stack>
                                    </Box>
                                </Card>

                                <Card >
                                    <Box sx={{ width: "100%" }}>
                                        <Stack spacing={1} sx={{ pb: 1 }}>
                                            <Card sx={{ bgcolor: "#6c757d", p: 2 }}>
                                                <Typography variant="h5" sx={{ textAlign: 'start' }}>
                                                    sad
                                                </Typography>
                                            </Card>
                                            <Box sx={{ p: 2 }}>
                                            <Stack spacing={1} sx={{ pb: 1 }}>
                                            <Typography component="p" sx={{ textAlign: 'start' ,borderBottom: 1 ,pb:2}}>
                                               Display
                                            </Typography>
                                            <Typography component="p" sx={{ textAlign: 'start' ,borderBottom: 1 ,pb:2}}>
                                               Display
                                            </Typography>
                                            <Typography component="p" sx={{ textAlign: 'start' ,borderBottom: 1 ,pb:2}}>
                                               Display
                                            </Typography>
                                            <Typography component="p" sx={{ textAlign: 'start' ,borderBottom: 1 ,pb:2}}>
                                               Display
                                            </Typography>
                                            <Typography component="p" sx={{ textAlign: 'start' ,borderBottom: 1 ,pb:2}}>
                                               Display
                                            </Typography>
                                            <Typography component="p" sx={{ textAlign: 'start' }}>
                                               Display
                                            </Typography>
                                            </Stack>
                                            </Box>
                                        </Stack>
                                        
                                    </Box>
                                </Card>
                            </Stack>
                        </Grid>
                        <Grid xs={12} >
                       
                                <Card sx={{ bgcolor: "#6c757d", p: 2 }}>
                                    <Typography variant="h5" sx={{ textAlign: 'start' }}>
                                        sad
                                    </Typography>
                                </Card>
                                <Card sx={{ p: 2 ,mb:2}}>
                                    <Box>
                                        <Stack direction={"row"} spacing={2} >
                                            <Box>
                                                <Checkbox defaultChecked size="small" />
                                                <label>1</label>
                                            </Box>

                                            <Box>
                                                <Checkbox defaultChecked size="small" />
                                                <label>2</label>
                                            </Box>
                                            <Box>
                                                <Checkbox defaultChecked size="small" />
                                                <label>3</label>
                                            </Box>
                                            <Box>
                                                <Checkbox defaultChecked size="small" />
                                                <label>4</label>
                                            </Box>
                                            <Box>
                                                <Checkbox defaultChecked size="small" />
                                                <label>5</label>
                                            </Box>
                                            <Button variant="outlined" sx={{ width: "15%", bgcolor: '#9fc3e6', ml: 10 }}>Ok</Button>
                                        </Stack>
                                    </Box>
                                </Card>
                        </Grid>
                        <Grid xs={12} >
                          
                                <Card sx={{ bgcolor: "#6c757d", p: 2 }}>
                                    <Typography variant="h5" sx={{ textAlign: 'start' }}>
                                        sad
                                    </Typography>
                                </Card>
                                <Card sx={{ p: 2 }}>
                                    <Stack spacing={1} >
                                        <Typography variant="h5" sx={{ textAlign: 'start' }}>
                                            sad
                                        </Typography>
                                        <Typography component="p" sx={{ textAlign: 'start', borderBottom: 1 }}>
                                            Something short and leading about the collection below—its contents, the creator, etc.

                                        </Typography>
                                        <Typography variant="h5" sx={{ textAlign: 'start' }}>
                                            sad
                                        </Typography>
                                        <Typography component="p" sx={{ textAlign: 'start' }}>
                                            Something short and leading about the collection below—its contents, the creator, etc.

                                        </Typography>
                                    </Stack>
                                </Card>

                        
                        </Grid>
                    </Grid>
                </Card>
            </Box>
        </>
    )
}

export default Ui2