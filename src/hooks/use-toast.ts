
import { toast as sonnerToast } from "sonner";

type ToastProps = {
  title?: string;
  description?: string;
  action?: React.ReactNode;
  variant?: "default" | "destructive";
};

export function toast({ title, description, action, variant }: ToastProps) {
  return sonnerToast(title, {
    description,
    action,
    // Map variant to sonner's style
    style: variant === "destructive" ? { backgroundColor: "var(--destructive)", color: "var(--destructive-foreground)" } : undefined,
  });
}

export const useToast = () => {
  return {
    toast,
    dismiss: sonnerToast.dismiss,
  };
};
