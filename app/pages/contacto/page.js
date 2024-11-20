"use client";
import ContactForm from "@/app/components/ContactForm";
export default function Contacto() {
    return (
        <div className="container">
            <div className="row">
                <h1>Contactanos!</h1>
            </div>
            <div className="row">
                <h4 style={{ textAlign: 'center' }}>Nos encantaria recibir tu opinion!</h4>
            </div>
            <ContactForm />
        </div>
    );
}
