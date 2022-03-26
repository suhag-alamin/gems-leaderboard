import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';

const tableData = [
    {id:  '1',time: '22/03/2022', walletAddress: '02XK469976DXZ00174CAE43007218', amount: '300 USDT'},
    {id:  '2',time: '22/03/2022', walletAddress: '02XK469976DXZ00174CAE43007218', amount: '300 USDT'},
    {id:  '3',time: '22/03/2022', walletAddress: '02XK469976DXZ00174CAE43007218', amount: '300 USDT'},
    {id:  '4',time: '22/03/2022', walletAddress: '02XK469976DXZ00174CAE43007218', amount: '300 USDT'},
    {id:  '5',time: '22/03/2022', walletAddress: '02XK469976DXZ00174CAE43007218', amount: '300 USDT'},
    {id:  '6',time: '22/03/2022', walletAddress: '02XK469976DXZ00174CAE43007218', amount: '300 USDT'},
    {id:  '7',time: '22/03/2022', walletAddress: '02XK469976DXZ00174CAE43007218', amount: '300 USDT'},
    {id:  '8',time: '22/03/2022', walletAddress: '02XK469976DXZ00174CAE43007218', amount: '300 USDT'},
    {id:  '9',time: '22/03/2022', walletAddress: '02XK469976DXZ00174CAE43007218', amount: '300 USDT'},
    {id:  '10',time: '22/03/2022', walletAddress: '02XK469976DXZ00174CAE43007218', amount: '300 USDT'},
    {id:  '11',time: '22/03/2022', walletAddress: '02XK469976DXZ00174CAE43007218', amount: '300 USDT'},
    {id:  '12',time: '22/03/2022', walletAddress: '02XK469976DXZ00174CAE43007218', amount: '300 USDT'},
    {id:  '13',time: '22/03/2022', walletAddress: '02XK469976DXZ00174CAE43007218', amount: '300 USDT'},
    {id:  '14',time: '22/03/2022', walletAddress: '02XK469976DXZ00174CAE43007218', amount: '300 USDT'},
    {id:  '15',time: '22/03/2022', walletAddress: '02XK469976DXZ00174CAE43007218', amount: '300 USDT'},
    {id:  '16',time: '22/03/2022', walletAddress: '02XK469976DXZ00174CAE43007218', amount: '300 USDT'},
    {id:  '17',time: '22/03/2022', walletAddress: '02XK469976DXZ00174CAE43007218', amount: '300 USDT'},
    {id:  '18',time: '22/03/2022', walletAddress: '02XK469976DXZ00174CAE43007218', amount: '300 USDT'},
    {id:  '19',time: '22/03/2022', walletAddress: '02XK469976DXZ00174CAE43007218', amount: '300 USDT'},
    {id:  '20',time: '22/03/2022', walletAddress: '02XK469976DXZ00174CAE43007218', amount: '300 USDT'},
    {id:  '21',time: '22/03/2022', walletAddress: '02XK469976DXZ00174CAE43007218', amount: '300 USDT'},
    {id:  '22',time: '22/03/2022', walletAddress: '02XK469976DXZ00174CAE43007218', amount: '300 USDT'},
    {id:  '22',time: '22/03/2022', walletAddress: '02XK469976DXZ00174CAE43007218', amount: '300 USDT'},
]

const WalletTable = () => {
    return (
        <div>
            <Container sx={{py:6}}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 350, backgroundColor: '#1f1a6b', padding:10 }} aria-label="simple table">
                        <TableHead sx={{bgcolor: '#1e33a1', borderRadius:'50px !important', boxShadow:3}}>
                            <TableRow>
                                <TableCell>Time</TableCell>
                                <TableCell align="right">Wallet Address</TableCell>
                                <TableCell align="right">Amount</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableData.map((data) => (
                                <TableRow
                                hover
                                key={data.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {data.time}
                                </TableCell>
                                <TableCell align="right">{data.walletAddress}</TableCell>
                                <TableCell align="right">{data.amount}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    );
};

export default WalletTable;