'use client';   
import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import WidgetsIcon from '@mui/icons-material/Widgets';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Avatar from '@mui/material/Avatar';
import GppGoodIcon from '@mui/icons-material/GppGood';
import HelpIcon from '@mui/icons-material/Help';
import Switch from '@mui/material/Switch';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddTaskIcon from '@mui/icons-material/AddTask';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import { Grid } from '@mui/material';
import { appUseThemeContext } from '../context/themeContext';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

export const Sidebar: React.FC = () => {
    const { toggleTheme } = appUseThemeContext();
    const [active, setActive] = React.useState({ path: location.pathname });

    const navigate = useNavigate();

    const handleNavigate = (path: string) => {
        setActive({ path });
        navigate(path);
        console.log(active.path, path)
    };
    
    return (
        <>
            <Drawer
                open={true}
                variant='temporary'
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                  }}
                    ModalProps={{
                        BackdropProps: { invisible: true },
                        disableScrollLock: true,
                        disablePortal: true,
                        hideBackdrop: true,
                        disableEnforceFocus: true,
                      }}

            >
                <Box
                    width={"250px"}
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    height={'100vh'}
                >
                    <Box padding={"56px"}>
                        <Typography variant={'h6'}>
                           Loja
                        </Typography>
                    </Box>
                    <Divider />
                    <List>
                        {['Dashboard', 'Produtos', 'Tarefas', 'Serviços', 'Account'].map((text, index) => (
                            <ListItem
                                key={text}
                                button
                                sx={{
                                    '&.Mui-selected': {
                                        backgroundColor: '#FFDD39',
                                        borderRadius: '10px',
                                        color: '#1A1500',
                                        '&:hover': {
                                            backgroundColor: '#FFDD39',
                                            borderRadius: '10px',
                                            color: '#1A1500',
                                        },
                                    },
                                }}
                                selected={active.path === `/${text.toLowerCase()}` || active.path === '/' && index === 0}
                                onClick={() => handleNavigate(index === 0 ? '/' : `/${text.toLowerCase()}`)}
                            >
                                <ListItemIcon>
                                    {index === 0 && <WidgetsIcon />}
                                    {index === 1 && <AddBusinessIcon/>}
                                    {index === 2 && <AddTaskIcon/>}
                                    {index === 3 && <SettingsIcon />}
                                    {index === 4 && <PersonIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>

                        ))}
                        <Divider sx={{bgcolor:"#202020"}} />
                        <ListItem>
                            <ListItemIcon>
                                <GppGoodIcon/>
                            </ListItemIcon>
                            <ListItemText  primary={'Support'} />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <HelpIcon />
                            </ListItemIcon>
                            <ListItemText  primary={'Help'} />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <DarkModeIcon  />
                            </ListItemIcon>
                            <ListItemText  primary={'Dark Mode'} />
                            <Switch
                                onChange={toggleTheme}
                            />
                        </ListItem>
                    </List>
                    <Grid
                        container
                        display={'grid'}
                        gridTemplateColumns={'1fr 1fr 1fr'}
                        gap={'10px'}
                        padding={'10px'}
                    >
                        <Grid item>
                            <Avatar />
                        </Grid>
                        <Grid
                            item
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            flexDirection={'column'}
                            
                        >
                            <Typography variant={'h6'}>
                                Username
                            </Typography>
                            <Typography variant={'subtitle1'}>
                                Cargo
                            </Typography>
                        </Grid>
                        <Grid item>
                            <KeyboardArrowDownIcon
                            sx={{
                                cursor: 'pointer',
                            }} />
                        </Grid>
                    </Grid>
                </Box>
            </Drawer>
        </>
    )
};