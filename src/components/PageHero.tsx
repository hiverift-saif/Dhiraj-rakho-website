interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
  return (
    <section 
      className="relative h-[60vh] flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(30, 64, 175, 0.3) 50%, rgba(0, 0, 0, 0.7) 100%),
          radial-gradient(ellipse at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%),
          url('${backgroundImage}')`
      }}
    >
      {/* Elegant overlay with subtle animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
      
      {/* Subtle decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto drop-shadow-lg">
          {subtitle}
        </p>
      </div>
    </section>
  );
}