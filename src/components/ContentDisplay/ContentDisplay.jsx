// src/components/ContentDisplay/ContentDisplay.jsx
import React from 'react';
import ContentCard from './ContentCard'; // Import the new card component
import styles from './ContentDisplay.module.scss';

const ContentDisplay = ({ items }) => {
    return (
        <div className={styles.contentDisplay}>
            {items.map((item) => (
                <ContentCard key={item.id} item={item} />
            ))}
        </div>
    );
};

export default ContentDisplay;
