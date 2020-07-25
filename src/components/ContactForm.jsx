import React from 'react'
import '../public/css/contact.css'
const ContactForm = () => {
    return (
        <section id="contact-form">
            <form>
                <div class="form-group">
                    <label for="form-name">Nombre</label>
                    <input type="text" class="form-control" id="form-name" />
                </div>
                <div class="form-group">
                    <label for="form-email">Email</label>
                    <input type="text" class="form-control" id="form-email" aria-describedby="emailHelp" />
                </div>
                <div class="form-group">
                    <label for="form-message">Mensaje</label>
                    <textarea type="text" class="form-control" id="form-message" placeholder="Ingrese su mensaje aquí">

                    </textarea>
                </div>
                
                <button type="submit" class="btn btn-primary">Enviar</button>
            </form>
        </section>
    )
}

export default ContactForm
