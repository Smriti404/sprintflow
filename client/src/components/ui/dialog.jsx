import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "../../lib/utils";

export const DialogRoot = Dialog.Root;
export const DialogTrigger = Dialog.Trigger;

export const DialogContent = ({ className, children, ...props }) => (
  <Dialog.Portal>
    <Dialog.Overlay className="fixed inset-0 bg-slate-900/40" />
    <Dialog.Content
      className={cn(
        "fixed left-1/2 top-1/2 w-[90vw] max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-6 shadow-card",
        className
      )}
      {...props}
    >
      {children}
    </Dialog.Content>
  </Dialog.Portal>
);
