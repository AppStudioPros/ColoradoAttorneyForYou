import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

export const ContactForm = ({ sourcePage = '/', practiceArea = 'General Inquiry' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8001';

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${backendUrl}/api/contact/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          practiceArea,
          sourcePage,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast.success(
          data.message ||
            'Thank you! Your message has been received. Warren will contact you within 24 hours.'
        );
        setFormData({ name: '', email: '', phone: '', message: '' });
        setErrors({});
      } else {
        throw new Error(data.detail || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error(
        'There was an error submitting your message. Please try calling us directly at (720) 495-7315.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <Card
      className="rounded-[18px] bg-white border border-[#e6edf5] shadow-[0_18px_46px_rgba(15,23,42,0.16)] p-6 md:p-8"
      data-testid="contact-form-card"
    >
      <h3
        className="text-lg md:text-xl font-semibold text-[#13263b] mb-2"
        data-testid="contact-form-title"
      >
        Request a Free 10-Minute Consultation
      </h3>
      <p className="text-sm text-[#6b7280] mb-6">
        Please share a few details and the best way to reach you. Do not include sensitive
        information; a more complete discussion can happen by phone.
      </p>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" data-testid="contact-form">
        {/* Name */}
        <div>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={`rounded-[12px] border-[#cfe3ea] focus-visible:ring-2 focus-visible:ring-[#1ea6a3] ${
              errors.name ? 'border-red-500' : ''
            }`}
            data-testid="contact-name-input"
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="text-sm text-red-500 mt-1" data-testid="contact-name-error">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className={`rounded-[12px] border-[#cfe3ea] focus-visible:ring-2 focus-visible:ring-[#1ea6a3] ${
              errors.email ? 'border-red-500' : ''
            }`}
            data-testid="contact-email-input"
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1" data-testid="contact-email-error">
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <Input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className={`rounded-[12px] border-[#cfe3ea] focus-visible:ring-2 focus-visible:ring-[#1ea6a3] ${
              errors.phone ? 'border-red-500' : ''
            }`}
            data-testid="contact-phone-input"
            disabled={isSubmitting}
          />
          {errors.phone && (
            <p className="text-sm text-red-500 mt-1" data-testid="contact-phone-error">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <Textarea
            name="message"
            placeholder="Brief description of your legal matter"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={`rounded-[12px] border-[#cfe3ea] focus-visible:ring-2 focus-visible:ring-[#1ea6a3] resize-vertical ${
              errors.message ? 'border-red-500' : ''
            }`}
            data-testid="contact-message-textarea"
            disabled={isSubmitting}
          />
          {errors.message && (
            <p className="text-sm text-red-500 mt-1" data-testid="contact-message-error">
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="rounded-full bg-[#1ea6a3] text-white px-8 h-11 hover:bg-[#189694] transition-colors shadow-md disabled:opacity-50"
            data-testid="contact-submit-button"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </Button>
        </div>
      </form>
    </Card>
  );
};
