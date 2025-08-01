import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { useTranslation } from 'react-i18next';
import { Flag, Store, Users, Sprout, HardHat, User, ChevronDown, Menu, X } from 'lucide-react';
import logoPath from '@assets/SewaSetu__3_-removebg-preview_1753941860722.png';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    { key: 'shopkeepers', icon: Store, href: '/shopkeepers' },
    { key: 'elderly', icon: Users, href: '/elderly' },
    { key: 'farmers', icon: Sprout, href: '/farmers' },
    { key: 'workers', icon: HardHat, href: '/workers' },
    { key: 'women', icon: User, href: '/women' },
    { key: 'comingSoon', icon: Flag, href: '#', disabled: true },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="bg-[#a1a3b3] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3">
            <img src={logoPath} alt="SewaSetu Logo" className="h-50 w-auto object-contain" />
         
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`${location === '/' ? 'text-viksit-orange' : 'text-white hover:text-viksit-orange'} transition-colors`}>
              {t('header.nav.home')}
            </Link>
            
            {/* Categories Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-white hover:text-viksit-orange transition-colors">
                <span>{t('header.nav.categories')}</span>
                <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                {categories.map(({ key, icon: Icon, href, disabled }) => (
                  <DropdownMenuItem key={key} asChild={!disabled} disabled={disabled}>
                    {disabled ? (
                      <div className="flex items-center space-x-3 px-4 py-3 opacity-50 cursor-not-allowed">
                        <Icon className="text-gray-400" size={18} />
                        <span>Coming Soon</span>
                      </div>
                    ) : (
                      <Link href={href} className="flex items-center space-x-3 px-4 py-3">
                        <Icon className="text-viksit-orange" size={18} />
                        <span>{t(`header.categories.${key}`)}</span>
                      </Link>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <a href="#contact" className="text-white hover:text-viksit-orange transition-colors">
              {t('header.nav.contact')}
            </a>

            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-white hover:text-viksit-orange transition-colors">
                {i18n.language === 'hi' ? 'हिं' : 'EN'}
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => changeLanguage('en')}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('hi')}>
                  हिंदी
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button className="bg-viksit-orange hover:bg-viksit-orange/90 text-white">
              {t('header.nav.getSupport')}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:text-viksit-orange"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-600 py-4">
            <div className="space-y-4">
              <Link href="/" className="block text-white hover:text-viksit-orange">
                {t('header.nav.home')}
              </Link>
              <div className="space-y-2">
                <p className="font-medium text-white">{t('header.nav.categories')}</p>
                {categories.map(({ key, href, disabled }) => (
                  disabled ? (
                    <div
                      key={key}
                      className="block pl-4 text-gray-400 opacity-50 cursor-not-allowed"
                    >
                      Coming Soon
                    </div>
                  ) : (
                    <Link
                      key={key}
                      href={href}
                      className="block pl-4 text-white hover:text-viksit-orange"
                    >
                      {t(`header.categories.${key}`)}
                    </Link>
                  )
                ))}
              </div>
              <a href="#contact" className="block text-white hover:text-viksit-orange">
                {t('header.nav.contact')}
              </a>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" onClick={() => changeLanguage('en')}>
                  EN
                </Button>
                <Button variant="outline" size="sm" onClick={() => changeLanguage('hi')}>
                  हिं
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
