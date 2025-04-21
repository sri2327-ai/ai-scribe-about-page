
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
      <DialogContent className="sm:max-w-md bg-white border-gray-200">
        <DialogHeader>
          <DialogTitle className="text-gray-800">Within Normal Limits (WNL) Settings</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 pt-4">
          <div className="space-y-2">
            <h4 className="font-medium text-gray-800">If a topic is not addressed:</h4>
            <div className="pl-4 space-y-2">
              <Button variant="ghost" className="w-full justify-start hover:bg-gray-100 text-gray-700" onClick={handleOptionClick}>
                Leave the field empty
              </Button>
              <Button variant="ghost" className="w-full justify-start hover:bg-gray-100 text-gray-700" onClick={handleOptionClick}>
                Automatically insert "Within Normal Limits"
              </Button>
              <Button variant="ghost" className="w-full justify-start hover:bg-gray-100 text-gray-700" onClick={handleOptionClick}>
                Notify provider to review
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium text-gray-800">If findings are normal:</h4>
            <div className="pl-4 space-y-2">
              <Button variant="ghost" className="w-full justify-start hover:bg-gray-100 text-gray-700" onClick={handleOptionClick}>
                Provide brief summary
              </Button>
              <Button variant="ghost" className="w-full justify-start hover:bg-gray-100 text-gray-700" onClick={handleOptionClick}>
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
