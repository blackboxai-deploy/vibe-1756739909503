'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];

  const services = [
    'Data Lake Architecture',
    'Real-time Streaming',
    'ETL Pipeline Development',
    'Cloud Migration',
    'ML Pipeline Automation',
    'Data Governance'
  ];

  const awsServices = [
    'Amazon S3',
    'AWS Glue',
    'Amazon Redshift',
    'Amazon EMR',
    'Amazon Kinesis',
    'AWS Lambda'
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">ADE</span>
              </div>
              <span className="text-xl font-bold">AWS Data Engineer</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Transforming businesses through scalable AWS data engineering solutions. 
              Building robust data pipelines that drive insights and innovation.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" className="border-slate-700 hover:bg-slate-800">
                LinkedIn
              </Button>
              <Button variant="outline" size="sm" className="border-slate-700 hover:bg-slate-800">
                GitHub
              </Button>
              <Button variant="outline" size="sm" className="border-slate-700 hover:bg-slate-800">
                Medium
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-slate-400 hover:text-orange-400 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-slate-400 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* AWS Expertise */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">AWS Expertise</h3>
            <ul className="space-y-2">
              {awsServices.map((service, index) => (
                <li key={index}>
                  <span className="text-slate-400 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="py-8 border-t border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <h4 className="font-semibold text-orange-400 mb-2">Email</h4>
              <p className="text-slate-400 text-sm">contact@awsdataengineer.com</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-orange-400 mb-2">Location</h4>
              <p className="text-slate-400 text-sm">San Francisco, CA (Remote Available)</p>
            </div>
            <div className="text-center md:text-right">
              <h4 className="font-semibold text-orange-400 mb-2">Response Time</h4>
              <p className="text-slate-400 text-sm">Within 24 hours</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 text-sm mb-4 md:mb-0">
            © {currentYear} AWS Data Engineer. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-slate-400 hover:text-orange-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-400 hover:text-orange-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-slate-400 hover:text-orange-400 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>

        {/* AWS Certification Banner */}
        <div className="py-6 border-t border-slate-800 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4">
            <span className="text-slate-400 text-sm">AWS Certified:</span>
            <div className="flex flex-wrap justify-center gap-2">
              {['Data Engineer - Associate', 'Solutions Architect - Professional', 'Big Data - Specialty'].map((cert, index) => (
                <span key={index} className="bg-slate-800 text-orange-400 px-3 py-1 rounded-full text-xs">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;