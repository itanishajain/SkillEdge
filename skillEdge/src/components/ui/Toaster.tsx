import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action, ...props }) => (
        <Toast
          key={id}
          {...props}
          className="bg-gray-900 text-white shadow-lg rounded-lg p-4 border border-gray-700"
        >
          <div className="grid gap-1">
            {title && <ToastTitle className="text-lg font-semibold">{title}</ToastTitle>}
            {description && <ToastDescription className="text-sm opacity-90">{description}</ToastDescription>}
          </div>
          {action}
          <ToastClose />
        </Toast>
      ))}
      <ToastViewport className="bottom-4 right-4 fixed" />
    </ToastProvider>
  );
}
