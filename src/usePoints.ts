import { useEffect, useState } from 'react';
import {io} from 'socket.io-client';
import {toast} from 'react-toastify'

const socket = io('https://sensors-back.herokuapp.com/');
export interface GeneratePointsData {
    quantity: number,
    sleep: number,
    randomType: 'uniform' | 'smart',
    minX: number, maxX: number,
    minY: number, maxY: number
}

const connPromise = new Promise((resolve) => {
    socket.once('connect', () => resolve(socket))
})

export default function usePoints() {
    const [points, setPoints] = useState<{x: number, y: number}[]>([]);
    useEffect(() => {
        toast.promise(connPromise, {
            pending: 'Подключение к серверу',
            error: 'Ошибка подключения',
            success: 'Подключено к серверу'
        })
    }, []);
    const generatePoints = (data: GeneratePointsData) => socket.emit('generate_points', data);
    useEffect(() => {
        socket.on('new_point', point => {
            setPoints(points => [...points, point])
        });
    }, []);
    const dropPoints = () => setPoints([])
    return {points, generatePoints, dropPoints}
}
