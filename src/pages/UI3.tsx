import { Box, Button, Card, Checkbox, FormControl, FormControlLabel, FormLabel, Grid, Icon, InputLabel, MenuItem, Radio, RadioGroup, Select, SelectChangeEvent, Stack, TextField, Typography, colors } from "@mui/material"
import ResponsiveAppBar from "../compone/appbar"
import { AccountCircle } from "@mui/icons-material"
import ArrowCircleDownSharpIcon from '@mui/icons-material/ArrowCircleDownSharp';
import React from "react";

const UI3 = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };
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
                bgcolor: '#f8f9fa',
                color: 'text.primary',
                borderRadius: 1,
                paddingTop: 2
            }}>
                <Stack spacing={1} sx={{ pb: 5 }}>
                    <Typography variant="h5" sx={{ textAlign: 'center' }}>
                        Checkout form
                    </Typography>
                    <Typography component="p" sx={{ textAlign: 'center' ,pl:5,pr:5 }}>
                        Something short and leading about the collection below—its contents, the creator, etc.
                        Make it short and sweet, but not too short so folks don’t simply skip over it entirely.
                        Something short and leading abo
                    </Typography>
                </Stack>
                <Grid container spacing={2} p={2} ml={0} width={"100%"} >
                    <Grid xs={12} sm={8}  sx={{ pr: 1 }}>
                        <Stack spacing={1} sx={{ pb: 5 }}>
                            <Typography variant="h5" sx={{ textAlign: 'start' }}>
                                Checkout form
                            </Typography>
                            <Stack direction={"row"} spacing={2}>
                                <Grid xs={6}>
                                    <Typography component="p" sx={{ textAlign: 'start' }}>
                                        fname
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'flex-end', pb: 2 }}>
                                        <TextField
                                            fullWidth
                                            id="filled-hidden-label-small"
                                            variant="filled"
                                            size="small"

                                        />
                                    </Box>
                                </Grid>
                                <Grid xs={6}>
                                    <Typography component="p" sx={{ textAlign: 'start' }}>
                                        lname
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'flex-end', pb: 2 }}>
                                        <TextField
                                            fullWidth
                                            id="filled-hidden-label-small"
                                            variant="filled"
                                            size="small"
                                        />
                                    </Box>
                                </Grid>
                            </Stack>
                            <Box>
                                <Typography component="p" sx={{ textAlign: 'start' }}>
                                    User Name
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end', pb: 2 }}>
                                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                    <TextField
                                        fullWidth
                                        id="filled-hidden-label-small"
                                        variant="filled"
                                        size="small"
                                    />
                                </Box>
                            </Box>
                            <Box >
                                <Typography component="p" sx={{ textAlign: 'start' }}>
                                    E-mail
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end', pb: 2 }}>
                                    <TextField
                                        fullWidth
                                        id="filled-hidden-label-small"
                                        variant="filled"
                                        size="small"
                                    />
                                </Box>
                            </Box>
                            <Box >
                                <Typography component="p" sx={{ textAlign: 'start' }}>
                                    addres
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end', pb: 2 }}>
                                    <TextField
                                        fullWidth
                                        id="filled-hidden-label-small"
                                        variant="filled"
                                        size="small"
                                    />
                                </Box>
                            </Box>
                            <Box >
                                <Typography component="p" sx={{ textAlign: 'start' }}>
                                    Addres
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end', pb: 2 }}>
                                    <TextField
                                        fullWidth
                                        id="filled-hidden-label-small"
                                        variant="filled"
                                        size="small"
                                    />
                                </Box>
                            </Box>
                            <Box >
                                <Typography component="p" sx={{ textAlign: 'start' }}>
                                    Addres2
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end', pb: 2 }}>
                                    <TextField
                                        fullWidth
                                        id="filled-hidden-label-small"
                                        variant="filled"
                                        size="small"
                                        label="User Name"
                                    />
                                </Box>
                            </Box>
                            <Stack direction={"row"} spacing={2} sx={{ borderBottom: 1 }}>
                                <Grid xs={6}>
                                    <Typography component="p" sx={{ textAlign: 'start' }}>
