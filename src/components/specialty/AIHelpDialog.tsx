
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ListCheck, MessageSquareQuote } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

const AIHelpDialog = () => {
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
        <Button variant="secondary" size="sm" className="gap-2">
          <MessageSquareQuote className="h-4 w-4" />
          AI Help
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Modify Created Section</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 pt-4">
          <Button variant="outline" className="w-full justify-start gap-2" onClick={handleOptionClick}>
            <ListCheck className="h-4 w-4" />
            Switch to List
          </Button>
          <Button variant="outline" className="w-full justify-start gap-2" onClick={handleOptionClick}>
            Add More Detail
          </Button>
          <Button variant="outline" className="w-full justify-start gap-2" onClick={handleOptionClick}>
            Reduce Detail
          </Button>
          <Button variant="outline" className="w-full justify-start gap-2" onClick={handleOptionClick}>
            Specify Format
          </Button>
          <Button variant="outline" className="w-full justify-start gap-2" onClick={handleOptionClick}>
            Other
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AIHelpDialog;
