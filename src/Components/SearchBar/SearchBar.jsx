import { IconButton, Paper } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    return (
        <Paper
            component="form"
            onSubmit={() => {}}
            sx={
                {
                    borderRadius: 5 ,
                    border: '1px solid gray',
                    pl:2,
                    boxShadow: 'none', 
                    mr: {sm:10}
                }
            }
        >
            <input type="text" 
                className='search-bar'
                placeholder='Search...'
                value=""
                onChange={() => {}}
            />
            <IconButton type='submit' sx={{ p: '8px' , color : 'red'}}>
                <SearchIcon></SearchIcon>
            </IconButton>
            
        </Paper>
    );
};

export default SearchBar;