import { UserButton } from '@clerk/nextjs'
import { User } from '@clerk/nextjs/dist/types/server'
import { ReactNode } from 'react'

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen w-screen relative">
      <aside className="absolute top-0 w-[25%] left-0 h-full border-r border-black/10">
        Mood
      </aside>
      <div className="ml-[25%] h-full">
        <header className="h-[60px] border-b border-black/10">
          <div className="h-full w-full px-6 flex items-center justify-end">
            <UserButton />
          </div>
        </header>
        <div className="h-[calc(100vh-60px)]">{children}</div>
      </div>
    </div>
  )
}

export default DashboardLayout
