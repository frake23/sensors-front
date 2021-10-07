import {useState} from 'react'
import './App.css'
import {AppBar, Box, Container, Toolbar, Typography} from "@mui/material";
import {LineChart, CartesianGrid, Line, XAxis, YAxis, ResponsiveContainer} from "recharts";

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

                </Box>
            </Container>
        </>
    )
}

export default App
