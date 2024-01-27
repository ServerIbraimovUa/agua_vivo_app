import * as React from 'react';
import { useState } from "react";
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
// import signInLogo from "../../../img/Sign_in_def_logo.svg"
import arrow from "../../../img/arrow_down.svg"
import SettingModal from '../SettingModal/SettingModal';
import Modal from "../../Modal/Modal";


const UserLogoModal = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
const [visible, setVisible] = useState(false);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="text" onClick={handleClick}>
        User name
        <Stack direction="row" spacing={2}>
          {/* <img src={signInLogo} alt="default_logo" width="28" height="28" /> */}
      <Avatar sx={{ width: 28, height: 28 }}>H</Avatar>
     <img src={arrow} alt="default_logo" width="11" height="6" />
    </Stack>
        
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Button onClick={() => setVisible(true)}>Settings</Button>
        {visible && (
        <Modal setVisible={setVisible} title="Setting">
          <SettingModal />
        </Modal>
      )}
        <br />
        <Button>Log out</Button>
        
      </Popover>
    </div>
  );
}

// const UserLogoModal = () => {
//   return (
//     <div>
//           Settings
//           Log Out button
//     </div>
//   );
// }

export default UserLogoModal;
