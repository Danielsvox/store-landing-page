import React from 'react';
import styles from './CategorySelector.module.scss';
import ArrowForwardIconSvg from '../../assets/ArrowForwardIconSvg.svg'; // Import your SVG or other icon solution

const CategorySelector = ({ activeCategory, setActiveCategory }) => {
    const categories = ['TODOS', 'PRODUCTOS', 'RECETAS', 'CONSEJOS'];

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    };

    return (
        <div className={styles.navBar}>
            <ul className={styles.navList}>
                {categories.map((category) => (
                    <li
                        key={category}
                        className={`${styles.navItem} ${activeCategory === category ? styles.navItemSelected : ''}`}
                        onClick={() => handleCategoryChange(category)}
                    >
                        <span className={styles.navText}>
                            {category}
                        </span>
                        {activeCategory === category && (
                            <span className={styles.navIcon}>
                                <img src={ArrowForwardIconSvg} alt="Arrow Icon" /> {/* Use SVG as an image source */}
                            </span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategorySelector;

