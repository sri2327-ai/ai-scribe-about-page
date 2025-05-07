
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy, Twitter, Linkedin, Facebook, Mail } from "lucide-react";
import { toast } from "sonner";

interface SocialShareDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  url: string;
}

export function SocialShareDialog({ open, onOpenChange, title, description, url }: SocialShareDialogProps) {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    toast.success("Link copied to clipboard!");
  };

  const getTwitterShareUrl = () => {
    return `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${title}\n\n${description}`)}&url=${encodeURIComponent(url)}`;
  };

  const getFacebookShareUrl = () => {
    return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  };

  const getLinkedinShareUrl = () => {
    return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  };

  const getEmailShareUrl = () => {
    return `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${description}\n\n${url}`)}`;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-semibold text-[#143151]">Share this page</DialogTitle>
          <DialogDescription className="text-center text-[#387E89]">
            Share these pricing options with your colleagues
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col gap-4 py-4">
          <div className="flex flex-wrap justify-center gap-4">
            {/* Twitter/X */}
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open(getTwitterShareUrl(), '_blank')}
              className="flex flex-col items-center gap-2 py-6 border-gray-200 hover:bg-gray-50 rounded-xl min-w-[100px]"
            >
              <div className="bg-[#1DA1F2] rounded-full p-3">
                <Twitter className="h-5 w-5 text-white" />
              </div>
              <span className="text-sm font-medium">Twitter</span>
            </Button>
            
            {/* LinkedIn */}
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open(getLinkedinShareUrl(), '_blank')}
              className="flex flex-col items-center gap-2 py-6 border-gray-200 hover:bg-gray-50 rounded-xl min-w-[100px]"
            >
              <div className="bg-[#0077B5] rounded-full p-3">
                <Linkedin className="h-5 w-5 text-white" />
              </div>
              <span className="text-sm font-medium">LinkedIn</span>
            </Button>
            
            {/* Facebook */}
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open(getFacebookShareUrl(), '_blank')}
              className="flex flex-col items-center gap-2 py-6 border-gray-200 hover:bg-gray-50 rounded-xl min-w-[100px]"
            >
              <div className="bg-[#1877F2] rounded-full p-3">
                <Facebook className="h-5 w-5 text-white" />
              </div>
              <span className="text-sm font-medium">Facebook</span>
            </Button>
            
            {/* Email */}
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open(getEmailShareUrl(), '_blank')}
              className="flex flex-col items-center gap-2 py-6 border-gray-200 hover:bg-gray-50 rounded-xl min-w-[100px]"
            >
              <div className="bg-[#EA4335] rounded-full p-3">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <span className="text-sm font-medium">Email</span>
            </Button>
          </div>
          
          {/* Copy Link Section */}
          <div className="relative mt-4">
            <div className="flex items-center">
              <input
                className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#143151] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                value={url}
                readOnly
              />
              <Button 
                variant="ghost" 
                size="sm" 
                className="absolute right-1 px-3 text-[#143151] hover:text-[#387E89] hover:bg-transparent"
                onClick={handleCopyLink}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-xs text-gray-500 text-center">
            By sharing, you agree to our <a href="/terms" className="text-[#143151] hover:underline">Terms of Service</a> and <a href="/privacy" className="text-[#143151] hover:underline">Privacy Policy</a>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
