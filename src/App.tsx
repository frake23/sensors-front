import {useState} from 'react'
import './App.css'
import {
    AppBar,
    Box, Button,
    Container, FormControl,
    Grid,
    Input, InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
    Toolbar,
    Typography
} from "@mui/material";
import {LineChart, CartesianGrid, Line, XAxis, YAxis, ResponsiveContainer} from "recharts";
import SelectInput from "@mui/material/Select/SelectInput";

function App() {

    return (
        <>
            <AppBar position="sticky">
                <Container>
                    <Toolbar>
                        <Typography variant="h4">Графики</Typography>
                    </Toolbar>
                </Container>
            </AppBar>
            <Container>
                <Box display="flex" flexDirection="column" alignItems="center" marginTop="30px">
                    <Typography variant="h3" textAlign="center">Поле для вывода графиков</Typography>
                    <ResponsiveContainer width="100%" height={400} minWidth={200}>
                        <LineChart data={[{x: 1, y:2}, {x: 2, y: 4}, {x: 3, y: 3}]} margin={{ top: 40, right: 30, left: 0, bottom: 0 }}>
                            <Line type="monotone" dataKey="y" stroke="#8884d8" />
                            <CartesianGrid stroke="#ccc" />
                            <XAxis dataKey="x" />
                            <YAxis />
                        </LineChart>
                    </ResponsiveContainer>
                    <Stack spacing={3}>
                        <Stack direction="row" spacing={3}>
                            <TextField label="Минимум x"/>
                            <TextField label="Максимум x"/>
                            <TextField label="Количество точек"/>
                            <TextField label="Интервал передачи"/>
                        </Stack>
                        <Stack direction="row" spacing={3}>
                            <TextField label="Минимум y"/>
                            <TextField label="Максимум y"/>
                            <FormControl sx={{flexGrow: 1}}>
                                <InputLabel id="select-random">Характер случайности</InputLabel>
                                <Select labelId="select-random" label="Характер случайности">
                                    <MenuItem value="uniform">Uniform</MenuItem>
                                    <MenuItem value="smart">Smart</MenuItem>
                                </Select>
                            </FormControl>
                            <Button variant="contained" color="primary" sx={{paddingX: "60px"}}>Начать!</Button>
                        </Stack>
                    </Stack>

                </Box>
            </Container>
        </>
    )
}

export default App
