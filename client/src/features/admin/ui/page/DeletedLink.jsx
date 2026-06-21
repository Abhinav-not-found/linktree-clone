import { ArrowLeft, Trash2 } from "lucide-react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

import useAdmin from "../../hook/useAdmin"
import LinkElement from "../components/LinkElement"

const DeletedLink = () => {
  const navigate = useNavigate()

  const [deletedLinks, setDeletedLinks] = useState([])

  const { fetchDeletedLinks } = useAdmin()

  useEffect(() => {
    fetchDeletedLinks().then((data) => {
      if (data?.links) {
        setDeletedLinks(data.links)
      }
    })
  }, [])

  return (
    <div className='min-h-screen bg-neutral-950 text-white'>
      <div className='mx-auto max-w-5xl px-6 py-8'>
        <button
          onClick={() => navigate(-1)}
          className='mb-8 flex items-center gap-2 text-neutral-400 transition hover:text-white'
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div className='mb-8'>
          <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-900'>
            <Trash2 size={22} />
          </div>

          <h1 className='text-3xl font-bold'>Deleted Links</h1>

          <p className='mt-2 text-neutral-400'>
            Links moved to trash can be permanently removed from here.
          </p>
        </div>

        <div className='rounded-3xl border border-neutral-800 bg-neutral-900 p-6'>
          {deletedLinks.length === 0 ? (
            <div className='flex flex-col items-center justify-center py-20 text-center'>
              <Trash2 size={48} className='mb-4 text-neutral-600' />

              <h2 className='text-xl font-semibold'>No deleted links</h2>

              <p className='mt-2 text-neutral-400'>
                Deleted links will appear here.
              </p>
            </div>
          ) : (
            <div className='space-y-3'>
              {deletedLinks.map((l) => (
                <LinkElement key={l._id} l={l} deletePermanent={true} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DeletedLink
