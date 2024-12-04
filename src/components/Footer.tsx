import React from 'react';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-8">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label={label}
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
          <div className="text-sm">
            © {new Date().getFullYear()} BrainWave. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}