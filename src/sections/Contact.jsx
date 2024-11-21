import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import gsap from 'gsap';
import Globe from 'react-globe.gl';
import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('adrian@jsmastery.pro');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

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
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        serviceID,
        templateID,
        {
          from_name: form.name,
          to_name: 'Hasir Ali',
          from_email: form.email,
          to_email: 'hasira804@gmail.com',
          message: form.message,
        },
        publicKey,
      )
      .then(() => {
        setLoading(false);
        showAlert({
          show: true,
          text: 'Thank you for your message 😃',
          type: 'success',
        });

        setTimeout(() => {
          hideAlert();
          setForm({
            name: '',
            email: '',
            message: '',
          });
        }, 3000);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);

        const message =
          "Looks like this feature took a break. No worries, just drop me a message directly via Gmail – I'm always ready to connect!";
        showAlert({
          show: true,
          text: message,
          type: 'danger',
        });

        // Pre-fill Gmail with the user's message
        const userMessage = `Hi Hasir, ${form.message}`;
        window.open(
          `https://mail.google.com/mail/?view=cm&fs=1&to=hasira804@gmail.com&subject=Message from ${form.name}&body=${encodeURIComponent(userMessage)}`,
          '_blank',
        );
      });
  };

  return (
    <>
      <div className="col-span-1 xl:row-span-4 mt-20">
        <div className="grid-container">
          <div className="rounded-3xl w-full sm:h-[320px] h-fit flex justify-center items-center">
            <Globe
              height={350}
              width={350}
              backgroundColor="rgba(0, 0, 0, 0)"
              backgroundImageOpacity={0.5}
              showAtmosphere
              showGraticules
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
              bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
            />
          </div>
          <div>
            <h1 className="grid-headtext text-center text-5xl">I’m very flexible with time zone communications & locations</h1>
            <h1 className="grid-subtext text-center">
              I&apos;m based in Rjieka, Croatia and open to remote work worldwide.
            </h1>
            
          </div>
        </div>
      </div>
      {/* <div className="xl:col-span-1 xl:row-span-2"> */}
      <div className="grid-container">
        <div className="space-y-2">
          <p className="grid-subtext text-center">Contact me</p>
          <div className="copy-container" onClick={handleCopy}>
            <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
            <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">hasira804@gmail.com</p>
          </div>
        </div>
      </div>
      {/* </div> */}

      <section className="c-space my-20" id="contact">
        {alert.show && <Alert {...alert} />}

        <div className="relative min-h-screen flex items-center justify-center flex-col">
          <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />

          <div className="contact-container">
            <p className="text-6xl text-white font-semibold mt-9">Let's Connect</p>
            <h3 className="head-text">
              <div className="flex justify-center text-white-600 items-center w-full h-full">
                <a className="text-lg inline-block">
                  Ready to turn your project into reality? Contact me and let's create something amazing together!
                </a>
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
