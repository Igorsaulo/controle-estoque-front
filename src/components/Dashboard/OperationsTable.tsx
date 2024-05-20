import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    styled
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const HeadCell = styled(TableCell)(({ theme }) => ({
    borderBottom: 'none',
    fontSize: "16px",
}));

const BodyCell = styled(TableCell)(({ theme }) => ({
    borderBottom: 'none',
    fontSize: "14px",
}));

const TableContainerStyled = styled(TableContainer)(({ theme }) => ({
    backgroundColor:`${theme.palette.background.default}`,
    borderRadius: '10px',
    height: '100%',
    width: '100%',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
        width: '5px',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: '6px',
    },
    '&::-webkit-scrollbar-track': {
        backgroundColor: 'transparent',
    },
}));

const data = [
    {
        date: '10/10/2021',
        description: 'Reunião com o cliente',
        type: 'entrada',
        value: 'R$ 100,00'
    },
    {
        date: '10/10/2021',
        description: 'Reunião com o cliente',
        type: 'entrada',
        value: 'R$ 100,00'
    },
    {
        date: '10/10/2021',
        description: 'Reunião com o cliente',
        type: 'entrada',
        value: 'R$ 100,00'
    },
    {
        date: '10/10/2021',
        description: 'Reunião com o cliente',
        type: 'entrada',
        value: 'R$ 100,00'
    },
    {
        date: '10/10/2021',
        description: 'Reunião com o cliente',
        type: 'entrada',
        value: 'R$ 100,00'
    },
    {
        date: '10/10/2021',
        description: 'Reunião com o cliente',
        type: 'entrada',
        value: 'R$ 100,00'
    },
    {
        date: '10/10/2021',
        description: 'Reunião com o cliente',
        type: 'entrada',
        value: 'R$ 100,00'
    },
    {
        date: '10/10/2021',
        description: 'Reunião com o cliente',
        type: 'entrada',
        value: 'R$ 100,00'
    },
];

export function OperationsTable() {
    const theme = useTheme();

    const StickyTableHead = styled(TableHead)({
        position: "sticky",
        top: 0,
        zIndex: 1,
        backgroundColor: theme.palette.secondary.light // Accessing theme inside the component
    });

    return (
        <TableContainerStyled>
            <Table>
                <StickyTableHead>
                    <TableRow>
                        <HeadCell>
                            Data
                        </HeadCell>
                        <HeadCell>
                            Descrição
                        </HeadCell>
                        <HeadCell>
                            Tipo
                        </HeadCell>
                        <HeadCell>
                            Valor
                        </HeadCell>
                    </TableRow>
                </StickyTableHead>
                <TableBody>
                    {data.map((row, index) => (
                        <TableRow key={index}>
                            <BodyCell>
                                {row.date}
                            </BodyCell>
                            <BodyCell>
                                {row.description}
                            </BodyCell>
                            <BodyCell>
                                {row.type}
                            </BodyCell>
                            <BodyCell>
                                {row.value}
                            </BodyCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainerStyled>
    );
}

export default OperationsTable;
