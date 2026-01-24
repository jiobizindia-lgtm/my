import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FileText, ExternalLink, Maximize2 } from "lucide-react";

interface PdfDropdownProps {
  pdfUrl: string;
  onOpenSameTab: () => void;
}

const PdfDropdown = ({ pdfUrl, onOpenSameTab }: PdfDropdownProps) => {
  const handleOpenNewTab = () => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <FileText className="h-4 w-4" />
          Open PDF
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={onOpenSameTab} className="gap-2 cursor-pointer">
          <Maximize2 className="h-4 w-4" />
          Open in Same Tab
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleOpenNewTab} className="gap-2 cursor-pointer">
          <ExternalLink className="h-4 w-4" />
          Open in New Tab
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PdfDropdown;
