import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface ModalConfirmProps {
  tittle: string;
  description: string;
  openModal: boolean;
  actionConfirm: () => void;
  actionCancel: () => void;
}

const ModalConfirm: React.FC<ModalConfirmProps> = ({ tittle, description, openModal, actionCancel, actionConfirm }) => {
  const handleClose = () => {
    actionCancel();
  };

  return (
    <Dialog
      open={openModal}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{tittle}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">{description}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={actionConfirm} autoFocus>
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalConfirm;
