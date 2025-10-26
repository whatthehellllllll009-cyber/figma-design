import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus, LayoutGrid, HelpCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Placeholder images
const initialImages = [
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=400&h=300&fit=crop",
];

export function Gallery() {
  const [images, setImages] = useState(initialImages);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Responsive visible images: 1 on mobile, 2 on tablet, 3 on desktop
  const getVisibleImages = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1; // mobile
      if (window.innerWidth < 1024) return 2; // tablet
    }
    return 3; // desktop
  };

  const [visibleImages, setVisibleImages] = useState(getVisibleImages());

  // Update visible images on resize
  useState(() => {
    const handleResize = () => setVisibleImages(getVisibleImages());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  const maxIndex = Math.max(0, images.length - visibleImages);
  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex < maxIndex;

  const handlePrevious = () => {
    setCurrentIndex(Math.max(0, currentIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(Math.min(maxIndex, currentIndex + 1));
  };

  const handleAddImage = () => {
    // Add a new random image from Unsplash
    const imageIds = [
      '1618005182384-a83a8bd57fbe',
      '1634017839464-5c339ebe3cb4',
      '1618556450994-a6a128ef0d9d',
      '1557683316-973673baf926',
      '1620121692029-d088224ddc74',
      '1557682250-33bd709cbe85',
    ];
    const randomId = imageIds[Math.floor(Math.random() * imageIds.length)];
    const newImage = `https://images.unsplash.com/photo-${randomId}?w=400&h=300&fit=crop`;
    setImages([...images, newImage]);
    
    // Optionally scroll to show the new image
    if (images.length >= visibleImages) {
      setCurrentIndex(images.length - visibleImages + 1);
    }
  };

  return (
    <Card className="bg-widget-bg border-widget-border p-3 sm:p-4 md:p-5 rounded-xl md:rounded-2xl shadow-2xl w-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4 md:mb-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between flex-1 gap-3 w-full">
          <h2 className="text-base sm:text-lg md:text-xl font-semibold text-foreground bg-tab-active px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 rounded-lg md:rounded-xl">
            Gallery
          </h2>
          
          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
            <Button
              onClick={handleAddImage}
              className="bg-secondary hover:bg-secondary/80 text-foreground px-3 py-1.5 sm:px-4 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2 transition-all duration-300 text-xs sm:text-sm font-medium"
            >
              <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden xs:inline">ADD IMAGE</span>
              <span className="xs:hidden">ADD</span>
            </Button>
            
            <div className="flex gap-1.5">
              <button
                onClick={handlePrevious}
                disabled={!canScrollLeft}
                className={`p-1.5 sm:p-2 rounded-full transition-all duration-300 ${
                  canScrollLeft
                    ? "bg-secondary hover:bg-secondary/80 text-foreground"
                    : "bg-muted/30 text-muted-foreground cursor-not-allowed"
                }`}
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={handleNext}
                disabled={!canScrollRight}
                className={`p-1.5 sm:p-2 rounded-full transition-all duration-300 ${
                  canScrollRight
                    ? "bg-secondary hover:bg-secondary/80 text-foreground"
                    : "bg-muted/30 text-muted-foreground cursor-not-allowed"
                }`}
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <button className="p-2 rounded-full bg-secondary/30 border border-widget-border hover:bg-secondary/50 transition-all flex-shrink-0">
            <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
          </button>
          <button className="p-2 rounded-full bg-secondary/30 border border-widget-border hover:bg-secondary/50 transition-all flex-shrink-0">
            <LayoutGrid className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
          </button>
        </div>
      </div>

      <div className="relative mt-3 sm:mt-4">
        <div className="overflow-hidden">
          <div
            className="flex gap-2 sm:gap-3 md:gap-4 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleImages + (visibleImages === 1 ? 2 : visibleImages === 2 ? 1.5 : 4 / 3))}%)`,
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 rounded-lg md:rounded-xl overflow-hidden shadow-xl"
                style={{ width: `calc(${100 / visibleImages}% - ${(visibleImages - 1) * (visibleImages === 1 ? 0.5 : visibleImages === 2 ? 0.75 : 1)}rem / ${visibleImages})` }}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-40 sm:h-48 md:h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
