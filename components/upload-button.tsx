import { useState } from "react";
import Dropzone from "react-dropzone";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const UploadButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(v) => {
        if (!v) {
          setIsOpen(v);
        }
      }}
    >
      <DialogTrigger onClick={() => setIsOpen(true)} asChild>
        <Button>Upload PDF</Button>
      </DialogTrigger>

      <DialogContent>
        {/* <UploadDropzone isSubscribed={isSubscribed} /> */}
        example
      </DialogContent>
    </Dialog>
  );
};

export default UploadButton;

interface UploadDropZoneProps {}

const UploadDropzone = ({}: UploadDropZoneProps) => {
  return <Dropzone multiple={false}></Dropzone>;
};
