import { Users, Smartphone, Heart, Building2, DollarSign, Phone, Calendar, MapPin, Stethoscope, Pill, Shield, Home, Car, GraduationCap, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Elderly() {
  const services = [
    {
      icon: Smartphone,
      title: 'Simple Phone Training',
      description: 'Easy smartphone tutorials for calling, messaging, and essential apps.'
    },
    {
      icon: Heart,
      title: 'Digital Healthcare',
      description: 'Online doctor consultations and medication reminders made simple.'
    },
    {
      icon: Building2,
      title: 'Banking Support',
      description: 'Safe and secure digital banking with step-by-step guidance.'
    }
  ];

  const healthServices = [
    {
      icon: Stethoscope,
      title: 'Online Doctor Consultations',
      description: 'Video calls with doctors from the comfort of your home',
      features: ['24/7 availability', 'Prescription delivery', 'Medical records storage', 'Follow-up reminders']
    },
    {
      icon: Pill,
      title: 'Medicine Management',
      description: 'Automated reminders and medicine tracking',
      features: ['Pill reminders', 'Dosage tracking', 'Pharmacy delivery', 'Drug interaction alerts']
    },
    {
      icon: Heart,
      title: 'Health Monitoring',
      description: 'Track vital signs and health metrics easily',
      features: ['Blood pressure logs', 'Sugar level tracking', 'Exercise reminders', 'Health reports']
    }
  ];

  const digitalLiteracy = [
    {
      icon: Smartphone,
      title: 'Basic Smartphone Use',
      description: 'Learn to make calls, send messages, and use basic apps',
      lessons: ['Making/receiving calls', 'Text messaging basics', 'Camera usage', 'App navigation'],
      duration: '2-3 weeks'
    },
    {
      icon: Building2,
      title: 'Online Banking',
      description: 'Safe and secure banking from your phone',
      lessons: ['Account balance check', 'Money transfers', 'Bill payments', 'Security tips'],
      duration: '1-2 weeks'
    },
    {
      icon: Car,
      title: 'Transportation Apps',
      description: 'Book taxis and auto-rickshaws easily',
      lessons: ['Booking rides', 'Payment methods', 'Safety features', 'Trip tracking'],
      duration: '1 week'
    },
    {
      icon: MapPin,
      title: 'Maps & Navigation',
      description: 'Find places and get directions',
      lessons: ['Location search', 'Getting directions', 'Public transport info', 'Nearby places'],
      duration: '1 week'
    }
  ];

  const governmentBenefits = [
    {
      title: 'Senior Citizens Savings Scheme (SCSS)',
      description: 'High-interest savings account for citizens above 60',
      benefit: '8.2% annual interest rate',
      eligibility: 'Age 60+ with retirement funds',
      maxAmount: '₹30 lakh investment limit'
    },
    {
      title: 'Pradhan Mantri Vaya Vandana Yojana',
      description: 'Pension scheme providing guaranteed returns',
      benefit: '7.4% guaranteed annual return',
      eligibility: 'Age 60+ Indian citizens',
      maxAmount: '₹15 lakh maximum investment'
    },
    {
      title: 'Ayushman Bharat PM-JAY',
      description: 'Free healthcare coverage up to ₹5 lakh annually',
      benefit: 'Cashless treatment at empaneled hospitals',
      eligibility: 'SECC database beneficiaries',
      maxAmount: '₹5 lakh health cover'
    },
    {
      title: 'Indira Gandhi National Old Age Pension Scheme',
      description: 'Monthly pension for elderly below poverty line',
      benefit: '₹500-1000 monthly pension',
      eligibility: 'Age 60+, below poverty line',
      maxAmount: 'Monthly recurring benefit'
    }
  ];

  const emergencyContacts = [
    {
      icon: Phone,
      title: 'Emergency Services',
      number: '112',
      description: 'All-in-one emergency number for police, fire, medical'
    },
    {
      icon: Heart,
      title: 'Medical Emergency',
      number: '108',
      description: 'Ambulance service available 24/7'
    },
    {
      icon: Shield,
      title: 'Senior Citizen Helpline',
      number: '14567',
      description: 'Dedicated helpline for elderly support and assistance'
    },
    {
      icon: Home,
      title: 'Elder Abuse Helpline',
      number: '181',
      description: 'Report elderly abuse and get immediate help'
    }
  ];

  return (
    <div>
      {/* Header Section */}
      <section className="py-16 bg-[#2a2c37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-green-50 px-4 py-2 rounded-full mb-4">
              <Users className="text-viksit-green mr-2" size={20} />
              <span className="text-viksit-green font-medium">For Elderly Citizens</span>
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">Technology Made Simple for Seniors</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Bridging the digital divide with easy-to-use technology solutions designed specifically for elderly citizens
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map(({ icon: Icon, title, description }, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-[#3a3c47] text-white border-gray-600">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-viksit-green text-xl" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
                  <p className="text-gray-300">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Health Services */}
      <section className="py-16 bg-[#2a2c37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Digital Health Services</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Access healthcare services from the comfort of your home with simple, senior-friendly digital tools
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {healthServices.map(({ icon: Icon, title, description, features }, index) => (
              <Card key={index} className="bg-[#3a3c47] hover:shadow-lg transition-shadow border-gray-600">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <Icon className="text-green-400 mx-auto mb-3" size={40} />
                    <h3 className="font-semibold text-white mb-2">{title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{description}</p>
                  </div>
                  <ul className="space-y-2">
                    {features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
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

      {/* Digital Literacy Training */}
      <section className="py-16 bg-[#2a2c37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Step-by-Step Digital Learning</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Learn essential digital skills at your own pace with easy tutorials designed for seniors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {digitalLiteracy.map(({ icon: Icon, title, description, lessons, duration }, index) => (
              <Card key={index} className="bg-[#3a3c47] hover:shadow-lg transition-shadow border-gray-600">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <Icon className="text-blue-400 mx-auto mb-3" size={40} />
                    <h3 className="font-semibold text-white mb-2">{title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{description}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-white mb-2">What you'll learn:</h4>
                    <ul className="space-y-1">
                      {lessons.map((lesson, idx) => (
                        <li key={idx} className="text-xs text-gray-300 flex items-center">
                          <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                          {lesson}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs text-center mb-4">
                    Duration: {duration}
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Start Learning
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Government Benefits */}
      <section className="py-16 bg-[#2a2c37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Senior Citizen Government Benefits</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Special schemes and benefits designed to support senior citizens' financial security and healthcare needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {governmentBenefits.map(({ title, description, benefit, eligibility, maxAmount }, index) => (
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
                    <div className="flex items-start">
                      <Calendar className="text-purple-400 mr-2 mt-1" size={16} />
                      <div>
                        <div className="text-sm font-medium text-purple-400">Amount</div>
                        <div className="text-gray-300 text-sm">{maxAmount}</div>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-16 bg-[#2a2c37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Emergency Contact Numbers</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Important helpline numbers for immediate assistance in medical and emergency situations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyContacts.map(({ icon: Icon, title, number, description }, index) => (
              <Card key={index} className="bg-red-500/10 border-red-500/30 hover:bg-red-500/20 transition-colors">
                <CardContent className="p-6 text-center">
                  <Icon className="text-red-400 mx-auto mb-3" size={40} />
                  <h3 className="font-semibold text-white mb-2">{title}</h3>
                  <div className="text-3xl font-bold text-red-400 mb-2">{number}</div>
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
    </div>
  );
}
