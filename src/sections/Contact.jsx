import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import gsap from 'gsap';
const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const breakTheText = () => {
      const h1 = document.querySelector('h1');
      if (!h1) return;

      const h1Text = h1.textContent;
      let clutter = '';
      const splittedText = h1Text.split('');
      const halfValue = splittedText.length / 2;

      splittedText.forEach((e, idx) => {
        if (idx < halfValue) {
          clutter += `<span class="a">${e}</span>`;
        } else {
          clutter += `<span class="b">${e}</span>`;
        }
      });

      h1.innerHTML = clutter;

      // GSAP animations
      gsap.from('h1 .a', {
        y: 70,
        opacity: 0,
        duration: 0.1,
        stagger: 0.1,
      });
      gsap.from('h1 .b', {
        y: 70,
        opacity: 0,
        duration: 0.1,
        stagger: -0.1,
      });
    };

    breakTheText();
  }, []); // Runs once when the component mounts

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Hasir Ali',
          from_email: form.email,
          to_email: 'hasira804@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });
  
          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);
  
          // Construct the message with the user's input
          const userMessage = `Hi Hasir ${form.message}`;
  
          // Show the alert
          const message = "Looks like this feature took a break. No worries, just drop me a message directly via Gmail – I'm always ready to connect!";
          showAlert({
            show: true,
            text: message,
            type: 'danger',
          });
  
          // Open Gmail with the user’s message pre-filled in the email body
          window.open(
            `https://mail.google.com/mail/?view=cm&fs=1&to=youremail@gmail.com&subject=Message from ${form.name}&body=${encodeURIComponent(userMessage)}`,
            '_blank'
          );
        }
      );
  };

  return (
    <>
      <section className="c-space my-20" id="contact">
        {alert.show && <Alert {...alert} />}

        <div className="relative min-h-screen flex items-center justify-center flex-col">
          <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />

          <div className="contact-container">
          <p className="text-6xl text-white font-semibold mt-9">
              Let's Connect
              </p>
            <h3 className="head-text">
              <div className="flex justify-center text-white-600 items-center w-full h-full">
                <h1 className="text-lg inline-block">Ready to turn your project into reality? Contact me and let's create something amazing together!</h1>
              </div>
            </h3>

            

            <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
              <label className="space-y-3">
                <span className="field-label">Full Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="field-input"
                  placeholder="ex., John Doe"
                />
              </label>

              <label className="space-y-3">
                <span className="field-label">Email address</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="field-input"
                  placeholder="ex., johndoe@gmail.com"
                />
              </label>

              <label className="space-y-3">
                <span className="field-label">Your message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="field-input"
                  placeholder="Share your thoughts or inquiries..."
                />
              </label>

              <button className="field-btn" type="submit" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
                <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
