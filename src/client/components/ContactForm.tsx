// src/client/components/contact/ContactForm.tsx
import React, { useState } from "react"

export const ContactForm: React.FC = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [submitting, setSubmitting] = useState(false)
    const [status, setStatus] = useState<string | null>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitting(true)
        try {
            await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message }),
            })
            setStatus("Your message has been sent.")
            setName("")
            setEmail("")
            setMessage("")
        } catch {
            setStatus("Failed to send. Please try again.")
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Your Name"
                required
                className="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-[#783DF2]"
            />
            <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your Email"
                required
                className="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-[#783DF2]"
            />
            <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="How can we help you?"
                required
                rows={5}
                className="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-[#783DF2]"
            />
            <button
                type="submit"
                disabled={submitting}
                className="w-full rounded bg-[#783DF2] py-2 text-white transition hover:bg-opacity-90"
            >
                {submitting ? "Sending..." : "Send Message"}
            </button>
            {status && <p className="text-center text-gray-700">{status}</p>}
        </form>
    )
}