import { Progress } from "@/components/ui/progress";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps,
}) => {
  const progressValue = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-[#fbc710]">
          Step {currentStep} of {totalSteps}
        </span>
      </div>
      <Progress value={progressValue} className="h-4 rounded bg-gray-200" />
    </div>
  );
};

export default ProgressBar;
