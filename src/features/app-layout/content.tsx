import { Outlet } from 'react-router-dom'

export const Content = () => {
  return (
    <main>
      <div>
        <Outlet />
      </div>
    </main>
  )
}
