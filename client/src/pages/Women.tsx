import { User, Laptop, Briefcase, Shield, Heart, BookOpen, Users, Scissors, ChefHat, Paintbrush, Phone, Home, DollarSign, MapPin, Calendar, Bell, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Women() {
  const empowermentAreas = [
    {
      icon: Laptop,
      title: 'Digital Literacy',
      description: 'Computer skills and internet safety training'
    },
    {
      icon: Briefcase,
      title: 'Entrepreneurship',
      description: 'Online business setup and e-commerce training'
    },
    {
      icon: Shield,
      title: 'Safety Tools',
      description: 'Digital security and emergency apps'
    },
    {
      icon: Heart,
      title: 'Health & Hygiene',
      description: 'Women health awareness and hygiene education'
    },
    {
      icon: BookOpen,
      title: 'Skill Development',
      description: 'Tailoring, cooking, handicrafts, and modern skills'
    },
    {
      icon: Users,
      title: 'Self Help Groups',
      description: 'Join local women groups for support and growth'
    }
  ];

  const healthServices = [
    {
      icon: Heart,
      title: 'Maternal Health',
      description: 'Pregnancy care, nutrition guidance, and child health monitoring',
      features: ['Pre & Post natal care', 'Vaccination schedules', 'Nutrition charts', 'Emergency contacts']
    },
    {
      icon: Calendar,
      title: 'Menstrual Health',
      description: 'Period tracking, hygiene education, and health tips',
      features: ['Period calendar', 'Hygiene products info', 'Pain management', 'Myth busting']
    },
    {
      icon: Phone,
      title: 'Health Helplines',
      description: 'Quick access to women health support and counseling',
      features: ['24/7 helpline numbers', 'Online consultations', 'Mental health support', 'Emergency assistance']
    }
  ];

  const skillPrograms = [
    {
      icon: Scissors,
      title: 'Tailoring & Fashion',
      description: 'Learn tailoring, embroidery, and fashion designing',
      earning: 'Earn ₹15,000-30,000/month',
      duration: '3-6 months'
    },
    {
      icon: ChefHat,
      title: 'Cooking & Catering',
      description: 'Professional cooking, baking, and catering business',
      earning: 'Earn ₹20,000-50,000/month',
      duration: '2-4 months'
    },
    {
      icon: Paintbrush,
      title: 'Arts & Crafts',
      description: 'Handicrafts, painting, jewelry making, home decor',
      earning: 'Earn ₹10,000-25,000/month',
      duration: '1-3 months'
    },
    {
      icon: Laptop,
      title: 'Digital Skills',
      description: 'Computer basics, online selling, social media marketing',
      earning: 'Earn ₹25,000-60,000/month',
      duration: '4-8 months'
    }
  ];

  const safetyResources = [
    {
      icon: Phone,
      title: 'Emergency Contacts',
      number: '1091',
      description: 'Women Helpline - 24/7 support for women in distress'
    },
    {
      icon: Shield,
      title: 'Police Helpline',
      number: '100',
      description: 'Emergency police assistance and immediate help'
    },
    {
      icon: Bell,
      title: 'Child Helpline',
      number: '1098',
      description: 'Child protection and family support services'
    },
    {
      icon: Heart,
      title: 'Domestic Violence',
      number: '181',
      description: 'Domestic violence helpline and legal support'
    }
  ];

  const governmentSchemes = [
    {
      title: 'Pradhan Mantri Mudra Yojana',
      description: 'Loans up to ₹10 lakh for women entrepreneurs',
      benefit: 'Low interest rates, no collateral needed',
      eligibility: 'All women above 18 years'
    },
    {
      title: 'Sukanya Samriddhi Yojana',
      description: 'Savings scheme for girl child education and marriage',
      benefit: 'High interest rate, tax benefits',
      eligibility: 'Girls below 10 years'
    },
    {
      title: 'Mahila Shakti Kendra',
      description: 'Rural women empowerment and skill development',
      benefit: 'Free training, employment opportunities',
      eligibility: 'Rural women aged 18-50'
    },
    {
      title: 'Stand Up India',
      description: 'Bank loans for women entrepreneurs',
      benefit: '₹10 lakh to ₹1 crore loans',
      eligibility: 'Women entrepreneurs for new ventures'
    }
  ];

  return (
    <div>
      {/* Header Section */}
      <section className="py-16 bg-[#2a2c37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-pink-100 px-4 py-2 rounded-full mb-4">
              <User className="text-pink-600 mr-2" size={20} />
              <span className="text-pink-600 font-medium">For Women</span>
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">Women's Digital Empowerment</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Supporting women with digital literacy, entrepreneurship opportunities, and safety tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {empowermentAreas.map(({ icon: Icon, title, description }, index) => (
              <Card key={index} className="bg-[#3a3c47] hover:shadow-lg transition-shadow border-gray-600">
                <CardContent className="p-6 text-center">
                  <Icon className="text-pink-600 text-3xl mb-4 mx-auto" size={48} />
                  <h3 className="font-semibold text-white mb-2">{title}</h3>
                  <p className="text-sm text-gray-300">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Health & Hygiene Section */}
      <section className="py-16 bg-[#2a2c37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Health & Hygiene Support</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive health services and hygiene education designed specifically for women's wellbeing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {healthServices.map(({ icon: Icon, title, description, features }, index) => (
              <Card key={index} className="bg-[#3a3c47] hover:shadow-lg transition-shadow border-gray-600">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <Icon className="text-pink-500 mx-auto mb-3" size={40} />
                    <h3 className="font-semibold text-white mb-2">{title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{description}</p>
                  </div>
                  <ul className="space-y-2">
                    {features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-center">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Development Programs */}
      <section className="py-16 bg-[#2a2c37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Skill Development Programs</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Learn valuable skills that can help you earn income and achieve financial independence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skillPrograms.map(({ icon: Icon, title, description, earning, duration }, index) => (
              <Card key={index} className="bg-[#3a3c47] hover:shadow-lg transition-shadow border-gray-600">
                <CardContent className="p-6 text-center">
                  <Icon className="text-pink-500 mx-auto mb-4" size={40} />
                  <h3 className="font-semibold text-white mb-2">{title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{description}</p>
                  <div className="space-y-2">
                    <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs">
                      {earning}
                    </div>
                    <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs">
                      Duration: {duration}
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-pink-600 hover:bg-pink-700 text-white">
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Emergency Resources */}
      <section className="py-16 bg-[#2a2c37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Safety & Emergency Resources</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Important helpline numbers and safety resources for women and families
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {safetyResources.map(({ icon: Icon, title, number, description }, index) => (
              <Card key={index} className="bg-red-500/10 border-red-500/30 hover:bg-red-500/20 transition-colors">
                <CardContent className="p-6 text-center">
                  <Icon className="text-red-400 mx-auto mb-3" size={40} />
                  <h3 className="font-semibold text-white mb-2">{title}</h3>
                  <div className="text-2xl font-bold text-red-400 mb-2">{number}</div>
                  <p className="text-gray-300 text-sm mb-4">{description}</p>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    <Phone className="mr-2" size={16} />
                    Call Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Government Schemes */}
      <section className="py-16 bg-[#2a2c37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Government Schemes for Women</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Take advantage of government programs designed to support women's empowerment and financial independence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {governmentSchemes.map(({ title, description, benefit, eligibility }, index) => (
              <Card key={index} className="bg-[#3a3c47] hover:shadow-lg transition-shadow border-gray-600">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-white mb-3 text-lg">{title}</h3>
                  <p className="text-gray-300 mb-4">{description}</p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <DollarSign className="text-green-400 mr-2 mt-1" size={16} />
                      <div>
                        <div className="text-sm font-medium text-green-400">Benefit</div>
                        <div className="text-gray-300 text-sm">{benefit}</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="text-blue-400 mr-2 mt-1" size={16} />
                      <div>
                        <div className="text-sm font-medium text-blue-400">Eligibility</div>
                        <div className="text-gray-300 text-sm">{eligibility}</div>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-pink-600 hover:bg-pink-700 text-white">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
