import * as React from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Button, Input, Pagination } from '@mui/material';
import { useGetProdutos } from '../../queries/podutos/useGetProdutos';
import { ProdutoCadastro } from './CadastroProdutoModal';
import ProdutoTableHead from '../atomic/table/TableHead';
import TableProdutoBody from '../atomic/table/TableBody';


export function TableProduto() {
    const [page, setPage] = React.useState(1);
    const [search, setSearch] = React.useState<string>("");
    const { isLoading, isError, isSuccess, data, refetch } = useGetProdutos({ page, search, });

    const handleChangePage = (_event: unknown, newPage: number) => {
        setPage(newPage);
    };

    React.useEffect(() => {
        refetch();
    }, [page]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        setPage(1);
        page !== 1 && refetch();
        console.log("search", search);
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const labels = ["Nome", "Descrição", "Preço", "Quantidade"];


    return (
        <>
            <TableContainer style={{ margin: "20px", padding: "20px", maxWidth: "calc(78.5vw - 20px)" }} component={Paper}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Input placeholder="Pesquisar" value={search} onSubmit={handleSearch} onChange={handleSearch} />
                    <Button variant='outlined' onClick={handleClickOpen}>Cadastrar Produtos</Button>
                </div>
                <Table>
                    <ProdutoTableHead labels={labels} />
                    {isLoading && <Typography>Carregando...</Typography>}
                    {isError  && <Typography>Ocorreu um erro ao carregar os produtos</Typography>}
                    {
                        isSuccess && data && (
                            <>
                                <TableProdutoBody data={data.results} />
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
            <ProdutoCadastro open={open} handleClose={handleClose} />
        </>
    );
}
