import { LogOut, Plus, Trash2, User } from "lucide-react"
import { useParams } from "react-router"

import Button from "../../../../shared/ui/components/Button"
import { useAuth } from "../../../auth/hooks/useAuth"
import LinkList from "../components/LinkList"

const Admin = () => {
  const { handleLogout, navigate } = useAuth()
  const { username } = useParams()

  return (
    <div className='min-h-screen bg-neutral-950 text-white'>
      <div className='mx-auto max-w-6xl px-6 py-6'>
        {/* Header */}
        <header className='mb-8 flex items-center justify-between'>
          <div>
            <p className='text-sm text-neutral-400'>Dashboard</p>

            <h1 className='mt-1 text-3xl font-bold'>Welcome, {username}</h1>
          </div>

          <Button
            size='sm'
            onClick={handleLogout}
            className='flex items-center gap-2'
          >
            <LogOut size={16} />
            Logout
          </Button>
        </header>

        {/* Profile Card */}
        <div className='mb-8 rounded-3xl border border-neutral-800 bg-neutral-900 p-6'>
          <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
            <div className='flex items-center gap-4'>
              <div className='flex size-14 items-center justify-center rounded-full bg-neutral-800'>
                <User size={24} />
              </div>

              <div>
                <h2 className='font-semibold'>@{username}</h2>

                <p className='text-sm text-neutral-400'>
                  Manage your links and analytics
                </p>
              </div>
            </div>

            {/* <Button size='sm'>Claim Username</Button> */}
          </div>
        </div>

        {/* Actions */}
        <div className='mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
          <div>
            <h2 className='text-xl font-semibold'>Your Links</h2>

            <p className='text-sm text-neutral-400'>
              Manage and track all your links.
            </p>
          </div>

          <div className='flex flex-wrap gap-3'>
            <Button
              size='sm'
              onClick={() => navigate("/admin/add-link")}
              className='flex items-center gap-2'
            >
              <Plus size={16} />
              Add Link
            </Button>

            <Button
              size='sm'
              onClick={() => navigate("/admin/deleted-links")}
              className='flex items-center gap-2'
            >
              <Trash2 size={16} />
              Deleted Links
            </Button>
          </div>
        </div>

        {/* Links Container */}
        <div className='rounded-3xl border border-neutral-800 bg-neutral-900 p-6'>
          <LinkList />
        </div>
      </div>
    </div>
  )
}

export default Admin
