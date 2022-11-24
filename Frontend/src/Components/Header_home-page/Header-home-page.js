import React from 'react';
import './Header-home-page.scss'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

const Header = () => {
    return (
        <AppBar position="fixed">
            <Container >
                <Toolbar disableGutters className='content-container'>
                    <div className="logo">E チケット</div>
                    <IconButton sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header