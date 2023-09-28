import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import { TaskList } from "./TaskList";

const tasks = [
    {
        title: 'Reunião com o cliente',
        description: 'Reunião com o cliente',
        date: '10/10/2021',
        status: 'pendente',
    },
    {
        title: 'Reunião com o cliente',
        description: 'Reunião com o cliente',
        date: '10/10/2021',
        status: 'perdido',
    },
    {
        title: 'Reunião com o cliente',
        description: 'Reunião com o cliente',
        date: '10/10/2021',
        status: 'concluido',
    },
];


export function PrincipalTasks(): ReactNode {
    return (
        <Box
            bgcolor={'#282828'}
            height={'50vh'}
            width={'100% - 20px'}
            borderRadius={'20px'}
            padding={'20px'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'space-between'}
        >
            <Box
                width={'100%'}
            >
                <Typography
                    fontSize={'16px'}
                    color={'#fff'}
                >
                    Tarefas
                </Typography>
            </Box>
            <Box
                width={'100%'}
            >
                {tasks.map((task) => (
                    <TaskList
                        title={task.title}
                        description={task.description}
                        date={task.date}
                        icon={
                            task.status === 'concluido' ? <EventAvailableIcon
                                sx={{
                                    color: '#18B7BB',
                                    fontSize: '25px',
                                }} /> :
                                task.status === 'pendente' ? <CalendarMonthIcon
                                    sx={{
                                        color: '#C7A502',
                                        fontSize: '25px',
                                    }} /> :
                                    <EventBusyIcon
                                        sx={{
                                            color: '#983700',
                                            fontSize: '25px',
                                        }} />
                        }
                    />
                ))}
            </Box>
            <Box>
                <Typography
                    fontSize={'16px'}
                    color={'#9B9B9B'}
                >
                    Ver todas
                </Typography>
            </Box>
        </Box>
    );
}
