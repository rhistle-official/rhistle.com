'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog"

interface AgeDialogProps {
  open: boolean
  onClose: () => void
}

export default function AgeDialog({ open, onClose }: AgeDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>만 14세 이상 동의</DialogTitle>
        </DialogHeader>
        <div className="text-sm leading-relaxed">
          본인은 만 14세 이상이며, 개인정보 수집 및 이용에 대해 충분히 이해하고 이에 동의합니다.
          <br />
          ※ 만 14세 미만은 법정 대리인의 동의가 필요합니다.
        </div>
        <DialogFooter>
          <button onClick={onClose} className="px-4 py-2 bg-[#78b237] text-white rounded">확인</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}