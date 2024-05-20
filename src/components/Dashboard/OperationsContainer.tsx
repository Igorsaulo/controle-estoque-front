import {
    Grid,
    Typography,
    Box
} from '@mui/material';
import { OperationsTable } from './OperationsTable';

export function OperationsContainer() {
    return (
        <Box
            height={'60vh'}
            width={'100% - 20px'}
            borderRadius={'20px'}
            padding={'20px'}
            justifyContent={'space-between'}
            display={'flex'}
            flexDirection={'column'}
        >
            <Grid
                item
                xs={12}
                paddingBottom={'20px'}
            >
                <Typography
                    fontSize={'26px'}
                >
                    Operações
                </Typography>
            </Grid>
            <Grid
                item
                xs={12}
                height={'80%'}
            >
                <OperationsTable />
            </Grid>
        </Box>
    )
}