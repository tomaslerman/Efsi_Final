"use client";
import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Aquí puedes agregar la lógica para enviar el formulario
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className="row input-container">
            <div className="col-xs-12">
                <div className="styled-input wide">
                    <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required 
                    />
                    <label className="label-contact">Name</label>
                </div>
            </div>
            <div className="col-md-6 col-sm-12">
                <div className="styled-input">
                    <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required 
                    />
                    <label className="label-contact">Email</label>
                </div>
            </div>
            <div className="col-md-6 col-sm-12">
                <div className="styled-input" style={{ float: 'right' }}>
                    <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required 
                    />
                    <label className="label-contact">Phone Number</label>
                </div>
            </div>
            <div className="col-xs-12">
                <div className="styled-input wide">
                    <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <label className="label-contact">Message</label>
                </div>
            </div>
            <div className="col-xs-12">
                <button 
                    className="btn-lrg submit-btn"
                    onClick={handleSubmit}
                >
                    Send Message
                </button>
            </div>
        </div>
    );
} 