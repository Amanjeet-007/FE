import React from 'react';
import { Phone, Mail, MessageSquare, ShieldCheck, Truck, RefreshCcw, HelpCircle } from 'lucide-react';

const CustomerService = () => {
  const contactOptions = [
    { icon: <MessageSquare size={24} />, title: "Live Chat", desc: "Average response: 2 mins", action: "Start Chat" },
    { icon: <Mail size={24} />, title: "Email Support", desc: "support@premiumbrand.com", action: "Send Email" },
    { icon: <Phone size={24} />, title: "Phone Support", desc: "+1 (800) 123-4567", action: "Call Now" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Hero Section */}
      <div className="bg-[#002147] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">How can we help you?</h1>
        <p className="text-blue-100 max-w-2xl mx-auto text-lg">
          Experience world-class support. Our dedicated team is here to ensure your journey with us is seamless.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-12 pb-20">
        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactOptions.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 transition-transform hover:-translate-y-2">
              <div className="text-blue-600 mb-4 bg-blue-50 w-fit p-3 rounded-lg">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-500 mb-6">{item.desc}</p>
              <button className="text-[#002147] font-bold hover:text-blue-600 transition-colors">
                {item.action} →
              </button>
            </div>
          ))}
        </div>

        {/* Quick Help Links */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-[#002147]">Self-Service Topics</h2>
            <div className="space-y-4">
              {[
                { icon: <Truck />, label: "Track Your Order" },
                { icon: <RefreshCcw />, label: "Returns & Exchanges" },
                { icon: <ShieldCheck />, label: "Warranty Policy" },
                { icon: <HelpCircle />, label: "Frequently Asked Questions" },
              ].map((topic, i) => (
                <div key={i} className="flex items-center justify-between p-5 bg-white rounded-lg border border-slate-200 hover:border-blue-400 cursor-pointer transition-all group">
                  <div className="flex items-center gap-4">
                    <span className="text-slate-400 group-hover:text-blue-600">{topic.icon}</span>
                    <span className="font-medium">{topic.label}</span>
                  </div>
                  <span className="text-slate-300">›</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form Preview */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-2xl font-bold mb-6 text-[#002147]">Direct Inquiry</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="email" placeholder="Email Address" className="w-full p-3 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <textarea placeholder="Message" rows="4" className="w-full p-3 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              <button className="w-full bg-[#002147] text-white py-4 rounded-md font-bold hover:bg-[#003366] transition-colors shadow-lg shadow-blue-900/20">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerService;