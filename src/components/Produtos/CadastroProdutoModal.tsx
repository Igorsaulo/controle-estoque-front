import { Button, FormControl, Grid, Input, Modal, Typography } from "@mui/material";

export function ProdutoCadastro({ open, handleClose }: { open: boolean, handleClose: () => void }) {
    return (
        <Modal open={open} onClose={handleClose}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, backgroundColor: "#ffff", padding: "20px", borderRadius: "5px" }}>
                <Typography variant="h5" sx={{ paddingBottom: "20px" }}>Cadastrar Produto</Typography>
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