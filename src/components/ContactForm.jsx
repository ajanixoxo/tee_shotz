"use client"

import { useState } from "react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Your WhatsApp number (replace with your actual number)
    const phoneNumber = "+2348090771265" // Replace with your WhatsApp number including country code

    // Format the message for WhatsApp
    const whatsappMessage = `*New Contact Form Submission*
    
*Name:* ${formData.name}
*Email:* ${formData.email}
*Subject:* ${formData.subject}

*Message:*
${formData.message}`

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage)

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

    // Open WhatsApp
    window.open(whatsappURL, '_blank')

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" data-aos="fade-up">
      <div>
        <label htmlFor="name" className="block mb-2 text-sm font-medium">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Your email"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block mb-2 text-sm font-medium">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Subject of your message"
        />
      </div>

      <div>
        <label htmlFor="message" className="block mb-2 text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Your message..."
        ></textarea>
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="px-8 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
        >
          Send Message
        </button>
      </div>
    </form>
  )
}

export default ContactForm

