
import { toast } from "sonner";
import { useToast as useShadcnToast } from "@/hooks/use-toast";

// Export the sonner toast function and the shadcn useToast hook
export const useToast = useShadcnToast;
export { toast };
