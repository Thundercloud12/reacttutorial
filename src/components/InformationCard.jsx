import React from 'react'

const InformationCard = ({recipe, onClose}) => {
  return (
 <div className="fixed inset-0 flex items-center justify-center bg-amber-100 bg-opacity-50 z-50">
      <div className="bg-white relative max-w-md h-150 w-150">
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-red-600 hover:text-gray-800 text-2xl"
        >
          X
        </button>
        <div className="h-1/2">
          <img 
            className="w-full h-full object-cover"
            src={recipe.strMealThumb}
            alt="Caffe Latte" 
          />
        </div>
        <div className="h-1/2 p-4 overflow-auto">
          <h2 className="text-xl font-bold mb-4">{recipe.strMeal}</h2>
          <p>Details for recipe: {recipe.strInstructions}</p>
          {/* Insert additional detailed information here */}
        </div>
      </div>
    </div>
  )
}

export default InformationCard
