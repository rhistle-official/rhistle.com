'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog"

interface PrivacyDialogProps {
  open: boolean
  onClose: () => void
}

export default function PrivacyDialog({ open, onClose }: PrivacyDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-h-[80vh] overflow-y-auto w-full max-w-2xl">
        <DialogHeader>
          <DialogTitle>개인정보 수집 및 이용 동의</DialogTitle>
        </DialogHeader>
        <div className="text-sm leading-relaxed space-y-3">
          <p>
            나무아이앤씨 홈페이지는 서비스 이용을 위해 필요한 최소한의 개인정보만을 “문의” 게시판에서 이용자가 입력한 정보에 한해 수집합니다.
            귀하가 나무아이앤씨 홈페이지의 서비스를 이용하기 위해서는 이메일을 입력하셔야 하며, 입력하신 정보는 서비스 제공에 사용됩니다.
          </p>
          <p><strong>수집항목:</strong> 이메일(필수)</p>
          <p><strong>이용목적:</strong> 문의 내용 답변 목적</p>
          <p><strong>보유기간:</strong> 1년 또는 관련 법령에 따름</p>
          <p>
            귀하는 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있으며, 동의하지 않을 경우 서비스 이용에 제한이 있을 수 있습니다.
          </p>
        </div>
        <DialogFooter>
          <button onClick={onClose} className="px-4 py-2 bg-[#78b237] text-white rounded">
            확인
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}