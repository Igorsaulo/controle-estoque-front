import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import {  Input, Pagination } from '@mui/material';
import { useGetProdutos } from '../../queries/podutos/useGetProdutos';

type Produto = {
    id: number;
    name: string;
    price: number;
    stock: number;
};


export function TableProdutoHead() {
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

export function TableProdutoBody({ produtos }: { produtos: Produto[] }) {
    React.useEffect(() => {
        console.log("produtos", produtos);
    }, [produtos]);
    return (
        <TableBody>
            {produtos.map((produto: Produto) => (
                <TableRow key={produto.id}>
                    <TableCell>{produto.name}</TableCell>
                    <TableCell>{produto.price}</TableCell>
                    <TableCell>{produto.stock}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
}

export function TableProduto() {
    const [page, setPage] = React.useState(1);
    const [search, setSearch] = React.useState<string>("");
    const { isLoading, isError, isSuccess, data, refetch } = useGetProdutos({ page, search, });

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    React.useEffect(() => {
        refetch();
        console.log("page", page);
    }, [page]);

    const handleSearch = (e : React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        setPage(1);
        page !== 1 && refetch();
        console.log("search", search);
    }

    return (
        <>
            <TableContainer style={{ margin: "20px", padding: "20px", maxWidth: "calc(78.5vw - 20px)" }} component={Paper}>
                <Input placeholder="Pesquisar" value={search} onSubmit={handleSearch} onChange={handleSearch} />
                <Table>
                    <TableProdutoHead />
                    {isLoading && <Typography>Carregando...</Typography>}
                    {isError && <Typography>Ocorreu um erro ao carregar os produtos</Typography>}
                    {
                        isSuccess && data && (
                            <>
                                <TableProdutoBody produtos={data.results} />
                                <Pagination
                                    count={Math.ceil(data?.count / 10)}
                                    page={page}
                                    onChange={handleChangePage}
                                    style={{ margin: "20px" }}
                                />
                            </>
                        )
                    }
                </Table>
            </TableContainer>
        </>
    );
}
