import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  TextField,
  Card,
  CardContent,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Snackbar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@mui/material";

function App() {
  const [openSnack, setOpenSnack] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleSnack = () => setOpenSnack(true);
  const handleDialog = () => setOpenDialog(true);

  return (
    <div>
      {/* AppBar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">MUI Components Demo</Typography>
        </Toolbar>
      </AppBar>

      <Container style={{ marginTop: "20px" }}>
        {/* Typography */}
        <Typography variant="h4" gutterBottom>
          Welcome to Material UI Example
        </Typography>

        {/* TextField */}
        <TextField label="Enter Name" variant="outlined" fullWidth />

        {/* Buttons */}
        <div style={{ marginTop: "20px" }}>
          <Button variant="contained" onClick={handleSnack}>Show Snackbar</Button>
          <Button variant="outlined" style={{ marginLeft: "10px" }} onClick={handleDialog}>
            Open Dialog
          </Button>
        </div>

        {/* Card */}
        <Card style={{ marginTop: "20px" }}>
          <CardContent>
            <Typography variant="h6">This is a Card</Typography>
            <Typography color="textSecondary">
              Cards are used to group related data.
            </Typography>
          </CardContent>
        </Card>

        {/* Grid Layout */}
        <Grid container spacing={2} style={{ marginTop: "20px" }}>
          <Grid item xs={6}>
            <Card>
              <CardContent>Grid Item 1</CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardContent>Grid Item 2</CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Table */}
        <Table style={{ marginTop: "20px" }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>John</TableCell>
              <TableCell>22</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Emma</TableCell>
              <TableCell>20</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        {/* Snackbar */}
        <Snackbar
          open={openSnack}
          autoHideDuration={2000}
          onClose={() => setOpenSnack(false)}
          message="This is Snackbar!"
        />

        {/* Dialog */}
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <DialogTitle>Dialog Box</DialogTitle>
          <DialogContent>
            <Typography>This is a dialog example.</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)}>Close</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </div>
  );
}

export default App;
