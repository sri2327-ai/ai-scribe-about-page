
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

const WNLSettingsDialog = () => {
  const { toast } = useToast();

  const handleOptionClick = () => {
    toast({
      title: "Book a Demo",
      description: "Contact us to see how this works in real-time!",
      action: <Button variant="outline" onClick={() => window.location.href='/contact'}>Contact Us</Button>
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">WNL Settings</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-background border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground">Within Normal Limits (WNL) Settings</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 pt-4">
          <div className="space-y-2">
            <h4 className="font-medium text-foreground">If a topic is not addressed:</h4>
            <div className="pl-4 space-y-2">
              <Button variant="ghost" className="w-full justify-start hover:bg-accent text-foreground" onClick={handleOptionClick}>
                Leave the field empty
              </Button>
              <Button variant="ghost" className="w-full justify-start hover:bg-accent text-foreground" onClick={handleOptionClick}>
                Automatically insert "Within Normal Limits"
              </Button>
              <Button variant="ghost" className="w-full justify-start hover:bg-accent text-foreground" onClick={handleOptionClick}>
                Notify provider to review
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium text-foreground">If findings are normal:</h4>
            <div className="pl-4 space-y-2">
              <Button variant="ghost" className="w-full justify-start hover:bg-accent text-foreground" onClick={handleOptionClick}>
                Provide brief summary
              </Button>
              <Button variant="ghost" className="w-full justify-start hover:bg-accent text-foreground" onClick={handleOptionClick}>
                Insert predefined WNL text
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WNLSettingsDialog;
