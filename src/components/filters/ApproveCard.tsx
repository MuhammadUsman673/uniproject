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
          className="flex items-center p-1 cursor-pointer hover:bg-neutral  -100"
          onClick={() => handleApprovalClick(approval)}
        >
          <span
            className={`w-2.5 h-2.5 rounded-full mr-2 border border-[#EC1E24] flex items-center justify-center justify-center ${
              selectedApproval === approval ? "bg-white" : ""
            }`}
          >
            {selectedApproval === approval && (
              <span className="w-1.5 h-1.5 bg-[#EC1E24] rounded-full"></span>
            )}
          </span>
          <span className="text-[#282529]">{approval}</span>
        </div>
      ))}
    </CollapsibleCard>
  );
};
