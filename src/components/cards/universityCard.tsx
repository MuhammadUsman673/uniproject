import { useSelection } from "@/contexts/selectionContext";
import { Checkbox } from "../ui/checkbox";
import clsx from "clsx";

type UniversityCardProps = {
  universityName: string;
  rating: string;
  reviews: number;
  approvals: string;
  features: string[];
  imageUrl: string;
  tag?: { text: string; varient?: "green" | "orange" };
  admissionClosing: string;
  logoUrl?: string;
  index: number;
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
  index,
}: UniversityCardProps) {
  const { selectedItems, setSelectedItems } = useSelection();

  // Selection logic
  const isSelected = selectedItems.has(index);
  const isMaxReached = selectedItems.size >= 3 && !isSelected;

  const handleSelect = () => {
    const newSelection = new Set(selectedItems);

    if (isSelected) {
      newSelection.delete(index);
    } else {
      if (newSelection.size < 3) {
        newSelection.add(index);
      }
    }
    setSelectedItems(newSelection);
  };

  return (
    <div className="bg-white md:w-[17.25rem] min-h-[27.95rem] rounded-2xl shadow-md overflow-visible relative border border-neutral-200 flex flex-col hover:scale-105 transition-all hover:shadow-[0px_0px_15px_#a1a1a1]">
      {/* University Image */}
      <div className="relative">
        <img
          src={imageUrl}
          alt={universityName}
          className="w-full md:h-[11.563rem] object-cover p-2 rounded-2xl"
        />

        {/* Admission Closing Tag */}
        {admissionClosing &&
          (index < 3 ? (
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 text-[0.625rem] flex justify-center text-white w-[132px] h-[25px]">
              <img src="/images/uni-card-top.svg" className="absolute" />
              <div className="z-50 leading-tight">
                <span className="block text-center">ADMISSION CLOSING</span>
                <span className="block text-center">ON {admissionClosing}</span>
              </div>
            </div>
          ) : (
            <div className="absolute text-[0.625rem] top-2 right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full z-10 shadow-md">
              ADMISSION CLOSING ON {admissionClosing}
            </div>
          ))}

        {/* University Logo */}
        {logoUrl && (
          <div className="absolute w-[5.4rem] h-[2.25rem] -bottom-3 left-4 bg-white rounded-lg flex items-center shadow-md z-10">
            <img src={logoUrl} alt="logo" className="w-30 p-1 object-contain" />
          </div>
        )}

        {/* Tag */}
        {tag && (
          <div
            className={clsx(
              "absolute -bottom-1 right-4 bg-[#D9F9A5] text-[#0B8F4F] text-[0.625rem] px-2 py-[1px] rounded-full shadow-md font-medium",
              tag.varient === "orange"
                ? "text-white bg-[#F97000]"
                : "bg-[#D9F9A5] text-[#0B8F4F]"
            )}
          >
            {tag.text}
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-grow z-10">
        <div className="text-base font-bold text-black mb-2 line-clamp-1">
          {universityName}
        </div>

        {/* Rating */}
        <div className="flex items-center bg-red-50 w-fit px-2 text-neutral-600 text-[0.625rem] mb-2 h-[1.25rem]">
          <span className="text-yellow-500 mr-1">⭐</span>
          <span className="font-medium">{rating}</span>
          <span className="ml-1">({reviews} Reviews)</span>
        </div>

        <p className="text-[0.625rem] text-neutral-500 mb-3 line-clamp-2">
          {approvals}
        </p>

        {/* Features */}
        <div className="flex-grow">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex items-center text-sm text-neutral-700 text-[0.75rem] mb-1"
            >
              <span className="text-green-500 mr-2">●</span>
              <span className="line-clamp-2">{feature}</span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="border-t border-neutral-200 pt-4 mt-4 mb-4 text-[0.75rem]">
          <button className="flex items-center justify-center w-full bg-neutral-100 text-neutral-700 px-4 h-[1.815rem] rounded-md hover:bg-neutral-200 mb-3 transition-colors duration-200">
            <span className="mr-2">⬇️</span> Download Prospectus
          </button>

          <button
            onClick={handleSelect}
            disabled={isMaxReached}
            className={`flex items-center justify-center w-full px-4 h-[1.815rem] rounded-md transition-colors duration-200 ${
              isSelected
                ? " bg-neutral-100 "
                : isMaxReached
                ? "bg-neutral-200 text-neutral-400 cursor-not-allowed"
                : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
            }`}
          >
            <Checkbox
              checked={isSelected}
              className="border bg-white shadow-none data-[state=checked]:bg-[#EC1E24]"
            />
            <span className="ml-2">
              {isSelected ? "Added to Compare" : "Add to Compare"}
            </span>
          </button>
        </div>
      </div>

      {/* View Details */}
      <button className="absolute w-[7rem] h-[1.4rem] text-[0.75rem] -bottom-4 left-[50%] -translate-x-[50%] bg-[#EC1E24] text-white px-4 rounded-full hover:bg-red-600 transition-colors duration-200 font-medium text-sm shadow-lg z-30">
        View Details
      </button>
    </div>
  );
}
