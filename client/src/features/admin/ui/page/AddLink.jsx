import { ArrowLeft, Link2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"

import useAdmin from "../../hook/useAdmin"

const AddLink = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const { handleAddLink } = useAdmin()

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
              <Link2 size={22} />
            </div>

            <h1 className='text-3xl font-bold'>Add New Link</h1>

            <p className='mt-2 text-neutral-400'>
              Add a new destination to your profile page.
            </p>
          </div>

          <form onSubmit={handleSubmit(handleAddLink)} className='space-y-6'>
            <div>
              <label className='mb-2 block text-sm font-medium'>Title</label>

              <input
                type='text'
                placeholder='My Portfolio'
                {...register("title", {
                  required: "Title is required",
                })}
                className='w-full rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3 outline-none transition focus:border-white'
              />

              {errors.title && (
                <p className='mt-2 text-sm text-red-500'>
                  {errors.title.message}
                </p>
              )}
            </div>

            <div>
              <label className='mb-2 block text-sm font-medium'>URL</label>

              <input
                type='url'
                placeholder='https://example.com'
                {...register("url", {
                  required: "URL is required",
                })}
                className='w-full rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3 outline-none transition focus:border-white'
              />

              {errors.url && (
                <p className='mt-2 text-sm text-red-500'>
                  {errors.url.message}
                </p>
              )}
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
                Add Link
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddLink
