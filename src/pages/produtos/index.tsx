import { TableProduto } from "../../components/Produtos/TableProdutoBody";
import { Typography, Box } from "@mui/material";
import { useTheme } from '@mui/material/styles';

export function Produtos() {
    const theme = useTheme();

    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            color={theme.palette.primary.contrastText}
        >
            <Typography
                variant={'h1'}
                margin={'1rem'}
                fontSize={'2rem'}
            >
                Produtos
            </Typography>
            <TableProduto />
        </Box>
    );
}