import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import { Smartphone, Store, Users, Sprout, HardHat, User, ArrowRight, Target, Globe, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function Home() {
  const { t } = useTranslation();

  const categories = [
    {
      key: 'shopkeepers',
      icon: Store,
      href: '/shopkeepers',
      color: 'border-viksit-orange',
      bgColor: 'bg-orange-50',
      iconColor: 'text-viksit-orange',
      linkColor: 'text-viksit-orange hover:text-orange-600',
      description: t('home.categories.shopkeepersDesc')
    },
    {
      key: 'elderly',
      icon: Users,
      href: '/elderly',
      color: 'border-viksit-green',
      bgColor: 'bg-green-50',
      iconColor: 'text-viksit-green',
      linkColor: 'text-viksit-green hover:text-green-600',
      description: t('home.categories.elderlyDesc')
    },
    {
      key: 'farmers',
      icon: Sprout,
      href: '/farmers',
      color: 'border-viksit-blue',
      bgColor: 'bg-blue-50',
      iconColor: 'text-viksit-blue',
      linkColor: 'text-viksit-blue hover:text-blue-600',
      description: t('home.categories.farmersDesc')
    },
    {
      key: 'workers',
      icon: HardHat,
      href: '/workers',
      color: 'border-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      linkColor: 'text-purple-600 hover:text-purple-700',
      description: t('home.categories.workersDesc')
    },
    {
      key: 'women',
      icon: User,
      href: '/women',
      color: 'border-pink-600',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600',
      linkColor: 'text-pink-600 hover:text-pink-700',
      description: t('home.categories.womenDesc')
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="from-viksit-blue to-blue-700 text-white py-20 bg-[#40424b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-[#7FD8BE]">
                {t('home.hero.title')}
              </h1>
              <p className="text-xl mb-8 opacity-90 text-[7FD8BE]">
                {t('home.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-viksit-orange hover:bg-orange-600 text-white">
                  {t('home.hero.exploreBtn')}
                </Button>
                <Button size="lg" className="bg-[#ff5500] text-white hover:bg-white hover:text-viksit-blue">
                  {t('home.hero.learnBtn')}
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/p_1754029708480.png" 
                alt="Family learning digital skills together" 
                className="w-full h-auto rounded-2xl object-cover shadow-2xl"
                onError={(e) => {
                  console.error('Image failed to load:', e.target.src);
                  e.target.style.display = 'none';
                }}
                onLoad={() => console.log('Image loaded successfully')}
              />
            </div>
          </div>
        </div>
      </section>
      {/* About Viksit Bharat Section */}
      <section id="about" className="py-16 from-viksit-blue via-[#2a2c37] to-viksit-blue bg-[#2a2c37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {t('home.about.title')}
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              {t('home.about.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">{t('home.about.challengeTitle')}</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  {t('home.about.challengeText1')}
                </p>
                <p>
                  {t('home.about.challengeText2')}
                </p>
                <p>
                  {t('home.about.challengeText3')}
                </p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h4 className="text-xl font-semibold text-white mb-6">{t('home.about.missionTitle')}</h4>
              <div className="space-y-4">
                <div className="flex items-center text-white">
                  <div className="w-8 h-8 bg-viksit-orange rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <span>{t('home.about.mission1')}</span>
                </div>
                <div className="flex items-center text-white">
                  <div className="w-8 h-8 bg-viksit-blue rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <span>{t('home.about.mission2')}</span>
                </div>
                <div className="flex items-center text-white">
                  <div className="w-8 h-8 bg-viksit-green rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <span>{t('home.about.mission3')}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[#2a2c37] border-l-4 border-l-viksit-orange text-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-viksit-orange/20 rounded-lg flex items-center justify-center mr-4">
                    <Target className="text-viksit-orange" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">{t('home.about.whyTitle')}</h3>
                </div>
                <p className="text-gray-300">
                  {t('home.about.whyDesc')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#2a2c37] border-l-4 border-l-viksit-blue text-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-viksit-blue/20 rounded-lg flex items-center justify-center mr-4">
                    <Globe className="text-viksit-blue" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">{t('home.about.inclusiveTitle')}</h3>
                </div>
                <p className="text-gray-300">
                  {t('home.about.inclusiveDesc')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#2a2c37] border-l-4 border-l-viksit-green text-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-viksit-green/20 rounded-lg flex items-center justify-center mr-4">
                    <Heart className="text-viksit-green" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">{t('home.about.communityTitle')}</h3>
                </div>
                <p className="text-gray-300">
                  {t('home.about.communityDesc')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Categories Overview */}
      <section className="py-16 bg-[#2a2c37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">{t('home.categories.title')}</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              {t('home.categories.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map(({ key, icon: Icon, href, color, bgColor, iconColor, linkColor, description }) => (
              <Card key={key} className={`hover:shadow-lg transition-shadow border-l-4 ${color} bg-[#2a2c37] text-white`}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center mr-4`}>
                      <Icon className={`${iconColor} text-xl`} size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{t(`header.categories.${key}`)}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    {description}
                  </p>
                  <Link href={https://www.youtube.com/watch?v=qIH6B7-Z5PM} className={`${linkColor} font-medium flex items-center`}>
                    {t('home.categories.learnMore')} <ArrowRight className="ml-2" size={16} />
                  </Link>
                </CardContent>
              </Card>
            ))}

            {/* Contact Card */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-viksit-orange bg-[#2a2c37] text-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-viksit-orange/20 rounded-lg flex items-center justify-center mr-4">
                    <User className="text-viksit-orange text-xl" size={24} />
                  </div>
                  <h3 className="text-white text-[20px] text-center font-semibold">{t('home.categories.othersTitle')}</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  {t('home.categories.othersDesc')}
                </p>
                <a href="#contact" className="text-viksit-orange font-medium flex items-center">
                  {t('home.categories.contactSupport')} <ArrowRight className="ml-2" size={16} />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-16 bg-viksit-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('contact.title')}</h2>
              <p className="text-xl mb-8 opacity-90">
                {t('contact.subtitle')}
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="text-yellow-300 mr-4">📞</div>
                  <span>{t('contact.helpline')}</span>
                </div>
                <div className="flex items-center">
                  <div className="text-yellow-300 mr-4">✉️</div>
                  <span>{t('contact.email')}</span>
                </div>
                <div className="flex items-center">
                  <div className="text-yellow-300 mr-4">⏰</div>
                  <span>{t('contact.hours')}</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6">{t('contact.requestSupport')}</h3>
              <form className="space-y-4">
                <Input 
                  placeholder={t('contact.namePlaceholder')} 
                  className="bg-white/10 border-white/20 text-white placeholder-white/70"
                />
                <Input 
                  type="tel" 
                  placeholder={t('contact.phonePlaceholder')} 
                  className="bg-white/10 border-white/20 text-white placeholder-white/70"
                />
                <Select>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder={t('contact.categoryPlaceholder')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="shopkeepers">{t('header.categories.shopkeepers')}</SelectItem>
                    <SelectItem value="elderly">{t('header.categories.elderly')}</SelectItem>
                    <SelectItem value="farmers">{t('header.categories.farmers')}</SelectItem>
                    <SelectItem value="workers">{t('header.categories.workers')}</SelectItem>
                    <SelectItem value="women">{t('header.categories.women')}</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea 
                  placeholder={t('contact.messagePlaceholder')} 
                  rows={4} 
                  className="bg-white/10 border-white/20 text-white placeholder-white/70 resize-none"
                />
                <Button type="submit" className="w-full bg-viksit-orange hover:bg-orange-600 text-white">
                  {t('contact.sendRequest')}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
