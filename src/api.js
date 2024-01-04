// src/api.js
const BASE_API_URL = 'https://5eed24da4cbc340016330f0d.mockapi.io/api';

function titleCase(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

// Function to send the contact form data (POST request) for newsletter subscription
export const sendContactForm = async (formData) => {
    const url = new URL('/newsletter', BASE_API_URL);
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstname: formData.name,
                lastname: formData.surname,
                email: formData.email,
                phone: formData.phone,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error in sending contact form:', error);
        throw error;
    }
};

// Function to fetch articles (GET request), optionally filtered by category
export const fetchArticles = async (category = '') => {
    const url = new URL('/articles', BASE_API_URL);
    if (category) {
        console.log(titleCase(category));
        url.searchParams.append('filter', titleCase(category));
    }
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const articles = await response.json();
        return articles;
    } catch (error) {
        console.error('Error in fetching articles:', error);
        throw error;
    }
};
