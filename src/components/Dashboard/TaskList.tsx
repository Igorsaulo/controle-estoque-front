import {
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
} from "@mui/material";
import { ReactNode } from "react";

interface TaskListProps {
    title: string;
    description: string;
    date: string;
    icon: ReactNode;
}

export function TaskList({
    title, date, icon
}: TaskListProps) {
    return (
        <List >
            <ListItem>
                <ListItemText 
                primaryTypographyProps={{
                    fontSize: '16px',
                    color: '#fff',
                }}
                secondaryTypographyProps={{
                    fontSize: '14px',
                    color: '#9B9B9B',
                }}
                primary={date} 
                secondary={title} />
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
            </ListItem>
        </List>
    );
}

