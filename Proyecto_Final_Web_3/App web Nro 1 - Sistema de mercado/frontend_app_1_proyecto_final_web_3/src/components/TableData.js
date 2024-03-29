import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


export default function TableData(props) {
    const { data, header } = props;
    const classes = useStyles();


    const rows = data;

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {header.map((h) => (
                            <TableCell component="th" scope="row">{h}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow onClick={() => {
                            if(!props.onSelect) return;
                            props.onSelect(row)
                        }} >
                            {header.map((h) => (
                                <TableCell component="th" scope="row">{row[h]}</TableCell>
                            ))}
                        </TableRow>
                    ))}

                </TableBody>
            </Table>
        </TableContainer>
    );
}