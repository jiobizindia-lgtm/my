import { Button } from "@/components/ui/button";
import { Save, ChevronRight, ChevronLeft, Send } from "lucide-react";

interface ActionButtonsProps {
  onSave: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
  canSave: boolean;
  canGoPrevious: boolean;
  canGoNext: boolean;
  isMobile?: boolean;
}

const ActionButtons = ({
  onSave,
  onPrevious,
  onNext,
  onSubmit,
  canSave,
  canGoPrevious,
  canGoNext,
  isMobile = false,
}: ActionButtonsProps) => {
  if (isMobile) {
    // Mobile layout - horizontal inline buttons
    return (
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={onSave}
          disabled={!canSave}
          className="h-8 px-2"
          title="Save"
        >
          <Save className="h-4 w-4" />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={onPrevious}
          disabled={!canGoPrevious}
          className="h-8 px-2"
          title="Previous"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={onNext}
          disabled={!canGoNext}
          className="h-8 px-2"
          title="Next"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        <Button
          variant="default"
          size="sm"
          onClick={onSubmit}
          className="h-8 px-3 gradient-primary"
          title="Submit"
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  // Desktop/Tablet layout - horizontal below video
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <Button
        variant="outline"
        size="sm"
        onClick={onSave}
        disabled={!canSave}
        className="gap-2"
        title="Save"
      >
        <Save className="h-4 w-4" />
        <span className="hidden sm:inline">Save</span>
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={onPrevious}
        disabled={!canGoPrevious}
        className="gap-2"
        title="Previous"
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="hidden sm:inline">Prev</span>
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={onNext}
        disabled={!canGoNext}
        className="gap-2"
        title="Next"
      >
        <ChevronRight className="h-4 w-4" />
        <span className="hidden sm:inline">Next</span>
      </Button>

      <Button
        variant="default"
        size="sm"
        onClick={onSubmit}
        className="gap-2 gradient-primary"
        title="Submit"
      >
        <Send className="h-4 w-4" />
        <span className="hidden sm:inline">Submit</span>
      </Button>
    </div>
  );
};

export default ActionButtons;
