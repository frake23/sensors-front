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
import { toast, ToastContainer } from 'react-toastify';
import {Controller, useForm} from 'react-hook-form';
import usePoints from './usePoints';
import { TextInput, SelectInput } from './Input';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const {control, handleSubmit} = useForm();
    const {points, generatePoints} = usePoints();
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
                        <LineChart data={points} margin={{ top: 40, right: 30, left: 0, bottom: 0 }}>
                            <Line type="monotone" dataKey="y" stroke="#8884d8" />
                            <CartesianGrid stroke="#ccc" />
                            <XAxis dataKey="x" />
                            <YAxis />
                        </LineChart>
                    </ResponsiveContainer>
                    <form onSubmit={handleSubmit((values: any) => generatePoints(values))}>
                        <Stack spacing={3}>
                        <Stack direction="row" spacing={3}>
                            <TextInput label="Минимум х" name="minX" control={control}/>
                            <TextInput label="Максимум х" name="maxX" control={control}/>
                            <TextInput label="Количество точек" name="quantity" control={control}/>
                            <TextInput label="Интервал передачи" name="sleep" control={control}/>
                        </Stack>
                        <Stack direction="row" spacing={3}>
                            <TextInput label="Минимум y" name="minY" control={control}/>
                            <TextInput label="Максимум х" name="maxY" control={control}/>
                            <FormControl sx={{flexGrow: 1}}>
                                <InputLabel id="select-random">Характер случайности</InputLabel>
                                <SelectInput label="Характер случайности" name="randomType" control={control}>
                                    <MenuItem value="uniform">Uniform</MenuItem>
                                    <MenuItem value="smart">Smart</MenuItem>
                                </SelectInput>
                            </FormControl>
                            <Button type="submit" variant="contained" color="primary" sx={{paddingX: "60px"}}>Начать!</Button>
                        </Stack>
                        </Stack>
                    </form>
                    

                </Box>
            </Container>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                closeOnClick={true}
                pauseOnHover={true}
            />
        </>
    )
}

export default App
