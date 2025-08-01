import { HardHat, Check, GraduationCap, Briefcase, DollarSign, Users, Phone, MapPin, Clock, Award, Wrench, Building, Truck, Factory } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Workers() {
  const digitalSkills = [
    'Basic computer literacy',
    'Online communication tools',
    'Digital payment systems',
    'E-commerce platforms'
  ];

  const jobPortalFeatures = [
    'Local job listings',
    'Skill-based matching',
    'Resume building tools',
    'Interview preparation'
  ];

  const skillPrograms = [
    {
      icon: Wrench,
      title: 'Plumbing',
      description: 'Professional plumbing installation and repair skills',
      duration: '3-4 months',
      earning: '₹20,000-40,000/month',
      certification: 'Government certified',
      jobs: ['Residential plumber', 'Commercial plumber', 'Pipe fitter', 'Water system technician']
    },
    {
      icon: Building,
      title: 'Construction',
      description: 'Building construction, masonry, and finishing work',
      duration: '4-6 months',
      earning: '₹18,000-35,000/month',
      certification: 'NSDC certified',
      jobs: ['Mason', 'Carpenter', 'Painter', 'Construction supervisor']
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Industrial machinery operation and quality control',
      duration: '2-3 months',
      earning: '₹15,000-28,000/month',
      certification: 'Industry certified',
      jobs: ['Machine operator', 'Quality inspector', 'Production assistant', 'Technician']
    },
    {
      icon: Truck,
      title: 'Logistics',
      description: 'Transportation, delivery, and warehouse management',
      duration: '1-2 months',
      earning: '₹16,000-30,000/month',
      certification: 'Commercial license',
      jobs: ['Delivery driver', 'Warehouse worker', 'Logistics coordinator', 'Truck driver']
    }
  ];

  const jobOpportunities = [
    {
      title: 'Daily Wage Jobs',
      description: 'Immediate employment opportunities for daily income',
      opportunities: ['Construction sites', 'Loading/unloading', 'Cleaning services', 'Gardening work'],
      avgPay: '₹300-500/day'
    },
    {
      title: 'Contract Work',
      description: 'Short-term projects with fixed duration and payment',
      opportunities: ['Home renovation', 'Painting projects', 'Electrical work', 'Maintenance jobs'],
      avgPay: '₹15,000-25,000/month'
    },
    {
      title: 'Full-time Employment',
      description: 'Permanent positions with regular salary and benefits',
      opportunities: ['Factory jobs', 'Security guard', 'Driver positions', 'Office assistant'],
      avgPay: '₹18,000-35,000/month'
    }
  ];

  const governmentSchemes = [
    {
      title: 'Pradhan Mantri Kaushal Vikas Yojana (PMKVY)',
      description: 'Free skill development training with monetary reward upon completion',
      benefit: '₹8,000 reward + job placement assistance',
      eligibility: 'Age 18-45, basic education preferred'
    },
    {
      title: 'Deen Dayal Upadhyaya Grameen Kaushalya Yojana',
      description: 'Rural employment generation through skill development',
      benefit: 'Free training + guaranteed job placement',
      eligibility: 'Rural youth from poor families'
    },
    {
      title: 'Mahatma Gandhi National Rural Employment Guarantee Act',
      description: 'Guaranteed 100 days of employment per year',
      benefit: '₹200+ per day + job security',
      eligibility: 'Adult member of rural household'
    },
    {
      title: 'Stand Up India',
      description: 'Bank loans for starting own business/service',
      benefit: '₹10 lakh to ₹1 crore loan',
      eligibility: 'Skilled workers wanting to start business'
    }
  ];

  return (
    <div>
      {/* Header Section */}
      <section className="py-16 bg-[#2a2c37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-purple-100 px-4 py-2 rounded-full mb-4">
              <HardHat className="text-purple-600 mr-2" size={20} />
              <span className="text-purple-600 font-medium">For Workers</span>
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">Skill Development & Job Opportunities</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Connecting workers with digital skills training and employment opportunities for career growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow bg-[#3a3c47] text-white border-gray-600">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Digital Skills Training</h3>
                <ul className="space-y-3 text-gray-300">
                  {digitalSkills.map((skill, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="text-purple-600 mr-3" size={18} />
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-[#3a3c47] text-white border-gray-600">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Job Portal Access</h3>
                <ul className="space-y-3 text-gray-300">
                  {jobPortalFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="text-purple-600 mr-3" size={18} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skill Development Programs */}
      <section className="py-16 bg-[#2a2c37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Professional Skill Training Programs</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Get certified in high-demand skills and increase your earning potential with government-backed training programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skillPrograms.map(({ icon: Icon, title, description, duration, earning, certification, jobs }, index) => (
              <Card key={index} className="bg-[#3a3c47] hover:shadow-lg transition-shadow border-gray-600">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <Icon className="text-purple-500 mx-auto mb-3" size={40} />
                    <h3 className="font-semibold text-white mb-2">{title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{description}</p>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm">
                      <Clock className="text-blue-400 mr-2" size={14} />
                      <span className="text-gray-300">{duration}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <DollarSign className="text-green-400 mr-2" size={14} />
                      <span className="text-green-400">{earning}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Award className="text-yellow-400 mr-2" size={14} />
                      <span className="text-gray-300">{certification}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-white mb-2">Job Opportunities:</h4>
                    <ul className="space-y-1">
                      {jobs.slice(0, 2).map((job, idx) => (
                        <li key={idx} className="text-xs text-gray-300 flex items-center">
                          <div className="w-1 h-1 bg-purple-400 rounded-full mr-2"></div>
                          {job}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Opportunities */}
      <section className="py-16 bg-[#2a2c37]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Employment Opportunities</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Find immediate work opportunities based on your current skills and experience level
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {jobOpportunities.map(({ title, description, opportunities, avgPay }, index) => (
              <Card key={index} className="bg-[#3a3c47] hover:shadow-lg transition-shadow border-gray-600">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-white mb-3 text-lg">{title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-white mb-2">Available Jobs:</h4>
                    <ul className="space-y-2">
                      {opportunities.map((opportunity, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-center">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                          {opportunity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-green-500/20 text-green-400 px-3 py-2 rounded-lg text-sm font-medium text-center mb-4">
                    Average Pay: {avgPay}
                  </div>

                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    Find Jobs
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
            <h2 className="text-3xl font-bold text-white mb-4">Government Employment Schemes</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Take advantage of government programs that provide free training, employment guarantees, and financial support
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
                  <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white">
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
