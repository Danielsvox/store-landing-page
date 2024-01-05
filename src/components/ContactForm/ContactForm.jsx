import React, { useState } from 'react';
import styles from './ContactForm.module.scss'; // Import SCSS module
import { sendContactForm } from '../../api'; // Import the API function

const ContactForm = () => {
    // State to store form field values
    const [formValues, setFormValues] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
    });

    // State to store validation errors
    const [errors, setErrors] = useState({});

    // State to store the API response message
    const [responseMessage, setResponseMessage] = useState(null);

    // Function to validate form
    const validateForm = () => {
        let tempErrors = {};
        if (!formValues.name) tempErrors.name = "Name is required.";
        if (!formValues.surname) tempErrors.surname = "Surname is required.";
        if (!formValues.email) tempErrors.email = "Email is required.";
        if (!formValues.phone) tempErrors.phone = "Phone is required.";
        // Add more validation rules here
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validateForm()) return; // Stop submission if validation fails

        try {
            const response = await sendContactForm(formValues);
            setResponseMessage({ type: 'success', text: 'Form submitted successfully!' });
            // Clear form values
            setFormValues({
                name: '',
                surname: '',
                email: '',
                phone: '',
            });
        } catch (error) {
            setResponseMessage({ type: 'error', text: `Error: ${error.message}` });
        }
    };

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    return (
        <form className={styles['contact-form']} onSubmit={handleSubmit}>
            {/* Display alert message if responseMessage is set */}
            {responseMessage && (
                <div className={`${styles['contact-form__alert']} ${styles[responseMessage.type]}`}>
                    {responseMessage.text}
                </div>
            )}
            <div className={styles['contact-form__row']}>
                <input
                    type="text"
                    id="name    "
                    name="name"
                    placeholder="Nombre"
                    value={formValues.name}
                    onChange={handleInputChange}
                    className={styles['contact-form__field']}
                    required
                />
                {errors.name && <div className={styles['contact-form__error']}>{errors.name}</div>}
            </div>
            <div className={styles['contact-form__row']}>
                <input
                    type="text"
                    id="surname"
                    name="surname"
                    placeholder="Apellido"
                    value={formValues.surname}
                    onChange={handleInputChange}
                    className={styles['contact-form__field']}
                    required
                />
                {errors.surname && <div className={styles['contact-form__error']}>{errors.surname}</div>}
            </div>
            <div className={styles['contact-form__row']}>
                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formValues.email}
                    onChange={handleInputChange}
                    className={styles['contact-form__field']}
                    required
                />
                {errors.email && <div className={styles['contact-form__error']}>{errors.email}</div>}
            </div>
            <div className={styles['contact-form__row']}>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Teléfono"
                    value={formValues.phone}
                    onChange={handleInputChange}
                    className={styles['contact-form__field']}
                    required
                />
                {errors.phone && <div className={styles['contact-form__error']}>{errors.phone}</div>}
            </div>
            <div className={styles['contact-form__row']}>
                <button
                    type="submit"
                    className={styles['contact-form__button']}
                >
                    Enviar
                </button>
            </div>
        </form>
    );
};

export default ContactForm;

