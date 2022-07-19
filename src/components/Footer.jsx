import React from 'react';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';

const Footer = () => {
    const isMobile = useMediaQuery('(max-width:768px)');

    return (
        <> 
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: !isMobile ? 'space-around' : 'flex-start', padding: !isMobile ? '5rem 10rem' : '5rem 5rem', color: '#777777' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <Typography>Audio and Subtitles</Typography>
                    <Typography>Media Center</Typography>
                    <Typography>Security</Typography>
                    <Typography>Contact Us</Typography>
                    <Button sx={{ borderColor: '#777777', color: '#777777', width: 'fit-content' }} variant="outlined">Service Code</Button>
                    <Typography>&copy; 2022 Movies, All Rights Reserved</Typography>
                </Box>
                { !isMobile ? (
                    <>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <Typography>Audio Description</Typography>
                            <Typography>Investor Relations</Typography>
                            <Typography>Legal Provisions</Typography>
                            <Typography></Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <Typography>Help Center</Typography>
                            <Typography>Jobs</Typography>
                            <Typography>Cookie Preferences</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <Typography>Gift Cards</Typography>
                            <Typography>Terms of Use</Typography>
                            <Typography>Corporate Information</Typography>
                        </Box>
                    </>
                ) : null }     
            </Box>
        </>
    )
}

export default Footer;