import { 
    Box,
    Grid,
    Typography
 } from "@mui/material";

 export function PageViewe(){
    return(
        <Box
        bgcolor={'#282828'}
        height={'36vh'}
        width={'100% - 20px'}
        borderRadius={'20px'}
        padding={'20px'}>
            <Grid item xs={12}>
                <Typography
                fontSize={'26px'}
                color={'#fff'}>
                    Visualizações da página
                </Typography>
            </Grid>
            <Grid 
            item 
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            height={'100%'}
            xs={12}>
                <Typography
                fontSize={'65px'}
                color={'#fff'}>
                   0
                </Typography>
            </Grid>
        </Box>
    )
 }