import { Stack } from '@mui/material';
import React from 'react';
import { categories } from '../Utils/Constants';

const SideBar = () => {
    return (
        <Stack direction="row"
            sx={{
                overflowY: 'auto',
                height: { sx: 'auto', md: '95%' },
                flexDirection: { md: 'column' }
            }}
        >
            {categories.map((category) => (
                <button className='category-btn'>
                    <span>{category.icon}</span>
                    <span>{category.name}</span>
                </button>
            ))}

        </Stack>
    );
};

export default SideBar;