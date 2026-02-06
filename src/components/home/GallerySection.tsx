export const GallerySection = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop",
      alt: "Medical Laboratory",
    },
    {
      src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop",
      alt: "Healthcare Products",
    },
    {
      src: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=400&h=300&fit=crop",
      alt: "Medical Professional",
    },
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] img-zoom-container animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-primary-foreground font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
