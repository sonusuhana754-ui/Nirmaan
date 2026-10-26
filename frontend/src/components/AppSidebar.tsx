'use client'

import type { CSSProperties } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

export const APP_SIDEBAR_WIDTH = 198

const links = [
  { label: 'Dashboard', href: '/dashboard', mark: '▦' },
  { label: 'Scanner', href: '/scanner', mark: '◎' },
  { label: 'Studio', href: '/studio', mark: '⌁' },
  { label: 'Discovery Hub', href: '/discover', mark: '▣' },
  { label: 'Internships', href: '/internships', mark: '▤' },
  { label: 'Hackathons', href: '/hackathons', mark: '◉' },
  { label: 'Grooming Lab', href: '/grooming', mark: '✂' },
  { label: 'Tech Radar', href: '/tech-radar', mark: '◒' },
]

export default function AppSidebar() {
  const pathname = usePathname() ?? ''
  const router = useRouter()

  return (
    <aside style={asideStyle}>
      <div style={{ height: 70, display: 'flex', alignItems: 'center', padding: '0 16px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ fontSize: 21, fontWeight: 950, color: '#fff', letterSpacing: -1.2 }}>
          Nirmaan<span style={{ color: '#52D273' }}>.</span>
        </div>
      </div>

      <nav style={{ paddingTop: 18 }}>
        {links.map((item) => {
          const active = pathname === item.href || pathname.startsWith(item.href + '/')
          return (
            <Link key={item.label} href={item.href} style={{ ...linkStyle, ...(active ? linkActiveStyle : {}) }}>
              <span style={{ width: 18, color: active ? '#fff' : 'rgba(255,255,255,0.32)' }}>{item.mark}</span>
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      <div style={{ marginTop: 'auto', padding: 16, borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <button
          onClick={async () => { await supabase.auth.signOut(); router.push('/login') }}
          style={{ width: '100%', border: '1px solid rgba(255,255,255,0.09)', background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.55)', borderRadius: 10, padding: '9px 10px', fontSize: 12, cursor: 'pointer' }}
        >
          Sign out
        </button>
      </div>
    </aside>
  )
}

const asideStyle: CSSProperties = {
  position: 'fixed',
  left: 0,
  top: 0,
  bottom: 0,
  width: APP_SIDEBAR_WIDTH,
  background: '#101010',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '18px 0 36px rgba(13,13,13,0.08)',
  zIndex: 10,
}

const linkStyle: CSSProperties = {
  height: 38,
  padding: '0 15px',
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  color: 'rgba(255,255,255,0.38)',
  textDecoration: 'none',
  fontSize: 12,
  borderRight: '3px solid transparent',
}

const linkActiveStyle: CSSProperties = {
  background: 'rgba(255,255,255,0.07)',
  color: '#fff',
  borderRightColor: '#54D37A',
}
