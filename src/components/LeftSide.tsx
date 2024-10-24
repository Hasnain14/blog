import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import Groups2Icon from '@mui/icons-material/Groups2';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Box, Switch } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';


export default function LeftSide() {

    return (
        <Box flex={1} padding={2} sx={{ display: { xs: "none", sm: "block" } }}>
            <Box position="fixed">
                <List
                    sx={{
                        width: '100%',
                        maxWidth: 360,
                        bgcolor: 'background.paper',
                    }}
                    component="nav"

                >
                    <ListItemButton component="a" href='#home'>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>

                    <ListItemButton component="a" href='#home'>
                        <ListItemIcon>
                            <ArticleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Pages" />
                    </ListItemButton>

                    <ListItemButton component="a" href='#home'>
                        <ListItemIcon>
                            <Groups2Icon />
                        </ListItemIcon>
                        <ListItemText primary="Groups" />
                    </ListItemButton>

                    <ListItemButton component="a" href='#home'>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Setting" />
                    </ListItemButton>

                    <ListItemButton component="a" href='#home'>
                        <ListItemIcon>
                            <AccountBoxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItemButton>

                    <ListItemButton component="a" href='#home' >
                        <ListItemIcon>
                            <DarkModeIcon />
                        </ListItemIcon>
                        <Switch />
                    </ListItemButton>
                </List>
            </Box>
        </Box >
    );
}
