import { useTranslation } from 'react-i18next';
import { Store, Check, Shield, TrendingUp, Users, QrCode, Smartphone, CreditCard, FileText, Video, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Shopkeepers() {
  const { t } = useTranslation();

  const upiSteps = [
    {
      step: 1,
      title: 'Download App',
      description: 'Install any UPI app like PhonePe, Google Pay, or Paytm'
    },
    {
      step: 2,
      title: 'Link Bank Account',
      description: 'Connect your existing bank account with the app'
    },
    {
      step: 3,
      title: 'Create QR Code',
      description: 'Generate your business QR code for payments'
    },
    {
      step: 4,
      title: 'Start Accepting',
      description: 'Display QR code and start receiving payments'
    }
  ];

  const benefits = [
    {
      icon: Check,
      title: 'Instant Payments',
      description: 'Receive payments immediately without waiting for cash or card processing delays'
    },
    {
      icon: Shield,
      title: 'Secure Transactions',
      description: 'Bank-level security with no cash handling risks or counterfeit currency concerns'
    },
    {
      icon: TrendingUp,
      title: 'Track Sales',
      description: 'Automatic record keeping with detailed transaction history and analytics'
    },
    {
      icon: Users,
      title: 'More Customers',
      description: 'Attract tech-savvy customers who prefer digital payments'
    }
  ];

  const successStories = [
    {
      name: 'Rajesh Kumar',
      location: 'Kirana Store Owner, Delhi',
      story: 'After implementing UPI, my daily sales increased by 30%. Customers love the convenience and I don\'t have to worry about giving change or handling cash.',
      metric: '30% increase in sales'
    },
    {
      name: 'Meera Sharma',
      location: 'General Store Owner, Mumbai',
      story: 'UPI helped me attract young customers who rarely carry cash. My business is now open to everyone, and record keeping is automatically done.',
      metric: '50+ new customers monthly'
    }
  ];

  const resources = [
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides in Hindi and local languages',
      action: 'Watch Now'
    },
    {
      icon: Phone,
      title: 'Free Support',
      description: 'Call our experts for personalized help and guidance',
      action: 'Call Support'
    },
    {
      icon: FileText,
      title: 'Download Guides',
      description: 'Printable setup guides and best practices handbook',
      action: 'Download PDF'
    }
  ];

  return (
    <div>
      {/* Header Section */}
      <section className="py-16 bg-[#2a2c37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-orange-50 px-4 py-2 rounded-full mb-4">
              <Store className="text-viksit-orange mr-2" size={20} />
              <span className="text-viksit-orange font-medium">For Shopkeepers</span>
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">{t('shopkeepers.title')}</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              {t('shopkeepers.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* UPI Benefits Section */}
      <section className="py-16 bg-[#2a2c37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Why UPI for Your Store?</h2>
              <div className="space-y-4">
                {benefits.map(({ icon: Icon, title, description }, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Icon className="text-viksit-green" size={18} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{title}</h4>
                      <p className="text-gray-300">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#3a3c47] rounded-2xl p-8 text-center">
              <div className="w-32 h-32 bg-[#2a2c37] rounded-lg shadow-md mx-auto mb-6 flex items-center justify-center">
                <QrCode className="text-4xl text-gray-400" size={64} />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Your UPI QR Code</h4>
              <p className="text-gray-300 mb-4">Customers scan and pay instantly</p>
              <div className="bg-viksit-orange text-white px-4 py-2 rounded-lg inline-block">
                <span className="font-semibold">₹0</span> Setup Fee
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Setup Guide */}
      <section className="py-16 bg-[#2a2c37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#3a3c47] rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Easy UPI Setup in 4 Steps</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {upiSteps.map(({ step, title, description }, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 ${step === 4 ? 'bg-viksit-green' : 'bg-viksit-blue'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-2xl font-bold text-white">
                      {step === 4 ? '✓' : step}
                    </span>
                  </div>
                  <h4 className="font-semibold text-white mb-2">{title}</h4>
                  <p className="text-sm text-gray-300">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

     

      {/* Resources and Support */}
      <section className="py-16 bg-[#2a2c37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#3a3c47] rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Resources & Support</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {resources.map(({ icon: Icon, title, description, action }, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-viksit-orange text-2xl" size={32} />
                  </div>
                  <h4 className="font-semibold text-white mb-2">{title}</h4>
                  <p className="text-gray-300 mb-4">{description}</p>
                  <Button variant="link" className="text-viksit-orange hover:text-orange-600 font-medium p-0">
                    {action} →
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
