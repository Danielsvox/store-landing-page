// src/components/ContentCard/ContentCard.jsx
import React from 'react';
import styles from './ContentCard.module.scss';

const ContentCard = ({ item }) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardActionArea}>
                <img src={item.image} alt={item.title} className={styles.cardMedia} />
                <div className={styles.cardContent}>
                    <h2 className={styles.cardTitle}>{item.title}</h2>
                    <p className={styles.cardText}>{item.content}</p>
                </div>
            </div>
            <div className={`${styles.cardHover} ${styles.hidden}`}>
                <p>VER MÁS</p>
            </div>
        </div>
    );
};

export default ContentCard;
