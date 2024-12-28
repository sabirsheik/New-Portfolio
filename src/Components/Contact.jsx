import emailjs from '@emailjs/browser';
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false }); // Animation triggers every time section comes into view.

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        let errors = {};
        if (!formData.name) {
            errors.name = 'Name is required';
        }
        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }
        if (!formData.message) {
            errors.message = 'Message is required';
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            setIsSubmitted(true);

            emailjs
                .sendForm(
                    'service_y29zubs',
                    'template_pghwxzu',
                    e.target,
                    'UoqaABS-Aae31qtT4'
                )
                .then(() => {
                    alert('Message Sent Successfully');
                    setFormData({
                        name: '',
                        email: '',
                        message: '',
                    });
                })
                .catch((err) => {
                    alert('Failed to send message');
                    console.log(err);
                })
                .finally(() => {
                    setIsSubmitted(false);
                });
        }
    };

    return (
        <div ref={sectionRef} className="p-4 lg:w-3/4 mx-auto overflow-x-hidden overflow-y-hidden mt-10" id="contact">
            {/* Header Section */}
            <h2 className="my-8 text-center text-4xl tracking-tight">Let's Connect</h2>

            {/* Form Section */}
            <div className="w-full max-w-4xl mx-auto">
                <form
                    action=""
                    onSubmit={handleSubmit}
                    className="mx-auto lg:w-2/3"
                    style={{ width: '70%' }}
                >
                    {/* Name Input */}
                    <motion.div
                        className="mb-4"
                        initial={{ x: -100, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                        transition={{ duration: 0.7, ease: 'easeInOut' }}
                    >
                        {errors.name && <p className="text-sm text-rose-800">{errors.name}</p>}
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            placeholder="Name"
                            onChange={handleChange}
                            className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
                        />
                    </motion.div>

                    {/* Email Input */}
                    <motion.div
                        className="mb-4"
                        initial={{ x: 100, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                        transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.2 }}
                    >
                        {errors.email && <p className="text-sm text-rose-800">{errors.email}</p>}
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            placeholder="Email"
                            onChange={handleChange}
                            className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
                        />
                    </motion.div>

                    {/* Message Input */}
                    <motion.div
                        className="mb-4"
                        initial={{ x: -100, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                        transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.4 }}
                    >
                        {errors.message && <p className="text-sm text-rose-800">{errors.message}</p>}
                        <textarea
                            name="message"
                            value={formData.message}
                            placeholder="Message"
                            onChange={handleChange}
                            rows="5"
                            className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
                        />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        className="w-full rounded-lg bg-white px-4 py-2 text-black hover:bg-gray-900 hover:text-white transition-colors duration-300 ease-in-out"
                        disabled={isSubmitted}
                        initial={{ y: 100, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                        transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.6 }}
                    >
                        {isSubmitted ? 'Sending...' : 'Send Message'}
                    </motion.button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
