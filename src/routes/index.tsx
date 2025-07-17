import { createFileRoute } from '@tanstack/react-router'
import * as React from 'react'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
            <main className="flex-1">
                {/* Hero */}
                <section className="flex flex-col items-center justify-center h-[70vh] bg-[var(--color-primary-light)] text-white px-6">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Acme Corp</h1>
                    <p className="max-w-2xl text-center mb-6">
                        We deliver innovative solutions that drive growth and transform businesses worldwide.
                    </p>
                    <a href="#contact" className="px-6 py-3 bg-white text-[var(--color-primary)] rounded-lg font-semibold hover:opacity-90">
                        Get in Touch
                    </a>
                </section>

                {/* Services */}
                <section className="py-16 px-6">
                    <h2 className="text-3xl font-semibold text-center mb-12">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="p-6 bg-white rounded-lg shadow">
                            <h3 className="text-2xl font-medium mb-2">Consulting</h3>
                            <p>Expert advice to optimize your business processes and strategy.</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow">
                            <h3 className="text-2xl font-medium mb-2">Development</h3>
                            <p>Custom software solutions tailored to your unique requirements.</p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow">
                            <h3 className="text-2xl font-medium mb-2">Support</h3>
                            <p>24/7 support to ensure your operations run smoothly.</p>
                        </div>
                    </div>
                </section>

                {/* About */}
                <section className="py-16 px-6 bg-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
                        <p>
                            Acme Corp has been a leader in delivering top-tier solutions for over 20 years.
                            Our mission is to empower businesses through technology and innovation.
                        </p>
                    </div>
                </section>

                {/* Contact */}
                <section id="contact" className="py-16 px-6">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl font-semibold mb-6 text-center">Contact Us</h2>
                        <form className="grid grid-cols-1 gap-4">
                            <input type="text" placeholder="Name" className="w-full p-3 border rounded"/>
                            <input type="email" placeholder="Email" className="w-full p-3 border rounded"/>
                            <textarea rows={4} placeholder="Message" className="w-full p-3 border rounded"/>
                            <button type="submit" className="px-6 py-3 bg-[var(--color-primary)] text-white rounded font-semibold hover:opacity-90">
                                Send Message
                            </button>
                        </form>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="py-6 bg-gray-800 text-gray-400 text-center">
                <p>© {new Date().getFullYear()} Acme Corp. All rights reserved.</p>
            </footer>
        </div>
    );
}

