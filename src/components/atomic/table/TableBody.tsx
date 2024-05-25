import { TableBody, TableCell, TableRow } from "@mui/material";

export default function TableBodyComponent({ data }: { data: any[] }) {
    return (
        <TableBody>
            {data?.map((data) => (
                <TableRow key={data.id}>
                    {Object.keys(data).map((key) => (
                        key !== 'id' && (
                            <TableCell key={key}>
                                {(data as any)[key]}
                            </TableCell>
                        )
                    ))}
                </TableRow>
            ))}
        </TableBody>
    );
}