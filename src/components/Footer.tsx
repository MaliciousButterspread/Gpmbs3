import { Heart, Mail, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-stone-800 to-amber-900 text-stone-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-amber-200">Gamberro Pastry</h3>
            <p className="text-sm text-stone-300 leading-relaxed">
              Preserving the sweet traditions of Italy, one recipe at a time. 
              Authentic recipes passed down through generations.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-amber-200">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-stone-300 hover:text-amber-200 transition-colors">
                  All Recipes
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-300 hover:text-amber-200 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-300 hover:text-amber-200 transition-colors">
                  Baking Tips
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-300 hover:text-amber-200 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Connect Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-amber-200">Connect</h3>
            <p className="text-sm text-stone-300 mb-4">
              Join our community of Italian dessert lovers!
            </p>
            <div className="flex gap-3 mb-4">
              <a 
                href="#" 
                className="bg-stone-700 hover:bg-amber-700 p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="size-5" />
              </a>
              <a 
                href="#" 
                className="bg-stone-700 hover:bg-amber-700 p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="size-5" />
              </a>
              <a 
                href="#" 
                className="bg-stone-700 hover:bg-amber-700 p-2 rounded-full transition-colors"
                aria-label="Email"
              >
                <Mail className="size-5" />
              </a>
            </div>
            <p className="text-xs text-stone-400 italic">
              DOP IGP something something sampletext123!
            </p>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-stone-700 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-stone-400">
            © {currentYear} Gamberro Pastry. All rights reserved.
          </p>
          <p className="text-sm text-stone-400 flex items-center gap-2">
            Made with <Heart className="size-4 text-red-400 fill-red-400" /> for Italian desserts
          </p>
          <div className="text-2xl" aria-label="Italian flag">
            🇮🇹
          </div>
        </div>
      </div>
    </footer>
  );
}