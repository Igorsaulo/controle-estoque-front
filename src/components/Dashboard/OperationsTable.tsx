import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    styled
} from '@mui/material';

const HeadCell = styled(TableCell)(({ theme }) => ({
    borderBottom: 'none',
    color: "#e5e5e5",
    fontSize: "16px"
}));

const BodyCell = styled(TableCell)(({ theme }) => ({
    borderBottom: 'none',
    color: "#c9c9c9",
    fontSize: "14px"
}));

const StickyTableHead = styled(TableHead)({
    position: "sticky",
    top: 0,
    zIndex: 1,
    backgroundColor: "#282828",
  });


const TableContainerStyled = styled(TableContainer)(({ theme }) => ({
    borderRadius: '10px',
    backgroundColor: '#282828',
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
]

export function OperationsTable() {
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
                    {data.map((row) => (
                        <TableRow>
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
    )
}