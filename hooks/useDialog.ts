import { useState } from "react";

export const useDialog = (initVisible = false) => {
  const [open, setOpen] = useState(initVisible);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleToggle = () => setOpen(!open);

  return { open, handleOpen, handleClose, handleToggle };
};
