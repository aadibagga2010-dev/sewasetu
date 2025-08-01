import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import { Flag, Facebook, Twitter, Linkedin } from 'lucide-react';
import logoPath from '@assets/SewaSetu_1753185059156.png';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#2a2c37] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logoPath} alt="SewaSetu Logo" className="h-8 w-auto filter invert" />
              <span className="text-xl font-bold">SewaSetu</span>
            </div>
            <p className="text-gray-400 mb-4">
              SewaSetu - Technology for All. Bridging the technology gap for all citizens and building an inclusive digital India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

         

  
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Viksit Bharat Initiative.</p>
        </div>
      </div>
    </footer>
  );
}
