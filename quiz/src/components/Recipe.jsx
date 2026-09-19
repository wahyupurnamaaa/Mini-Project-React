import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Recipe = () => {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedRecipe, setSelectedRecipe] = useState(null)

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/recipes')
        setRecipes(response.data.recipes)
        setLoading(false)
      } catch (err) {
        setError('Failed to fetch recipes. Please try again later.')
        setLoading(false)
      }
    }

    fetchRecipes()
  }, [])

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalf = rating % 1 >= 0.5

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} className="text-yellow-500">★</span>)
    }
    if (hasHalf) {
      stars.push(<span key="half" className="text-yellow-500">☆</span>)
    }
    for (let i = stars.length; i < 5; i++) {
      stars.push(<span key={`empty-${i}`} className="text-gray-300">☆</span>)
    }
    return stars
  }

  const openModal = (recipe) => {
    setSelectedRecipe(recipe)
    document.getElementById('recipe_modal').showModal()
  }

  if (loading) {
    return (
      <div id="recipes" className="py-20 bg-base-200">
        <div className="container mx-auto px-4 text-center">
          <span className="loading loading-spinner loading-lg text-primary"></span>
          <p className="mt-4 text-lg font-medium text-base-content/70">Loading delicious recipes...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div id="recipes" className="py-20 bg-base-200">
        <div className="container mx-auto px-4 text-center">
          <div className="alert alert-error max-w-md mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{error}</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div id="recipes" className="py-16 bg-base-200 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-base-content mb-4">
            Our <span className="text-primary">Recipes</span>
          </h2>
          <p className="text-base-content/60 text-lg max-w-2xl mx-auto">
            Browse through our collection of mouth-watering recipes from various cuisines around the world
          </p>
          <div className="divider max-w-xs mx-auto"></div>
        </div>

        {/* Recipe Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {recipes.map((recipe, index) => (
            <div 
              key={recipe.id} 
              className="card bg-base-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <figure className="relative overflow-hidden">
                <img 
                  src={recipe.image} 
                  alt={recipe.name} 
                  className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3">
                  <div className="badge badge-primary font-semibold">{recipe.cuisine}</div>
                </div>
                <div className="absolute top-3 left-3">
                  <div className="badge badge-secondary font-semibold">{recipe.difficulty}</div>
                </div>
              </figure>
              <div className="card-body p-4">
                <h3 className="card-title text-base font-bold line-clamp-1">{recipe.name}</h3>
                
                {/* Rating */}
                <div className="flex items-center gap-1 text-sm">
                  {renderStars(recipe.rating)}
                  <span className="text-base-content/60 ml-1">({recipe.reviewCount})</span>
                </div>

                {/* Info Tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                  <div className="flex items-center gap-1 text-xs text-base-content/70">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {recipe.prepTimeMinutes + recipe.cookTimeMinutes} min
                  </div>
                  <div className="flex items-center gap-1 text-xs text-base-content/70">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {recipe.servings} servings
                  </div>
                  <div className="flex items-center gap-1 text-xs text-base-content/70">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    </svg>
                    {recipe.caloriesPerServing} cal
                  </div>
                </div>

                {/* Meal Type Badges */}
                <div className="flex flex-wrap gap-1 mt-2">
                  {recipe.mealType.map((type, i) => (
                    <span key={i} className="badge badge-outline badge-sm">{type}</span>
                  ))}
                </div>

                {/* Action Button */}
                <div className="card-actions justify-end mt-3">
                  <button 
                    className="btn btn-primary btn-sm hover:scale-105 transition-transform"
                    onClick={() => openModal(recipe)}
                  >
                    View Recipe
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recipe Detail Modal */}
      <dialog id="recipe_modal" className="modal modal-bottom sm:modal-middle">
        {selectedRecipe && (
          <div className="modal-box max-w-2xl">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <img 
              src={selectedRecipe.image} 
              alt={selectedRecipe.name} 
              className="w-full h-64 object-cover rounded-xl mb-4"
            />
            <h3 className="font-bold text-2xl text-primary">{selectedRecipe.name}</h3>
            
            <div className="flex flex-wrap gap-2 mt-3">
              <div className="badge badge-primary">{selectedRecipe.cuisine}</div>
              <div className="badge badge-secondary">{selectedRecipe.difficulty}</div>
              {selectedRecipe.mealType.map((type, i) => (
                <div key={i} className="badge badge-outline">{type}</div>
              ))}
            </div>

            <div className="flex items-center gap-1 mt-3">
              {renderStars(selectedRecipe.rating)}
              <span className="text-base-content/60 ml-1">{selectedRecipe.rating} ({selectedRecipe.reviewCount} reviews)</span>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="stat bg-base-200 rounded-xl p-3 text-center">
                <div className="stat-title text-xs">Prep Time</div>
                <div className="stat-value text-lg text-primary">{selectedRecipe.prepTimeMinutes}m</div>
              </div>
              <div className="stat bg-base-200 rounded-xl p-3 text-center">
                <div className="stat-title text-xs">Cook Time</div>
                <div className="stat-value text-lg text-primary">{selectedRecipe.cookTimeMinutes}m</div>
              </div>
              <div className="stat bg-base-200 rounded-xl p-3 text-center">
                <div className="stat-title text-xs">Calories</div>
                <div className="stat-value text-lg text-primary">{selectedRecipe.caloriesPerServing}</div>
              </div>
            </div>

            <div className="mt-5">
              <h4 className="font-bold text-lg mb-2">🥘 Ingredients</h4>
              <ul className="list-disc list-inside space-y-1 text-base-content/80">
                {selectedRecipe.ingredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
            </div>

            <div className="mt-5">
              <h4 className="font-bold text-lg mb-2">📝 Instructions</h4>
              <ol className="list-decimal list-inside space-y-2 text-base-content/80">
                {selectedRecipe.instructions.map((instruction, i) => (
                  <li key={i}>{instruction}</li>
                ))}
              </ol>
            </div>

            <div className="mt-5">
              <h4 className="font-bold text-lg mb-2">🏷️ Tags</h4>
              <div className="flex flex-wrap gap-2">
                {selectedRecipe.tags.map((tag, i) => (
                  <span key={i} className="badge badge-primary badge-outline">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        )}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  )
}

export default Recipe
