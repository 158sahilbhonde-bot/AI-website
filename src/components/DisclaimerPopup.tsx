import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface DisclaimerPopupProps {
  language?: string; // For future multi-language support
}

const DisclaimerPopup: React.FC<DisclaimerPopupProps> = ({ language = 'en' }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasAcceptedDisclaimer = localStorage.getItem('disclaimerAccepted');
    if (!hasAcceptedDisclaimer) {
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('disclaimerAccepted', 'true');
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white font-semibold">AI</span>
            </div>
            <DialogTitle className="text-xl">Welcome to AI Health & Happiness</DialogTitle>
          </div>
        </DialogHeader>

        <DialogDescription className="space-y-4 mt-4 text-foreground/90">
          <p>
            This website and all its content are the exclusive property of Shah Happiness Foundation and its partners. 
            Please note that this website is currently in its early development phase and is not intended for public or mass release.
          </p>
          <p>
            By proceeding, you agree not to share your login credentials or grant access to anyone who is not authorized 
            to view this page without prior approval from Shah Happiness Foundation.
          </p>
          <p>
            Your feedback is greatly appreciated as we continue to enhance the user interface and experience in the coming days.
          </p>
          <p>
            By clicking "Accept," you acknowledge that you have read and understood this disclaimer and agree to abide by these terms.
          </p>
        </DialogDescription>

        <DialogFooter className="mt-6">
          <Button
            variant="hero"
            onClick={handleAccept}
            className="w-full sm:w-auto"
          >
            Accept
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DisclaimerPopup;