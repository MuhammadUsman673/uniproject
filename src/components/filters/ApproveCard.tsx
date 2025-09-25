import { CollapsibleCard } from "./collapsebleCard";

type ApprovalCardProps = {
  selectedApproval: string | null;
  setSelectedApproval: (approval: string | null) => void;
};

export const ApprovalCard = ({
  selectedApproval,
  setSelectedApproval,
}: ApprovalCardProps) => {
  const approvals = ["UGC", "NAAC", "AICTE", "NIRF", "WES", "DEB"];

  const handleApprovalClick = (approval: string) => {
    setSelectedApproval(approval === selectedApproval ? null : approval);
  };

  return (
    <CollapsibleCard title="Approvals">
      {approvals.map((approval) => (
        <div
          key={approval}
          className="flex items-center p-1 cursor-pointer hover:bg-gray-100"
          onClick={() => handleApprovalClick(approval)}
        >
          <span
            className={`w-3 h-3 rounded-full mr-2 border border-gray-400 flex items-center justify-center ${
              selectedApproval === approval ? "bg-[#EC1E24]" : ""
            }`}
          >
            {selectedApproval === approval && (
              <span className="w-1 h-1 bg-white rounded-full"></span>
            )}
          </span>
          <span className="text-gray-700">{approval}</span>
        </div>
      ))}
    </CollapsibleCard>
  );
};
