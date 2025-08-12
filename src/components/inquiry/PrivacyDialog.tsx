'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog"
import { useTranslations } from "next-intl"

interface PrivacyDialogProps {
  open: boolean
  onClose: () => void
}

export default function PrivacyDialog({ open, onClose }: PrivacyDialogProps) {
  const t = useTranslations("inquiry.privacyDialog")

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-h-[80vh] overflow-y-auto w-full max-w-2xl">
        <DialogHeader>
          <DialogTitle>{t("title")}</DialogTitle>
        </DialogHeader>
        <div className="text-sm leading-relaxed space-y-3">
          {t.raw("content").map((paragraph: string, idx: number) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
        <DialogFooter>
          <button onClick={onClose} className="px-4 py-2 bg-[#78b237] text-white rounded">
            {t("confirm")}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}