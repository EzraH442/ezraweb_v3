import React, { ChangeEvent } from 'react';
import axios from 'axios';
import * as styles from './contact-form.module.css';

type formDataType = {
        name: string,
        subject: string,
        email: string,
        message: string,
        token: string
}

type ContactFormProps = {}

type ContactFormState = {
    formData: formDataType,
    isSubmitDisabled: boolean,
}

export default class ContactForm extends React.Component<ContactFormProps, ContactFormState> {
  signal = axios.CancelToken.source();

  siteKey = '6Le1iisaAAAAAGW7-lA_PoCubVTHxxOYBJUoc83X';

  catpchaLink = 'https://www.google.com/recaptcha/api.js?render=6Le1iisaAAAAAGW7-lA_PoCubVTHxxOYBJUoc83X';

  constructor(props: any) {
    super(props);
    this.state = {
      formData: {
        name: '',
        subject: '',
        email: '',
        message: '',
        token: '',
      },
      isSubmitDisabled: false,
    };
  }

  componentDidMount() {
    const script = document.createElement('script');
    script.src = this.catpchaLink;
    document.body.appendChild(script);
    window.handleSubmit = this.handleSubmit;
  }

  componentWillUnmount() {
    this.signal.cancel('Post req cancelled');
  }

  handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { target } = e;
    const { name, value } = target;
    this.setState((prevState) => {
      const formData: formDataType = { ...prevState.formData };
      formData[name] = value;
      return { formData };
    });
  };

  handleSubmit = () => {
    this.setState({ isSubmitDisabled: true });
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(this.siteKey, { action: 'submit' })
        .then((token: string) => {
          this.setState((prevState) => {
            const formData = { ...prevState.formData };
            formData.token = token;
            return { formData };
          });
          const { formData } = this.state;
          const data = JSON.stringify(formData);
          this.submit(data);
        })
        .catch((err: string) => {
          console.log(err);
        });
    });
  };

  submit(data: formDataType) {
    console.log(data);
    const headers = {
      Accept: 'application/json; charset=utf-8',
      'Content-Type': 'application/json; charset=UTF-8',
    };
    console.log(data);
    axios.post('https://hcj7ux2476.execute-api.us-east-1.amazonaws.com/production/submit', data, headers, {
      cancelToken: this.signal.token,
    })
      .then((res) => {
        console.log(res);
        if (res.target.status === 200) {
          console.log('success');
        } else {
          console.log(`fail, status code: ${res.target.status}`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1 className={styles.title}>contact </h1>
        <h2 className={styles.subtitle}>Send me an email:</h2>
        <form>
          <input type="text" name="name" onChange={this.handleInputChange} placeholder="Name" />
          <input type="text" name="subject" onChange={this.handleInputChange} placeholder="Subject" />
          <input type="email" name="email" onChange={this.handleInputChange} placeholder="Your Email" />
          <textarea name="message" onChange={this.handleInputChange} placeholder="Message" />
          <button type="submit" data-callback="handleSubmit" className="g-recaptcha" data-size="invisible" data-sitekey={this.siteKey} disabled={this.state.isSubmitDisabled}>Submit</button>
        </form>
        <p className={styles.privatePolicy}>
          This site is protected by reCAPTCHA and the Google
          {' '}
          <a href="https://policies.google.com/privacy">Privacy Policy</a>
          {' '}
          and
          {' '}
          <a href="https://policies.google.com/terms">Terms of Service</a>
          {' '}
          apply.
        </p>
      </div>

    );
  }
}
