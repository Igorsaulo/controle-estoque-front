import { Box, Grid, Typography } from "@mui/material";
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import CallMadeIcon from '@mui/icons-material/CallMade';
import { TopBox } from "../../components/Dashboard/TopBox";
import { PrincipalTasks } from "../../components/Dashboard/PrincipalTask";
import { ColumnChart } from "../../components/Dashboard/ResumeChart";
import { VolumeVendas } from "../../components/Dashboard/VolumeVendas";
import { OperationsContainer } from "../../components/Dashboard/OperationsContainer";
import { PageViewe } from "../../components/Dashboard/PageViewe";
import { useTheme } from '@mui/material/styles';

export function Dashboard() {
    const theme = useTheme()
    return (
        <Box
        bgcolor={theme.palette.background.paper}
        >
            <Grid
                container
                spacing={2}
                padding={2}
            >
                <Grid item xs={12}>
                    <Typography
                        fontSize={'26px'}
                        color={theme.palette.primary.contrastText}
                    >
                        Dashboard
                    </Typography>
                </Grid>
                <Grid
                    container
                    item
                    spacing={2}
                    xs={8}>
                    <Grid height={"20vh"} item xs={6}>
                        <TopBox
                            title={"Total de vendas"}
                            value={100}
                            icon={<CallReceivedIcon
                                sx={{
                                    color: '#001F20',
                                    fontSize: '30px',
                                }} />}
                            bgColor="#fff"
                            color="#0EA0A4"
                            bgColorIcon="#2BDADE"
                        />
                    </Grid>
                    <Grid height={"20vh"} item xs={6}>
                        <TopBox
                            title={"Total de gastos"}
                            value={100}
                            icon={<CallMadeIcon
                                sx={{
                                    color: '#200C00',
                                    fontSize: '30px',
                                }} />}
                            bgColor="#5F2301"
                            color="#DE5609"
                            bgColorIcon="#BE4500"
                        />
                    </Grid>
                    <Grid
                        marginTop={"11vh"}
                        item xs={12}>
                        <ColumnChart />
                    </Grid>
                    <Grid
                        marginTop={"3vh"}
                        item xs={12}>
                        <OperationsContainer />
                    </Grid>
                </Grid>
                <Grid
                    container
                    item
                    spacing={2}
                    xs={4}>
                    <Grid
                        item xs={12}>
                        <PrincipalTasks />
                    </Grid>
                    <Grid
                        item xs={12}>
                        <VolumeVendas />
                    </Grid>
                    <Grid
                        item xs={12}>
                        <PageViewe />
                    </Grid>
                </Grid>
            </Grid>
        </Box >
    )
}
