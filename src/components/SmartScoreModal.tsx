import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";
import { useSmartScore } from "@/hooks/useSmartScore";
import SmartScoreForm from "./SmartScoreForm";
import SmartScoreResult from "./SmartScoreResult";
import { useState } from "react";

interface SmartScoreModalProps {
  trigger?: React.ReactNode;
}

const SmartScoreModal = ({ trigger }: SmartScoreModalProps) => {
  const [open, setOpen] = useState(false);
  const { calculateSmartScore, loading, error, result, reset } = useSmartScore();

  const handleSubmit = async (nationalId: string, fullName: string, phone: string) => {
    await calculateSmartScore(nationalId, fullName, phone);
  };

  const handleReset = () => {
    reset();
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) {
      reset();
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="ghost" size="sm" className="gap-2">
            <Brain className="w-4 h-4" />
            <span>امتیاز هوشمند</span>
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-primary" />
            سیستم امتیاز هوشمند
          </DialogTitle>
        </DialogHeader>
        
        {error && (
          <div className="p-3 rounded-lg bg-destructive/10 text-destructive text-sm mb-4">
            {error}
          </div>
        )}

        {result ? (
          <SmartScoreResult result={result} onReset={handleReset} />
        ) : (
          <SmartScoreForm onSubmit={handleSubmit} loading={loading} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SmartScoreModal;
