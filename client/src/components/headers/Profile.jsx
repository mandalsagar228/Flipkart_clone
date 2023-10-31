import { Typography, Menu, MenuItem, Box, styled } from "@mui/material";
import { useState } from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const Component = styled(Menu)`
  margin: 5px;
`;
const LogoutMenu = styled(Typography)`
  font-size: 14px;
  margin-left: 20px;
`;

const Profile = ({ account, setAccount }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const Logout = () => {
    setAccount("");
  };

  return (
    <>
      <Box onClick={handleClick}>
        <Typography style={{ cursor: "pointer" }}>{account}</Typography>
      </Box>

      <Component anchorEl={open} open={open} onClose={handleClose}>
        <MenuItem
          onClick={() => {
            handleClose();
            Logout();
          }}
        >
          <PowerSettingsNewIcon color="primary" />
          <LogoutMenu>Logout</LogoutMenu>
        </MenuItem>
      </Component>
    </>
  );
};
export default Profile;
