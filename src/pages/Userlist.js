import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Userlist = (props) => {
    return (
        <Grid>
            <Typography variant="h2" gutterBottom component="div" style={{ textAlign: "center" }}>
                Users List
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 200 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">User ID</TableCell>
                            <TableCell align="right">User Name</TableCell>
                            <TableCell align="right">User Email</TableCell>
                            <TableCell align="right">User Password</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.usersList.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="right">{row.id}</TableCell>
                                <TableCell align="right">{row.name_surname}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.password}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
}
export { Userlist };