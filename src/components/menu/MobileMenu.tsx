'use client'

import { useEffect, useState } from 'react'
import Menu from '@/components/menu/Menu'
import DrawerMenu from './DrawerMenu'

export default function MobileMenu () {
  const [open, setOpen] = useState(false)

  // 바디 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

    return (
      <>
        <button
          type="button"
          aria-label="전체 메뉴 열기"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="inline-flex items-center rounded-md p-2 hover:bg-white/10"
        >
          <Menu />
        </button>
        <DrawerMenu open={open} onClose={() => setOpen(false)} />
      </>
    )
  }