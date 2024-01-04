import React, { useState } from 'react';
import { Box, TextField, Button, Grid, Alert } from '@mui/material';
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

    // State to store the API response message
    const [responseMessage, setResponseMessage] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await sendContactForm(formValues);
            setResponseMessage({ type: 'success', text: 'Form submitted successfully!' });
            // Clear form values if needed
            setFormValues({
                name: '',
                surname: '',
                email: '',
                phone: '',
            });
        } catch (error) {
            setResponseMessage({ type: 'error', text: `Error: ${error.message}` });
            setFormValues({
                name: '',
                surname: '',
                email: '',
                phone: '',
            });
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
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 8 }} className={styles['contact-form']}>
            {/* Display alert message if responseMessage is set */}
            {responseMessage && (
                <Alert severity={responseMessage.type} sx={{ mb: 2 }}>
                    {responseMessage.text}
                </Alert>
            )}
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        id="nombre"
                        label="Nombre"
                        name="nombre"
                        value={formValues.nombre}
                        onChange={handleInputChange}
                        className={styles['contact-form__field']} // Apply class from SCSS module
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        id="apellido"
                        label="Apellido"
                        name="apellido"
                        value={formValues.apellido}
                        onChange={handleInputChange}
                        className={styles['contact-form__field']} // Apply class from SCSS module
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        value={formValues.email}
                        onChange={handleInputChange}
                        className={styles['contact-form__field']} // Apply class from SCSS module
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        id="telefono"
                        label="Teléfono"
                        name="telefono"
                        value={formValues.telefono}
                        onChange={handleInputChange}
                        className={styles['contact-form__field']} // Apply class from SCSS module
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        type="submit"
                        variant="contained"
                        className={styles['contact-form__button']} // Apply class from SCSS module
                    >
                        Enviar
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ContactForm;
