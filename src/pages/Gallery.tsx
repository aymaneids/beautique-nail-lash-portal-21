
import { useState, useEffect } from 'react';
import PageHeader from '@/components/common/PageHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

// For a real site, these would be actual images from a CMS
// Using gradient placeholders for the demo
const categories = [
  { id: 'all', name: 'All Work' },
  { id: 'nail-art', name: 'Nail Art' },
  { id: 'manicures', name: 'Manicures' },
  { id: 'pedicures', name: 'Pedicures' },
  { id: 'lashes', name: 'Lash Extensions' },
];

// Sample gallery items with gradient colors as placeholders
const galleryItems = [
  {
    id: 1,
    title: 'Pink Ombré Nails',
    category: 'nail-art',
    gradient: 'from-pink-200 to-pink-400',
  },
  {
    id: 2,
    title: 'Classic French Manicure',
    category: 'manicures',
    gradient: 'from-sky-100 to-indigo-200',
  },
  {
    id: 3,
    title: 'Marble Nail Art',
    category: 'nail-art',
    gradient: 'from-gray-200 to-gray-400',
  },
  {
    id: 4,
    title: 'Volume Lash Extensions',
    category: 'lashes',
    gradient: 'from-purple-200 to-purple-400',
  },
  {
    id: 5,
    title: 'Spa Pedicure',
    category: 'pedicures',
    gradient: 'from-blue-200 to-blue-400',
  },
  {
    id: 6,
    title: 'Glitter Accent Nails',
    category: 'nail-art',
    gradient: 'from-amber-200 to-amber-400',
  },
  {
    id: 7,
    title: 'Classic Lash Extensions',
    category: 'lashes',
    gradient: 'from-indigo-200 to-indigo-400',
  },
  {
    id: 8,
    title: 'Gel Manicure',
    category: 'manicures',
    gradient: 'from-rose-200 to-rose-400',
  },
  {
    id: 9,
    title: 'Deluxe Pedicure',
    category: 'pedicures',
    gradient: 'from-teal-200 to-teal-400',
  },
  {
    id: 10,
    title: 'Acrylic Nails',
    category: 'manicures',
    gradient: 'from-orange-200 to-orange-400',
  },
  {
    id: 11,
    title: 'Hybrid Lash Extensions',
    category: 'lashes',
    gradient: 'from-violet-200 to-violet-400',
  },
  {
    id: 12,
    title: 'Floral Nail Art',
    category: 'nail-art',
    gradient: 'from-emerald-200 to-emerald-400',
  },
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [filteredItems, setFilteredItems] = useState(galleryItems);
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  // Update document title
  useEffect(() => {
    document.title = 'Gallery | Beautique Nails & Lash Lounge';
  }, []);

  useEffect(() => {
    if (activeTab === 'all') {
      setFilteredItems(galleryItems);
    } else {
      setFilteredItems(galleryItems.filter(item => item.category === activeTab));
    }
  }, [activeTab]);

  return (
    <main className="animate-fadeIn py-16 md:py-24">
      <PageHeader
        title="Our Gallery"
        subtitle="Browse our curated selection of nail art and lash extension designs. Get inspired for your next visit!"
      />
      
      <div className="container-custom">
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <div className="flex justify-center mb-10">
            <TabsList className="bg-brand-light">
              {categories.map(category => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="px-4 py-2 data-[state=active]:bg-brand-gold data-[state=active]:text-white"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredItems.map((item, index) => (
                <Dialog key={item.id}>
                  <DialogTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className="p-0 h-auto w-full rounded-lg overflow-hidden hover:opacity-90 transition-opacity duration-300 animate-fade-up shadow-elegant"
                      style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                      onClick={() => setSelectedItem(item)}
                    >
                      <AspectRatio ratio={1 / 1} className="w-full">
                        <div className={`w-full h-full bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                          <span className="font-serif text-white text-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
                            {item.title}
                          </span>
                        </div>
                      </AspectRatio>
                    </Button>
                  </DialogTrigger>
                  
                  <DialogContent className="sm:max-w-lg">
                    <AspectRatio ratio={1 / 1} className="w-full rounded-lg overflow-hidden">
                      <div className={`w-full h-full bg-gradient-to-br ${item.gradient}`}></div>
                    </AspectRatio>
                    <h3 className="text-xl font-serif mt-2">{item.title}</h3>
                    <p className="text-muted-foreground">
                      {item.category === 'nail-art' && 'Beautiful nail art design created by our talented technicians.'}
                      {item.category === 'manicures' && 'Elegant manicure service that leaves your nails looking perfect.'}
                      {item.category === 'pedicures' && 'Relaxing pedicure treatment for gorgeous, healthy feet.'}
                      {item.category === 'lashes' && 'Stunning lash extensions that enhance your natural beauty.'}
                    </p>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-16 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Love what you see? These are just examples of what our talented technicians can create. 
            Book your appointment today and let us know what style inspires you!
          </p>
          <Button asChild className="bg-brand-gold hover:bg-brand-gold/90 text-white">
            <a href="/booking">Book an Appointment</a>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Gallery;
