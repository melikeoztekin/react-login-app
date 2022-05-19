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
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

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
                            <TableCell align="center"></TableCell>
                            <TableCell align="center">User Name</TableCell>
                            <TableCell align="center">User Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.usersList.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center">
                                    <ImageListItem cols={3} gap={8}>
                                        <img
                                            src={`${row.avatar}?w=161&fit=crop&auto=format`}
                                            srcSet={`${row.avatar}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                            alt=""
                                        />
                                    </ImageListItem>
                                </TableCell>
                                <TableCell align="center">{row.first_name} {row.last_name}</TableCell>
                                <TableCell align="center">{row.email}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
}
export { Userlist };