import {
Sprout,
CloudSun,
BarChart3,
Tractor,
GraduationCap,
DollarSign,
MapPin,
Calendar,
Phone,
BookOpen,
Users,
Thermometer,
Droplets,
Bug,
Package,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Farmers() {
const cropRecommendations: Record<string, string> = {
January: 'Wheat',
February: 'Barley',
March: 'Maize',
April: 'Sunflower',
May: 'Cotton',
June: 'Paddy',
July: 'Soyabean',
August: 'Groundnut',
September: 'Bajra',
October: 'Sorghum (Jowar)',
November: 'Chickpea (Gram)',
December: 'Mustard',
};

const getCurrentMonthCrop = () => {
const monthName = new Date().toLocaleString('default', { month: 'long' });
return {
month: monthName,
crop: cropRecommendations[monthName] ?? 'No recommendation available',
};
};

const { month: currentMonth, crop: bestCrop } = getCurrentMonthCrop();

return (

<div>
{/* Header Section */}
<section className="py-16 bg-[#2a2c37]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<div className="inline-flex items-center bg-blue-50 px-4 py-2 rounded-full mb-4">
<Sprout className="text-viksit-blue mr-2" size={20} />
<span className="text-viksit-blue font-medium">For Farmers</span>
</div>
<h1 className="text-3xl font-bold text-white mb-4">Smart Agriculture Solutions</h1>
<p className="text-lg text-gray-300 max-w-3xl mx-auto">
Empowering farmers with technology for better crop yields, market access, and sustainable farming practices
</p>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
{solutions.map(({ icon: Icon, title, description }, index) => (
<Card key={index} className="bg-[#3a3c47] hover:shadow-lg transition-shadow border-gray-600">
<CardContent className="p-6 text-center">
<Icon className="text-viksit-blue text-3xl mb-4 mx-auto" size={48} />
<h3 className="font-semibold text-white mb-2">{title}</h3>
<p className="text-sm text-gray-300">{description}</p>
</CardContent>
</Card>
))}
</div>
</div>
</section>

{/* Best Crop for the Month */}
<section className="py-16 bg-[#2a2c37]">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl font-bold text-white mb-4">Best Crop for {currentMonth}</h2>
<p className="text-lg text-gray-300 mb-6">
Based on seasonal conditions and farming trends, the recommended crop for this month is:
</p>
<div className="inline-block bg-[#3a3c47] border border-gray-600 p-6 rounded-lg shadow-md">
<h3 className="text-2xl font-semibold text-green-400">{bestCrop}</h3>
<p className="text-gray-300 mt-2">
Consider planting or preparing for this crop to optimize your yield.
</p>
</div>
</div>
</section>

{/* MSP Prices Section */}
<section className="py-16 bg-[#2a2c37]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-bold text-white mb-4">Minimum Support Price (MSP) 2024-25</h2>
<p className="text-lg text-gray-300 max-w-3xl mx-auto">
Government guaranteed minimum prices for major crops to ensure fair income for farmers
</p>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16">
{mspCrops.slice(0, 12).map(({ crop, msp, season, type }, index) => (
<Card key={index} className="bg-[#3a3c47] hover:shadow-lg transition-shadow border-gray-600">
<CardContent className="p-4">
<div className="text-center">
<h3 className="font-semibold text-white mb-2">{crop}</h3>
<div className="text-2xl font-bold text-green-400 mb-2">{msp}</div>
<div className="text-xs text-gray-400 mb-1">per quintal</div>
<div className="flex justify-between text-xs">
<span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded">{season}</span>
<span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded">{type}</span>
</div>
</div>
</CardContent>
</Card>
))}
</div>

<div className="text-center">
<Button className="bg-green-600 hover:bg-green-700 text-white">
<BarChart3 className="mr-2" size={16} />
View All MSP Rates
</Button>
</div>
</div>
</section>

{/* Modern Farming Techniques */}
<section className="py-16 bg-[#2a2c37]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-bold text-white mb-4">Modern Farming Techniques</h2>
<p className="text-lg text-gray-300 max-w-3xl mx-auto">
Learn and implement latest farming methods to increase productivity and reduce costs
</p>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
{farmingTechniques.map(({ icon: Icon, title, description, techniques }, index) => (
<Card key={index} className="bg-[#3a3c47] hover:shadow-lg transition-shadow border-gray-600">
<CardContent className="p-6">
<div className="text-center mb-4">
<Icon className="text-green-400 mx-auto mb-3" size={40} />
<h3 className="font-semibold text-white mb-2">{title}</h3>
<p className="text-gray-300 text-sm mb-4">{description}</p>
</div>
<ul className="space-y-2 mb-4">
{techniques.map((technique, idx) => (
<li key={idx} className="text-gray-300 text-xs flex items-center">
<div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
{technique}
</li>
))}
</ul>
<Button className="w-full bg-green-600 hover:bg-green-700 text-white">
Learn More
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
<h2 className="text-3xl font-bold text-white mb-4">Government Schemes for Farmers</h2>
<p className="text-lg text-gray-300 max-w-3xl mx-auto">
Take advantage of government programs designed to support farmers and improve agricultural income
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
<Button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white">
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
