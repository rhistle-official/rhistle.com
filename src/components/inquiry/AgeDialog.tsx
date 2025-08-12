'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog"
import { useTranslations } from "next-intl";

interface AgeDialogProps {
  open: boolean
  onClose: () => void
}

export default function AgeDialog({ open, onClose }: AgeDialogProps) {
  const t = useTranslations("inquiry.ageDialog");

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>{t("title")}</DialogTitle>
        </DialogHeader>
        <div className="text-sm leading-relaxed">
          {t("body.line1")}
          <br />
          {t("body.line2")}
        </div>
        <DialogFooter>
          <button onClick={onClose} className="px-4 py-2 bg-[#78b237] text-white rounded">{t("confirm")}</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}