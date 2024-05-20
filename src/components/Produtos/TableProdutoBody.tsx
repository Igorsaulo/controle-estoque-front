import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { visuallyHidden } from '@mui/utils';
import { styled } from '@mui/material/styles';
import { FormControl, Input, Pagination } from '@mui/material';
import { makeStyles } from '@mui/styles';

type Produto = {
    id: number;
    nome: string;
    preco: number;
    quantidade: number;
};

const produtosData : Produto[] = [
    { id: 1, nome: 'Produto 1', preco: 10.0, quantidade: 1 },
    { id: 2, nome: 'Produto 2', preco: 20.0 , quantidade: 2},
    { id: 3, nome: 'Produto 3', preco: 30.0 , quantidade: 3},
    { id: 4, nome: 'Produto 4', preco: 40.0 , quantidade: 4},
    { id: 5, nome: 'Produto 5', preco: 50.0 , quantidade: 5},
    { id: 6, nome: 'Produto 6', preco: 60.0 , quantidade: 6},
    { id: 7, nome: 'Produto 7', preco: 70.0 , quantidade: 7},
    { id: 8, nome: 'Produto 8', preco: 80.0 , quantidade: 8},
    { id: 9, nome: 'Produto 9', preco: 90.0 , quantidade: 9},
    { id: 10, nome: 'Produto 10', preco: 100.0 , quantidade: 10},
    { id: 11, nome: 'Produto 11', preco: 110.0 , quantidade: 11},
    { id: 12, nome: 'Produto 12', preco: 120.0 , quantidade: 12},
    { id: 13, nome: 'Produto 13', preco: 130.0 , quantidade: 13},
    { id: 14, nome: 'Produto 14', preco: 140.0 , quantidade: 14},
    { id: 15, nome: 'Produto 15', preco: 150.0 , quantidade: 15},
    { id: 16, nome: 'Produto 16', preco: 160.0 , quantidade: 16},
    { id: 17, nome: 'Produto 17', preco: 170.0 , quantidade: 17},
    { id: 18, nome: 'Produto 18', preco: 180.0 , quantidade: 18},
    { id: 19, nome: 'Produto 19', preco: 190.0 , quantidade: 19},
    { id: 20, nome: 'Produto 20', preco: 200.0 , quantidade: 20},
    ];

export function TableProdutoHead(){
    return (
        <TableHead>
            <TableRow>
                <TableCell>
                    <TableSortLabel>
                        Nome
                    </TableSortLabel>
                </TableCell>
                <TableCell>
                    <TableSortLabel>
                        Preço
                    </TableSortLabel>
                </TableCell>
                <TableCell>
                    <TableSortLabel>
                        Quantidade
                    </TableSortLabel>
                </TableCell>
            </TableRow>
        </TableHead>
    );
}

export function TableProdutoBody({produtos} : {produtos: Produto[]}){
    return (
        <TableBody>
            {produtos.map((produto : Produto) => (
                <TableRow key={produto.id}>
                    <TableCell>{produto.nome}</TableCell>
                    <TableCell>{produto.preco}</TableCell>
                    <TableCell>{produto.quantidade}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
}

export function TableProduto(){
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [produtos, setProdutos] = React.useState(produtosData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage));

    const handleChangePage = (event: unknown, newPage: number) => {
        console.log("newPage", newPage);
        newPage -= 1;
        setPage(newPage);
        setProdutos(produtosData.slice(newPage * rowsPerPage, newPage * rowsPerPage + rowsPerPage));
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    React.useEffect(() => {
        console.log("produtos", produtos);
        console.log("page", page);
        console.log("rowsPerPage", rowsPerPage);
    }
    , [produtos, page, rowsPerPage]);
    return (
        <TableContainer style={{margin:"20px", padding:"20px", maxWidth:"calc(80vw - 20px)"}} component={Paper}>
            <Input placeholder="Pesquisar" />
            <Table>
                <TableProdutoHead />
                <TableProdutoBody produtos={produtos} />
                <Pagination
                    count={Math.ceil(produtosData.length / rowsPerPage)}
                    page={page + 1}
                    onChange={handleChangePage}
                    style={{margin:"20px"}}
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Table>
        </TableContainer>
    );
}
