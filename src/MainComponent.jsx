import React, { useState, useEffect } from 'react';
import CategorySelector from './components/CategorySelector/CategorySelector';
import ContentDisplay from './components/ContentDisplay/ContentDisplay';
import { fetchArticles } from './api'; // Your API call

export default function MainComponent() {
    const [activeCategory, setActiveCategory] = useState('TODOS');
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchAndSetArticles = async () => {
            try {
                // Pass the activeCategory to the API call.
                // If 'TODOS' is selected, fetch all articles (or handle accordingly in the function).
                const articles = await fetchArticles(activeCategory === 'TODOS' ? '' : activeCategory);
                setItems(articles);
            } catch (error) {
                console.error('Failed to fetch articles:', error);
            }
        };

        fetchAndSetArticles();
    }, [activeCategory]); // The effect will re-run when activeCategory changes.


    return (
        <>
            <CategorySelector activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
            <ContentDisplay items={items} />
            {/* Other components */}
        </>
    );
}



