export default function RestaurantCard({ restaurant }) {
    return (
      <div className="bg-white border rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden cursor-pointer">
        
        {/* Image */}
        <div className="h-40 bg-slate-200">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-full object-cover"
          />
        </div>
  
        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-slate-900">
            {restaurant.name}
          </h3>
  
          <p className="text-sm text-slate-600 mt-1">
            {restaurant.cuisine}
          </p>
  
          <div className="flex justify-between items-center mt-3">
            <span className="text-sm text-slate-500">
              ⭐ {restaurant.rating}
            </span>
  
            <span className="text-sm text-orange-500 font-medium">
              {restaurant.distance}
            </span>
          </div>
        </div>
      </div>
    );
  }