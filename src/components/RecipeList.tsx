import { Link } from 'react-router';
import { recipes } from '../data/recipes';
import { Clock, ChefHat, Users } from 'lucide-react';
import { PandoroScrollProgress } from './PandoroScrollProgress';
import { Header } from './Header';
import { Footer } from './Footer';

export function RecipeList() {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      {/* Pandoro Scroll Progress */}
      <PandoroScrollProgress />
      
      {/* Header */}
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-amber-100 via-stone-100 to-amber-50 py-12 sm:py-16 border-b border-amber-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-center mb-2">Gamberro Pastry</h1>
            <p className="text-center text-stone-600 max-w-2xl mx-auto">
              A curated collection of authentic Italian dessert recipes, 
              from the crispy shells of Sicilian cannoli to the sweet traditions of Christmas panettone.
            </p>
          </div>
        </div>

        {/* Recipe Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <Link
                key={recipe.id}
                to={`/recipe/${recipe.id}`}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-200"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden bg-stone-100">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="mb-2 group-hover:text-amber-700 transition-colors">
                    {recipe.name}
                  </h2>
                  <p className="text-stone-600 mb-4 line-clamp-2">
                    {recipe.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-stone-500">
                    <div className="flex items-center gap-1">
                      <Clock className="size-4" />
                      <span>{recipe.prepTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="size-4" />
                      <span>{recipe.servings}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ChefHat className="size-4" />
                      <span>{recipe.difficulty}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}