import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "blue",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  

function Members() {
    const [loading, setLoading ] = useState("load")
    console.log(loading)
    const [ data, setData ] = useState([])
    useEffect(() => {
        const apiCall = async () => {
            try {
                setLoading("loading")
                const result = await axios.get('https://fakerapi.it/api/v1/persons?_quantity=10')
                setLoading("loaded")
                console.log(result.data.data)
                setData(result.data.data)
            }catch(err) {
                console.error(err)
            }
        }
        apiCall();
    }, [])
    return ( 
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Full Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Phone Number</StyledTableCell>
            <StyledTableCell align="right">Gender</StyledTableCell>
            <StyledTableCell >Image</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {`${row.firstname} ${row.lastname}`}
              </StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.phone}</StyledTableCell>
              <StyledTableCell align="right">{row.gender}</StyledTableCell>
              <img style={{height: "50px", width: "50px", borderRadius: "50%", marginLeft: "15px"}} src={`${row.image}.png`} alt="members"/>
              
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
     );
}

export default Members;