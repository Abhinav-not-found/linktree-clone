import { ArrowLeft, Pencil } from "lucide-react"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"

import useAdmin from "../../hook/useAdmin"

const EditLink = () => {
  const navigate = useNavigate()
  const { linkId } = useParams()

  const [formData, setFormData] = useState({
    title: "",
    url: "",
  })

  const { getLinkByIdHandler, handleUpdateLink } = useAdmin()

  useEffect(() => {
    const fetchLink = async () => {
      const link = await getLinkByIdHandler(linkId)

      if (!link) return

      setFormData({
        title: link.title,
        url: link.url,
      })
    }

    fetchLink()
  }, [linkId])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await handleUpdateLink(linkId, formData)
  }

  return (
    <div className='min-h-screen bg-neutral-950 text-white'>
      <div className='mx-auto max-w-2xl px-6 py-8'>
        <button
          onClick={() => navigate(-1)}
          className='mb-8 flex items-center gap-2 text-neutral-400 transition hover:text-white'
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div className='rounded-3xl border border-neutral-800 bg-neutral-900 p-8'>
          <div className='mb-8'>
            <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-800'>
              <Pencil size={22} />
            </div>

            <h1 className='text-3xl font-bold'>Edit Link</h1>

            <p className='mt-2 text-neutral-400'>
              Update your link title or destination URL.
            </p>
          </div>

          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label className='mb-2 block text-sm font-medium'>Title</label>

              <input
                type='text'
                value={formData.title}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    title: e.target.value,
                  }))
                }
                className='w-full rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3 outline-none transition focus:border-white'
                placeholder='My Portfolio'
              />
            </div>

            <div>
              <label className='mb-2 block text-sm font-medium'>URL</label>

              <input
                type='url'
                value={formData.url}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    url: e.target.value,
                  }))
                }
                className='w-full rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3 outline-none transition focus:border-white'
                placeholder='https://example.com'
              />
            </div>

            <div className='flex justify-end gap-3 pt-4'>
              <button
                type='button'
                onClick={() => navigate(-1)}
                className='rounded-xl border border-neutral-700 px-5 py-3 transition hover:bg-neutral-800'
              >
                Cancel
              </button>

              <button
                type='submit'
                className='rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:bg-neutral-200'
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditLink
