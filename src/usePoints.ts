import { useEffect, useState } from 'react';
import {io} from 'socket.io-client';
import {toast} from 'react-toastify'

const socket = io(import.meta.env.BASE_URL);
interface GeneratePointsData {
    quantity: number,
    sleep: number,
    randomType: 'uniform' | 'smart',
    minX: number, maxX: number,
    minY: number, maxY: number
}

export default function usePoints() {
    const [points, setPoints] = useState<{x: number, y: number}[]>([]);
    const generatePoints = (data: GeneratePointsData) => socket.emit('generate_points', data);
    useEffect(() => {
        socket.on('new_point', point => {
            setPoints(points => [...points, point])
        });
        socket.on('connect', () => toast.success('Подключение к серверу установлено'));
        socket.on('disconnect', () => toast.error('Подключение к серверу оборвалось'));
        socket.on('reconnect', () => toast.loading('Переподключение к серверу'))
    }, []);

    return {points, generatePoints}
}
