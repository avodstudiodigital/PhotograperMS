
import { useState } from 'react';
import { Card } from '@/components/ui/card';

const portfolioImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Portrait",
    title: "Professional Headshot"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Corporate",
    title: "Business Portrait"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Architecture",
    title: "Modern Building"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Lifestyle",
    title: "Creative Session"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Portrait",
    title: "Natural Light Portrait"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Architecture",
    title: "Urban Photography"
  }
];

const categories = ["All", "Portrait", "Corporate", "Lifestyle", "Architecture"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const filteredImages = activeCategory === "All" 
    ? portfolioImages 
    : portfolioImages.filter(img => img.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text">
            My Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of my finest work, showcasing the diversity and quality 
            of professional photography across different styles and subjects.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up animation-delay-200">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio grid */}
        <div className="portfolio-grid">
          {filteredImages.map((image, index) => (
            <Card 
              key={image.id}
              className={`group overflow-hidden border-0 shadow-lg hover-lift animate-scale-in`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredImage(image.id)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`image-overlay flex items-end p-6 ${
                  hoveredImage === image.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="text-white">
                    <span className="text-sm font-medium text-gray-300">{image.category}</span>
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
