
const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text">
              Hello, I'm Alexandra
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                With over 8 years of experience in professional photography, I specialize in 
                capturing authentic moments that tell compelling stories. My passion lies in 
                portrait photography, where I can connect with people and showcase their 
                unique personalities.
              </p>
              <p>
                My approach combines technical expertise with artistic vision, ensuring every 
                session results in stunning, timeless images. I believe that photography is 
                not just about taking pictures—it's about preserving emotions, relationships, 
                and the beauty of life's fleeting moments.
              </p>
              <p>
                Based in the heart of the city, I work with individuals, families, and 
                professionals who want to celebrate their stories through beautiful imagery. 
                Every photo session is tailored to reflect your personality and vision.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div className="text-center animate-scale-in animation-delay-200">
                <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center animate-scale-in animation-delay-400">
                <div className="text-3xl font-bold text-gray-900 mb-2">8+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center animate-scale-in animation-delay-600">
                <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-gray-600">Awards Won</div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in-up animation-delay-400">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Alexandra Stone - Professional Photographer"
                className="rounded-2xl shadow-2xl w-full hover-lift"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