country
                                    </Typography>
                                    <FormControl variant="filled" sx={{ minWidth: 270 }}>
                                        <Select
                                            labelId="demo-simple-select-filled-label"
                                            id="demo-simple-select-filled"
                                            value={age}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>thai</MenuItem>
                                            <MenuItem value={20}>eng</MenuItem>
                                            <MenuItem value={30}>leo</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid xs={3}>
                                <Typography component="p" sx={{ textAlign: 'start' }}>
                                Age
                                    </Typography>
                                    <FormControl variant="filled" sx={{ minWidth: 140 }}>
                                        <Select
                                            labelId="demo-simple-select-filled-label"
                                            id="demo-simple-select-filled"
                                            value={age}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid xs={3}>
                                <Typography component="p" sx={{ textAlign: 'start' }}>
                                Age
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'flex-end', pb: 2 }}>
                                        <TextField
                                            fullWidth
                                            id="filled-hidden-label-small"
                                            variant="filled"
                                            size="small"
                                            label="User Name"
                                        />
                                    </Box>
                                </Grid>
                            </Stack>
                            <Stack direction={"row"} spacing={1} sx={{ alignItems: 'center' }}>
                                <Checkbox />
                                <Typography component="p" sx={{ textAlign: 'start', }}>
                                    asfsagfsagsadafd
                                </Typography>
                            </Stack>
                            <Stack direction={"row"} spacing={1} sx={{ alignItems: 'center', borderBottom: 1 }}>
                                <Checkbox />
                                <Typography component="p" sx={{ textAlign: 'start', }}>
                                    asfsagfsagsadafd
                                </Typography>
                            </Stack >
                            <Stack spacing={1} sx={{ pt: 3 }}>
                                <Typography variant="h5" sx={{ textAlign: 'start', }}>
                                    Patmeny
                                </Typography>
                                <FormControl>
                                    <FormLabel id="demo-radio-buttons-group-label" sx={{ textAlign: 'start', }}>Gender</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                                    </RadioGroup>
                                </FormControl>
                                <Stack direction={"row"} spacing={2} >
                                    <Grid xs={6}>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end', }}>
                                            <TextField
                                                fullWidth
                                                id="filled-hidden-label-small"
                                                variant="filled"
                                                size="small"
                                                label="User Name"
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid xs={6}>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end', }}>
                                            <TextField
                                                fullWidth
                                                id="filled-hidden-label-small"
                                                variant="filled"
                                                size="small"
                                                label="User Name"
                                            />
                                        </Box>
                                    </Grid>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid xs={12} sm={4} sx={{ pl: 1 }}>
                        <Stack direction={"row"} sx={{ justifyContent: 'space-between' }}>
                            <Typography variant="h5" sx={{ textAlign: 'start', }}>
                                Your Cart
                            </Typography>
                            <ArrowCircleDownSharpIcon />
                        </Stack>
                        <Stack>
                            <Card sx={{ p: 2 }}>
                                <Stack direction={'row'} sx={{ justifyContent: 'space-between' }}>
                                    <Stack>
                                        <Typography variant="h6" sx={{ textAlign: 'start', }}>
                                            รายการของ
                                        </Typography>
                                        <Typography component="p" sx={{ textAlign: 'start', }}>
                                            จขข้าว
                                        </Typography></Stack>
                                    <Typography component="p" sx={{ textAlign: 'center' }}>
                                        50บาท
                                    </Typography>
                                </Stack>
                            </Card>
                            <Card sx={{ p: 2 }}>
                                <Stack direction={'row'} sx={{ justifyContent: 'space-between' }}>
                                    <Stack>
                                        <Typography variant="h6" sx={{ textAlign: 'start', }}>
                                            รายการของ
                                        </Typography>
                                        <Typography component="p" sx={{ textAlign: 'start', }}>
                                            ขนม
                                        </Typography></Stack>
                                    <Typography component="p" sx={{ textAlign: 'center' }}>
                                        50บาท
                                    </Typography>
                                </Stack>
                            </Card>
                            <Card sx={{ p: 2 }}>
                                <Stack direction={'row'} sx={{ justifyContent: 'space-between' }}>
                                    <Stack>
                                        <Typography variant="h6" sx={{ textAlign: 'start', }}>
                                            รายการของ
                                        </Typography>
                                        <Typography component="p" sx={{ textAlign: 'start', }}>
                                            ขนม
                                        </Typography></Stack>
                                    <Typography component="p" sx={{ textAlign: 'center' }}>
                                        50บาท
                                    </Typography>
                                </Stack>
                            </Card>
                            <Card sx={{ p: 2 }}>
                                <Stack direction={'row'} sx={{ justifyContent: 'space-between' }}>
                                    <Stack>
                                        <Typography variant="h6" sx={{ textAlign: 'start', color: '#18c37d' }}>
                                            Code
                                        </Typography>
                                        <Typography component="p" sx={{ textAlign: 'start', color: '#18c37d' }}>
                                            XD
                                        </Typography></Stack>
                                    <Typography component="p" sx={{ textAlign: 'center', color: '#18c37d' }}>
                                        +50บาท
                                    </Typography>
                                </Stack>
                            </Card>
                            <Card sx={{ p: 2 }}>
                                <Stack direction={'row'} sx={{ justifyContent: 'space-between' }}>
                                    <Typography variant="h6" sx={{ textAlign: 'start', }}>
                                        รวม
                                    </Typography>
                                    <Typography variant="h6" sx={{ textAlign: 'center' }}>
                                        50บาท
                                    </Typography>
                                </Stack>
                            </Card>

                            <Card sx={{ p: 2, mt: 5 }}>
                                <Stack direction={'row'} sx={{ justifyContent: 'space-between' }}>
                                    <TextField
                                        id="outlined-uncontrolled"
                                        label="code"
                                    />
                                    <Button sx={{ backgroundColor: '#6c757d', color: '#000000' }}>Primary</Button>

                                </Stack>
                            </Card>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default UI3