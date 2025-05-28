
import { Button } from '@/components/ui/button';
import { Camera } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 to-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-gray-200/50 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-gray-200/50 to-transparent rounded-full blur-3xl animate-float animation-delay-400"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-center mb-6 animate-scale-in animation-delay-200">
            <Camera className="w-12 h-12 text-gray-700 mr-3" />
            <span className="text-lg text-gray-600 font-medium">Professional Photography</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 gradient-text animate-fade-in-up animation-delay-400">
            Capturing Life's
            <br />
            <span className="bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 bg-clip-text text-transparent">
              Beautiful Moments
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-600">
            Professional portrait and lifestyle photography that tells your unique story. 
            Creating timeless memories with artistic vision and technical excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-800">
            <Button 
              onClick={() => scrollToSection('portfolio')}
              size="lg"
              className="bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 transition-all duration-300 text-lg px-8 py-3 hover-lift"
            >
              View My Work
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              size="lg"
              className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:bg-gray-50 transition-all duration-300 text-lg px-8 py-3 hover-lift"
            >
              Book a Session
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
