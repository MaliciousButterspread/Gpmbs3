import { useParams, Link } from 'react-router';
import { recipes } from '../data/recipes';
import { ArrowLeft, Clock, ChefHat, Users, Timer } from 'lucide-react';
import { PandoroScrollProgress } from './PandoroScrollProgress';
import { Header } from './Header';
import { Footer } from './Footer';

export function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === id);

  if (!recipe) {
    return (
      <div className="min-h-screen bg-stone-50 flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="mb-4">Recipe not found</h1>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800"
            >
              <ArrowLeft className="size-4" />
              Back to recipes
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      {/* Pandoro Scroll Progress */}
      <PandoroScrollProgress />
      
      {/* Header */}
      <Header />
      
      {/* Page Header */}
      <div className="bg-white border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 mb-4"
          >
            <ArrowLeft className="size-4" />
            Back to all recipes
          </Link>
          <h1 className="mb-2">{recipe.name}</h1>
          <p className="text-stone-600">
            {recipe.description}
          </p>
        </div>
      </div>

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Image */}
        <div className="aspect-[21/9] rounded-lg overflow-hidden mb-12 shadow-lg">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Left Column - Info & Ingredients */}
          <div className="md:col-span-1 space-y-8">
            {/* Recipe Stats */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-stone-200">
              <h3 className="mb-4">Recipe Info</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-stone-600">
                  <Clock className="size-5 text-amber-700" />
                  <div>
                    <div className="text-xs text-stone-500">Prep Time</div>
                    <div>{recipe.prepTime}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-stone-600">
                  <Timer className="size-5 text-amber-700" />
                  <div>
                    <div className="text-xs text-stone-500">Cook Time</div>
                    <div>{recipe.cookTime}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-stone-600">
                  <Users className="size-5 text-amber-700" />
                  <div>
                    <div className="text-xs text-stone-500">Servings</div>
                    <div>{recipe.servings}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-stone-600">
                  <ChefHat className="size-5 text-amber-700" />
                  <div>
                    <div className="text-xs text-stone-500">Difficulty</div>
                    <div>{recipe.difficulty}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ingredients */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-stone-200">
              <h3 className="mb-4">Ingredients</h3>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start gap-2 text-stone-700">
                    <span className="text-amber-700 mt-1.5">•</span>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Instructions & History */}
          <div className="md:col-span-2 space-y-8">
            {/* Instructions */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-stone-200">
              <h2 className="mb-6">Instructions</h2>
              <ol className="space-y-6">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-700 text-white flex items-center justify-center">
                      {index + 1}
                    </span>
                    <p className="text-stone-700 pt-1">
                      {instruction}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            {/* History */}
            {recipe.history && (
              <div className="bg-amber-50 rounded-lg p-8 border border-amber-200">
                <h3 className="mb-3 text-amber-900">A Taste of History</h3>
                <p className="text-amber-900/80 leading-relaxed">
                  {recipe.history}
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}