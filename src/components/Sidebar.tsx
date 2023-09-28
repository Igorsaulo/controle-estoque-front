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

const drawerWidth = 240;

export const Sidebar: React.FC = () => {
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
                    bgcolor={'#282828'}
                    border={'1px solid #1D1D41'}
                >
                    <Box padding={"56px"}>
                        <Typography sx={{color:"#FFD50A"}} variant={'h6'}>
                            Padaria do Zé
                        </Typography>
                    </Box>
                    <Divider />
                    <List>
                        {['Dashboard', 'Produtos', 'Tarefas', 'Serviços', 'Account'].map((text, index) => (
                            <ListItem
                                key={text}
                                button
                                sx={{
                                    color: '#fff',
                                    '&.Mui-selected': {
                                        backgroundColor: '#FFDD39',
                                        borderRadius: '10px',
                                        color: '#1A1500',
                                    },
                                }}
                                selected={index === 0}
                            >
                                <ListItemIcon>
                                    {index === 0 && <WidgetsIcon sx={{color:'#1A1500'}} />}
                                    {index === 1 && <AddBusinessIcon sx={{color:'#fff'}}/>}
                                    {index === 2 && <AddTaskIcon sx={{color:'#fff'}}/>}
                                    {index === 3 && <SettingsIcon sx={{color:'#fff'}} />}
                                    {index === 4 && <PersonIcon sx={{color:'#fff'}} />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>

                        ))}
                        <Divider sx={{bgcolor:"#202020"}} />
                        <ListItem>
                            <ListItemIcon>
                                <GppGoodIcon sx={{color:"#fff"}} />
                            </ListItemIcon>
                            <ListItemText sx={{color:"#ffff"}} primary={'Support'} />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <HelpIcon sx={{color:"#ffff"}} />
                            </ListItemIcon>
                            <ListItemText sx={{color:"#ffff"}} primary={'Help'} />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <DarkModeIcon sx={{color:"#ffff"}} />
                            </ListItemIcon>
                            <ListItemText sx={{color:"#ffff"}} primary={'Dark Mode'} />
                            <Switch />
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
                            sx={{color:"#ffff"}}
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
                                color: '#ffff',
                            }} />
                        </Grid>
                    </Grid>
                </Box>
            </Drawer>
        </>
    )
};