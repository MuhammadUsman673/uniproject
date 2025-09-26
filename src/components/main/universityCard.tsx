import { Checkbox } from "../ui/checkbox";

type UniversityCardProps = {
  universityName: string;
  rating: string;
  reviews: number;
  approvals: string;
  features: string[];
  imageUrl: string;
  tag?: string;
  admissionClosing: string;
  logoUrl?: string;
};

export function UniversityCard({
  universityName,
  rating,
  reviews,
  approvals,
  features,
  imageUrl,
  tag,
  admissionClosing,
  logoUrl,
}: UniversityCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-visible relative w-full border border-gray-200 flex flex-col hover:scale-105 transition-all hover:shadow-[0px_0px_15px_#5c5c5c] ">
      {/* University Image */}
    

      <div className="relative h-64  ">
        <img
          src={imageUrl}
          alt={universityName}
          className="w-full h-full object-cover p-2 rounded-2xl"
        />

        {/* Admission Closing Tag */}
        {admissionClosing && (
          <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full z-10 shadow-md">
            ADMISSION CLOSING ON {admissionClosing}
          </div>
        )}

        {/* University Logo overlay */}
        {logoUrl && (
          <div className="absolute -bottom-3 left-4 bg-white rounded-lg  flex items-center shadow-md z-10">
            <img src={logoUrl} alt="logo" className="w-30 p-1  object-contain" />
          </div>
        )}

        {/* Trending/Top Rated Tag */}
        {tag && (
          <div className="absolute -bottom-1 right-4 bg-[#D9F9A5] text-[#0B8F4F] text-xs px-2 py-1 rounded-full shadow-md font-medium">
            {tag}
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-grow z-10">
        {/* University Name */}
        <div className="text-lg font-bold text-black mb-2 line-clamp-2">
          {universityName}
        </div>

        {/* Rating and Reviews */}
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <span className="text-yellow-500 mr-1">⭐</span> 
          <span className="font-medium">{rating}</span>
          <span className="ml-1">({reviews} Reviews)</span>
        </div>

        {/* Approvals */}
        <p className="text-xs text-gray-500 mb-3 line-clamp-2">{approvals}</p>

        {/* Features */}
        <div className="flex-grow">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center text-sm text-gray-700 mb-1"
            >
              <span className="text-green-500 mr-2">●</span>
              <span className="line-clamp-2">{feature}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="border-t border-gray-200 pt-4 mt-4 mb-4">
          <button className="flex items-center justify-center w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 mb-3 transition-colors duration-200">
            <span className="mr-2">⬇️</span> Download Prospectus
          </button>
          
          <label className="flex items-center justify-center w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 cursor-pointer transition-colors duration-200">
        <Checkbox className="border bg-white shadow-none data-[state=checked]:bg-[#EC1E24] "/>
            <span className="ml-2 text-gray-700">Add to compare</span>
          </label>
        </div>
      </div>

      {/* View Details Button - Positioned to pop out from card */}
      <button className="absolute w-40 -bottom-4 left-[50%] -translate-x-[50%] bg-[#EC1E24] text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors duration-200 font-medium text-sm shadow-lg z-30">
        View Details
      </button>

    </div>
  );
}