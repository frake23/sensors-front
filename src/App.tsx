import {useState} from 'react'
import './App.css'
import {
    AppBar,
    Box,
    Button,
    Container,
    FormControl,
    InputLabel,
    MenuItem,
    Stack,
    Toolbar,
    Typography
} from "@mui/material";
import {CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis} from "recharts";
import {ToastContainer} from 'react-toastify';
import {useForm} from 'react-hook-form';
import usePoints from './usePoints';
import {SelectInput, TextInput} from './Input';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const {control, handleSubmit} = useForm();
    const {points, generatePoints, dropPoints} = usePoints();
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
                        <LineChart data={points} margin={{top: 40, right: 30, left: 0, bottom: 0}}>
                            <Line type="monotone" dataKey="y" stroke="#8884d8" isAnimationActive={false}/>
                            <CartesianGrid stroke="#ccc"/>
                            <XAxis dataKey="x" type="number"/>
                            <YAxis/>
                        </LineChart>
                    </ResponsiveContainer>
                    <form onSubmit={handleSubmit((values: any) => {
                        dropPoints()
                        generatePoints(values)
                    })}>
                        <Stack spacing={3}>
                            <Stack direction="row" spacing={3}>
                                <TextInput label="Минимум х" name="min_x" control={control}/>
                                <TextInput label="Максимум х" name="max_x" control={control}/>
                                <TextInput label="Количество точек" name="quantity" control={control}/>
                                <TextInput label="Интервал передачи" name="sleep" control={control}/>
                            </Stack>
                            <Stack direction="row" spacing={3}>
                                <TextInput label="Минимум y" name="min_y" control={control}/>
                                <TextInput label="Максимум y" name="max_y" control={control}/>
                                <FormControl sx={{flexGrow: 1}}>
                                    <InputLabel id="select-random">Характер случайности</InputLabel>
                                    <SelectInput label="Характер случайности" name="random" control={control}>
                                        <MenuItem value="uniform">Uniform</MenuItem>
                                        <MenuItem value="smart">Smart</MenuItem>
                                    </SelectInput>
                                </FormControl>
                                <Button type="submit" variant="contained" color="primary"
                                        sx={{paddingX: "60px"}}>Начать!</Button>
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
