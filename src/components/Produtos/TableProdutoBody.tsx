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
import { Button, FormControl, Grid, Input, Pagination } from '@mui/material';
import { useGetProdutos } from '../../queries/podutos/useGetProdutos';
import Modal from '@mui/material/Modal'; 
type Produto = {
    id: number;
    name: string;
    price: number;
    stock: number;
};

export default function ProdutoCadastro({ open, handleClose }: { open: boolean, handleClose: () => void }) {
    return (
            <Modal open={open} onClose={handleClose}>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, backgroundColor:"#ffff", padding:"20px", borderRadius:"5px" }}>
                    <Typography variant="h5" sx={{paddingBottom:"20px"}}>Cadastrar Produto</Typography>
                    <FormControl fullWidth style={{ display: "flex", gap: "15px" }}>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <Input placeholder="Nome" />
                            </Grid>
                            <Grid item xs={4}>
                                <Input placeholder="Preço" />
                            </Grid>
                            <Grid item xs={4}>
                                <Input placeholder="Quantidade" />
                            </Grid>
                        </Grid>
                        <Button variant="contained" style={{ marginTop: "20px" }}>Adicionar</Button>
                    </FormControl>
                </div>

            </Modal>
    );
}

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

    const handleChangePage = (_event: unknown, newPage: number) => {
        setPage(newPage);
    };

    React.useEffect(() => {
        refetch();
        console.log("page", page);
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



    return (
        <>
            <TableContainer style={{ margin: "20px", padding: "20px", maxWidth: "calc(78.5vw - 20px)" }} component={Paper}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Input placeholder="Pesquisar" value={search} onSubmit={handleSearch} onChange={handleSearch} />
                    <Button variant='outlined' onClick={ handleClickOpen }>Cadastrar Produtos</Button>
                </div>
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
            <ProdutoCadastro open={open} handleClose={handleClose} />
        </>
    );
}
