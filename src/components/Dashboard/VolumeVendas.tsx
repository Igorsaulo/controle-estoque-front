import {
    Box,
    Typography
} from "@mui/material";
import { VolumeChart } from "./VolumeChart";

export function VolumeVendas() {
    return (
        <Box
            bgcolor={'#282828'}
            height={'50vh'}
            width={'100% - 20px'}
            borderRadius={'20px'}
            padding={'20px'}
            display={'flex'}
            flexDirection={'column'}
        >
            <Box
            paddingBottom={'20px'}
            >
            <Typography
                fontSize={'16px'}
                color={'#9B9B9B'}
            >
                Volume de vendas
            </Typography>
            </Box>
            <Box>
            <Typography
                fontSize={'40px'}
                color={'#fff'}
            >
                1.000
            </Typography>
            </Box>
           <Box>
           <VolumeChart />
           </Box>
        </Box>
    )
}