import { Box, Stack } from '@mui/material';
import React from 'react';

const Videos = ({ Videos }) => 
{
    return (
        <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
            {Videos.map((item , idx) => {
                <Box key={{idx}}>
                    
                </Box>
            })}            
        </Stack>
    );
};

export default Videos;