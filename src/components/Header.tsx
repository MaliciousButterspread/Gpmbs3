import { Link } from 'react-router';
import { ChefHat } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-amber-50 to-stone-50 border-b-2 border-amber-200 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <Link to="/" className="flex items-center gap-3 w-fit group">
          <div className="bg-amber-700 p-2 sm:p-3 rounded-full group-hover:bg-amber-800 transition-colors">
            <ChefHat className="size-6 sm:size-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-amber-900 group-hover:text-amber-950 transition-colors">
              Gamberro Pastry
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 italic">
              Dolci tradizionali italiani
            </p>
          </div>
        </Link>
      </div>
    </header>
  );
}
