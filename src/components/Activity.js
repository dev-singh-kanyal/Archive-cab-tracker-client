import React from 'react'
import Layoutcomponent from '../layout/layoutcomponent'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import noResults from '../media/noresults.jpg'

function createData(source,destination,travelled) {
  return { source, destination, travelled};
}

const rows = [
  createData('IOCL GHY', 'DIGBOI',104),
  createData('NOONMATI', 'IOCL', 4),
  createData('DEMO', 'DEMO2', 35),
]; 

let activity=null;

export function Activity() {
  return (
    <>
        <Layoutcomponent>

        {
          activity ? <>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 300,marginTop:15 }} aria-label="simple table">
                <TableHead>
                    <TableRow sx={{background:"#50C878", boxShadow:"2px solid black"}}>
                        <TableCell align="center" sx={{fontWeight:"bold"}}>
                            SOURCE
                        </TableCell>
                        <TableCell align="center" sx={{fontWeight:"bold"}}>
                            DESTINATION
                        </TableCell>
                        <TableCell align="center" sx={{fontWeight:"bold"}}>
                            DISTANCE
                        </TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.source}
                            sx={{ '&:last-child td, &:last-child th':
                                { border: 0 } }}
                        >
                            <TableCell align="center">
                                {row.source}
                            </TableCell>
                            <TableCell align="center">
                                {row.destination}
                            </TableCell>
                            <TableCell align="center">
                                {row.travelled}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
          </>
          : <>
            <div style={{display:"flex",justifyContent:"center",alignItems:"baseline",paddingTop:"100px"}}>
              <img src={noResults} style={{width:"auto",height:"400px"}}></img>
            </div>
          </>
        }
        
        </Layoutcomponent>
    </>
  )
}

export default Activity
 