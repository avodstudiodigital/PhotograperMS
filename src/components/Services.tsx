
import { Card, CardContent } from '@/components/ui/card';
import { Camera } from 'lucide-react';

const services = [
  {
    title: "Portrait Photography",
    description: "Professional headshots and personal portraits that capture your personality and professional image.",
    price: "Starting at $299",
    features: ["1-2 hour session", "20+ edited photos", "Online gallery", "Print release"]
  },
  {
    title: "Corporate Photography",
    description: "Business headshots and team photography for companies and entrepreneurs.",
    price: "Starting at $499",
    features: ["On-location shooting", "Multiple setups", "50+ edited photos", "Quick turnaround"]
  },
  {
    title: "Lifestyle Sessions",
    description: "Natural, candid photography that tells your story in authentic settings.",
    price: "Starting at $399",
    features: ["2-3 hour session", "Multiple locations", "30+ edited photos", "Creative direction"]
  },
  {
    title: "Event Photography",
    description: "Professional coverage of your special events, celebrations, and milestones.",
    price: "Starting at $799",
    features: ["Full event coverage", "100+ edited photos", "Online gallery", "Print options"]
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text dark:bg-gradient-to-r dark:from-white dark:via-gray-300 dark:to-white dark:bg-clip-text dark:text-transparent">
            Photography Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Professional photography services tailored to meet your unique needs. 
            Each session is customized to capture your vision and personality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className={`group hover-lift glass-card border-0 shadow-xl animate-fade-in-up dark:bg-gray-800/80 dark:border-gray-700/20`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Camera className="w-8 h-8 text-white dark:text-gray-900" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <div className="text-center mb-4">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">{service.price}</span>
                  </div>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
