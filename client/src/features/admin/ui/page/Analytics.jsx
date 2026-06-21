import {
  ArrowLeft,
  BarChart3,
  Link2,
  MousePointerClick,
  User,
} from "lucide-react"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"

import useAdmin from "../../hook/useAdmin"

const Analytics = () => {
  const navigate = useNavigate()
  const { linkId } = useParams()

  const [link, setLink] = useState(null)

  const { fetchAnalytics } = useAdmin()

  useEffect(() => {
    const loadAnalytics = async () => {
      const data = await fetchAnalytics(linkId)

      if (data?.link) {
        setLink(data.link)
      }
    }

    loadAnalytics()
  }, [linkId])

  if (!link) {
    return (
      <div className='min-h-screen bg-neutral-950 text-white flex items-center justify-center'>
        Loading analytics...
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-neutral-950 text-white'>
      <div className='mx-auto max-w-4xl px-6 py-8'>
        <button
          onClick={() => navigate(-1)}
          className='mb-8 flex items-center gap-2 text-neutral-400 transition hover:text-white'
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div className='mb-8'>
          <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-900'>
            <BarChart3 size={22} />
          </div>

          <h1 className='text-3xl font-bold'>Link Analytics</h1>

          <p className='mt-2 text-neutral-400'>
            View performance metrics for this link.
          </p>
        </div>

        <div className='grid gap-6 md:grid-cols-2'>
          {/* Link Details */}
          <div className='rounded-3xl border border-neutral-800 bg-neutral-900 p-6'>
            <h2 className='mb-6 text-lg font-semibold'>Link Information</h2>

            <div className='space-y-5'>
              <div>
                <div className='mb-1 flex items-center gap-2 text-neutral-400'>
                  <Link2 size={16} />
                  Title
                </div>

                <p className='font-medium'>{link.title}</p>
              </div>

              <div>
                <div className='mb-1 text-neutral-400'>URL</div>

                <a
                  href={link.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='break-all text-blue-400 hover:underline'
                >
                  {link.url}
                </a>
              </div>

              <div>
                <div className='mb-1 flex items-center gap-2 text-neutral-400'>
                  <User size={16} />
                  Owner
                </div>

                <p>{link.user?.username}</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className='rounded-3xl border border-neutral-800 bg-neutral-900 p-6'>
            <h2 className='mb-6 text-lg font-semibold'>Performance</h2>

            <div className='rounded-2xl border border-neutral-800 bg-neutral-950 p-6'>
              <div className='mb-3 flex items-center gap-3'>
                <MousePointerClick size={20} />

                <span className='text-neutral-400'>Total Clicks</span>
              </div>

              <p className='text-5xl font-bold'>{link.clicks}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics
