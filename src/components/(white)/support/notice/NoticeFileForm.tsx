import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface FileFormProps {
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
  setIsChanging?: React.Dispatch<React.SetStateAction<boolean>>;
}

const NoticeFileForm = ({setFiles, setIsChanging }: FileFormProps) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;

    if (selectedFiles) {
      setFiles((prev) => [...prev, ...selectedFiles]);
      if (setIsChanging) {
        setIsChanging(true);
      }
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <Label
          className="cursor-pointer rounded bg-[#78b237] px-6 py-2 text-white transition-colors hover:bg-[#78b237]/90"
          htmlFor="fileInput"
        >
          첨부 파일
        </Label>
        <Input
          id="fileInput"
          type="file"
          multiple
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default NoticeFileForm;