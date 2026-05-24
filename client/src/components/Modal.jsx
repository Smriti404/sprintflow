import { DialogRoot, DialogTrigger, DialogContent } from "./ui/dialog";

const Modal = ({ trigger, children }) => (
  <DialogRoot>
    <DialogTrigger asChild>{trigger}</DialogTrigger>
    <DialogContent>{children}</DialogContent>
  </DialogRoot>
);

export default Modal;
