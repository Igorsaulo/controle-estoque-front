import { TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";

export default function TableHeadComponent({ labels }: { labels: string[] }) {
    return (
        <TableHead>
            <TableRow>
                {labels.map((label) => (
                    <TableCell key={label}>
                        <TableSortLabel>
                            {label}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}