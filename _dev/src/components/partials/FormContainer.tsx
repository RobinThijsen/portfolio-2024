import { useRef, useState } from "react"
import emailjs from '@emailjs/browser'

import { Magnetic } from "../Magnetic.tsx"

export const FormContainer = () => {
    const form = useRef()

    const sendEmail = (e: any) => {
        e.preventDefault()
        let target = e.target

        if (e.target.toString() == "[object HTMLSpanElement]") {
            target = e.target.parentElement
        }

        if (!target.classList.contains('js-active')) {
            target.classList.add('js-active')
        }

        emailjs.sendForm('service_6pj428a', 'template_je2fcil', form.current, 'oqrTqVziPb3Bce_Rf')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return <section className="formContainer">
        <p>
                If you're interested in my services, if you're looking for a web developer full-stack<br />
                or if you just want to write to me, you can contact me using this form.
        </p>
        <form ref={ form } onSubmit={ sendEmail }>
            <fieldset>
                <input id="surname" type="text" name="user_surname" placeholder="Surname" />
                <input id="name" type="text" name="user_name" placeholder="Name" />
            </fieldset>
            <fieldset>
                <input id="email" type="email" name="user_email" placeholder="Email" />
            </fieldset>
            <fieldset>
                <textarea id="message" name="message" placeholder="Message"></textarea>
            </fieldset>
            <Magnetic>
                <button type="submit" id="sendEmail" className="button button--white">
                    <span>
                        Send
                    </span>
                </button>
            </Magnetic>
        </form>
    </section>
}