// CategorySelector.jsx

import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box';
import styles from './CategorySelector.module.scss';

const CategorySelector = ({ activeCategory, setActiveCategory }) => {
    const categories = ['TODOS', 'PRODUCTOS', 'RECETAS', 'CONSEJOS'];

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        // The actual fetching is handled by the MainComponent's useEffect
    };

    return (
        <Box className={styles.navBar}>
            <List component="nav" aria-label="mailbox folders">
                {categories.map((category) => (
                    <ListItemButton
                        key={category}
                        selected={activeCategory === category}
                        onClick={() => handleCategoryChange(category)}
                    >
                        <ListItemText primary={
                            <Typography
                                variant="caption"
                                color={activeCategory === category ? 'primary' : 'secondaryColor'}
                                sx={{ fontWeight: activeCategory === category ? 700 : 400 }}
                            >
                                {category}
                            </Typography>
                        } />
                        {activeCategory === category && (
                            <ListItemIcon>
                                <ArrowForwardIcon color='primary' />
                            </ListItemIcon>
                        )}
                    </ListItemButton>
                ))}
            </List>
        </Box >
    );
};

export default CategorySelector;

