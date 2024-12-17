import emailjs from '@emailjs/browser';
import { Button, TextField } from "@mui/material";
import React, { useRef } from "react";
import { notify } from "../../../Utils/Notify";
import "./ContactUs.css";


export function ContactUs(): JSX.Element {

    const form = useRef<HTMLFormElement>();

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        const name = formData.get('name') as string;

        // Validation:
        if (name.length < 2 || name.length > 40) {
            notify.error("Name should be 2 - 40 characters long!");
            return;
        }
        if (name.match(/[^a-zA-Z\s]/)) {
            notify.error("Name should only contain English letters!");
            return;
        }

        emailjs
            .sendForm('SkyGlobalMail', 'template_2jhchbp', form.current, {
                publicKey: 'Ayj0JjHXjHA9KcHXe',
            })
            .then(
                () => {
                    notify.success('Thank you!<br />Message sent successfully!');
                    form.current.reset();
                },
                (err) => {
                    notify.error(err);
                }
            );
    };

    return (
        <div className="ContactUs">

            <form ref={form} onSubmit={sendEmail}>

                <TextField label="Name" name="name" required />
                <TextField label="Email" name="email" type="email" required />
                <TextField label="Message" name="message" multiline rows={4} required />

                <Button variant="contained" type="submit">Send</Button>

            </form>
        </div>
    );
}
