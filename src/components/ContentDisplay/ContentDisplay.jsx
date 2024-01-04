import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Grid, Box } from '@mui/material';
import styles from './ContentDisplay.module.scss';

const ContentDisplay = ({ items }) => {
    // Assuming the header is fixed and its height is known, e.g., 100px.
    return (
        <Box className={styles.contentDisplay}>
            <Grid container spacing={2} sx={{ maxWidth: 'calc(1440px - 129px - 137px)' }}>
                {items.map((item) => (
                    <Grid item key={item.id} xs={12} sm={6} md={4} lg={4}>
                        <Card sx={{ width: 270, height: 438, display: 'flex', flexDirection: 'column' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="204px"
                                    image={item.image}
                                    alt={item.title}
                                />
                                <CardContent>
                                    <Typography sx={{ fontSize: "18px", fontFamily: "Open Sans" }} >
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.content}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box >
    );
};

export default ContentDisplay;
