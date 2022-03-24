import React from "react";
import SEO from "../componenents/seo";
import Header from "../componenents/header";
import Body from "../componenents/containers/body";
import Footer from "../componenents/footer";
import ContactForm from "../componenents/contact/contact-form";
import polarBearPicture from "../images/polar-bear-1.jpg";
import * as styles from "../componenents/contact/contact-page.module.css";

export default function ContactPage() {
    return (
        <div>
            <SEO
                title="Contact"
                description="Contact Me!"
                pathname="contact"
            />
            <Header />
            <Body backgroundColor="#329bea">
                <div className={styles.container}>
                    <ContactForm />
                    <img src={polarBearPicture} alt="a polar bear" className={styles.picture} />
                </div>
            </Body>
            <Footer />
        </div>

    );
}
