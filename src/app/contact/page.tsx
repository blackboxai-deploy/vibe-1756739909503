'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you within 24 hours.');
  };

  const contactMethods = [
    {
      method: 'Email',
      value: 'contact@awsdataengineer.com',
      description: 'Best for detailed project discussions',
      icon: '📧',
      response: 'Within 24 hours'
    },
    {
      method: 'LinkedIn',
      value: '/in/aws-data-engineer',
      description: 'Professional networking and quick questions',
      icon: '💼',
      response: 'Same day'
    },
    {
      method: 'Calendly',
      value: 'Schedule 30min consultation',
      description: 'Free consultation call to discuss your needs',
      icon: '📅',
      response: 'Real-time'
    },
    {
      method: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'For urgent project inquiries',
      icon: '📞',
      response: 'Business hours'
    }
  ];

  const projectTypes = [
    'Data Lake Architecture',
    'Real-time Streaming',
    'ETL Pipeline Development', 
    'Cloud Migration',
    'ML Pipeline Automation',
    'Data Governance & Security',
    'Performance Optimization',
    'Other'
  ];

  const budgetRanges = [
    'Under $25K',
    '$25K - $50K',
    '$50K - $100K', 
    '$100K - $250K',
    '$250K+',
    'Prefer to discuss'
  ];

  const timelines = [
    'ASAP (1-2 weeks)',
    '1 month',
    '2-3 months',
    '3-6 months',
    '6+ months',
    'Flexible'
  ];

  const faqs = [
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on complexity. Simple ETL pipelines can be completed in 2-4 weeks, while comprehensive data lake architectures typically take 6-12 weeks. I provide detailed timelines during our initial consultation.'
    },
    {
      question: 'Do you work with startups or only enterprise clients?',
      answer: 'I work with organizations of all sizes, from startups to Fortune 500 companies. My solutions are designed to scale with your business, starting with cost-effective architectures that can grow over time.'
    },
    {
      question: 'What AWS regions do you support?',
      answer: 'I can work with any AWS region based on your requirements. I help determine the optimal region selection based on factors like latency, compliance, and data residency requirements.'
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes, I offer flexible support packages including monitoring, optimization, and maintenance services. This ensures your data infrastructure continues to perform optimally as your business grows.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Let's <span className="text-orange-400">Connect</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your data infrastructure? I'd love to discuss your project 
              and explore how AWS data engineering can drive your business forward.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800">Start Your Project</CardTitle>
                <p className="text-slate-600">
                  Tell me about your data engineering needs and I'll get back to you with a tailored solution.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Your company name"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="projectType">Project Type *</Label>
                      <Select onValueChange={(value) => handleInputChange('projectType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          {projectTypes.map((type) => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select onValueChange={(value) => handleInputChange('budget', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((range) => (
                            <SelectItem key={range} value={range}>{range}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeline">Timeline</Label>
                      <Select onValueChange={(value) => handleInputChange('timeline', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          {timelines.map((timeline) => (
                            <SelectItem key={timeline} value={timeline}>{timeline}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Description *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Describe your data engineering needs, current challenges, and goals..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">Contact Methods</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactMethods.map((contact, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-2xl">{contact.icon}</div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-800">{contact.method}</div>
                      <div className="text-orange-600 text-sm font-medium">{contact.value}</div>
                      <div className="text-slate-600 text-sm">{contact.description}</div>
                      <Badge variant="outline" className="mt-1 text-xs">
                        Response: {contact.response}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Facts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">Quick Facts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Response Time</span>
                  <Badge className="bg-green-100 text-green-800">Within 24hrs</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Time Zone</span>
                  <Badge variant="outline">PST (UTC-8)</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Availability</span>
                  <Badge className="bg-blue-100 text-blue-800">Mon-Fri 9-6</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Remote Work</span>
                  <Badge className="bg-orange-100 text-orange-800">Available</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Current Availability */}
            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-2xl mb-2">🟢</div>
                  <div className="font-semibold text-slate-800 mb-2">Available for New Projects</div>
                  <div className="text-slate-600 text-sm mb-4">
                    Currently accepting new clients for Q1 2025 projects
                  </div>
                  <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                    Book Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-slate-800 text-center">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {faqs.map((faq, index) => (
                  <div key={index} className="space-y-3">
                    <h3 className="font-semibold text-slate-800">{faq.question}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;