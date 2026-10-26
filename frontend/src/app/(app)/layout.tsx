import AppSidebar, { APP_SIDEBAR_WIDTH } from '@/components/AppSidebar'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppSidebar />
      <div style={{ marginLeft: APP_SIDEBAR_WIDTH, minWidth: 0 }}>{children}</div>
    </>
  )
}
