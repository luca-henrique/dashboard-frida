import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
} from '@mui/material/';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export const ListMenuDrawer = () => {
  return (
    <List>
      {['Inbox'].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
