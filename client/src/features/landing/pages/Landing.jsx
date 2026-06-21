import { ArrowRight, BarChart3, Link2, MousePointerClick } from "lucide-react"
import { useNavigate } from "react-router"

const features = [
  {
    icon: Link2,
    title: "One Link for Everything",
    description:
      "Share all your important links from a single customizable page.",
  },
  {
    icon: MousePointerClick,
    title: "Track Engagement",
    description:
      "Monitor clicks and understand what your audience interacts with.",
  },
  {
    icon: BarChart3,
    title: "Simple Analytics",
    description: "View performance insights and optimize your links easily.",
  },
]

const Landing = () => {
  const navigate = useNavigate()

  return (
    <div className='min-h-screen bg-neutral-950 text-white'>
      {/* Navbar */}
      <header className='border-b border-neutral-800'>
        <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-6'>
          <h1 className='text-xl font-bold'>Linkify</h1>

          <div className='flex items-center gap-3'>
            <button
              onClick={() => navigate("/login")}
              className='rounded-lg px-4 py-2 text-sm hover:bg-neutral-900'
            >
              Login
            </button>

            <button
              onClick={() => navigate("/register")}
              className='rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:bg-neutral-200'
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className='relative overflow-hidden'>
        <div className='absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl' />

        <div className='mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2'>
          <div>
            <span className='rounded-full border border-neutral-700 px-3 py-1 text-sm text-neutral-300'>
              Linktree Clone
            </span>

            <h1 className='mt-6 text-5xl font-bold leading-tight md:text-6xl'>
              Share all your links with a single page.
            </h1>

            <p className='mt-6 max-w-xl text-lg text-neutral-400'>
              Create your personal link page, track engagement, and manage all
              your content from one place.
            </p>

            <div className='mt-8 flex flex-wrap gap-4'>
              <button
                onClick={() => navigate("/register")}
                className='flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-medium text-black hover:bg-neutral-200'
              >
                Get Started
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => navigate("/login")}
                className='rounded-xl border border-neutral-700 px-6 py-3 hover:bg-neutral-900'
              >
                Login
              </button>
            </div>
          </div>

          {/* Preview Card */}
          <div className='flex justify-center'>
            <div className='w-full max-w-sm rounded-3xl border border-neutral-800 bg-neutral-900/60 p-6 backdrop-blur'>
              <div className='flex flex-col items-center'>
                <div className='h-24 w-24 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500' />

                <h2 className='mt-4 text-xl font-semibold'>@johndoe</h2>

                <p className='mt-2 text-center text-sm text-neutral-400'>
                  Creator • Developer • Designer
                </p>

                <div className='mt-8 w-full space-y-3'>
                  {["Portfolio", "YouTube Channel", "GitHub", "Instagram"].map(
                    (item) => (
                      <button
                        key={item}
                        className='w-full rounded-xl bg-neutral-800 py-3 transition hover:bg-neutral-700'
                      >
                        {item}
                      </button>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className='border-t border-neutral-800 py-20'>
        <div className='mx-auto max-w-7xl px-6'>
          <div className='mb-12 text-center'>
            <h2 className='text-3xl font-bold'>
              Everything you need to share online
            </h2>

            <p className='mt-3 text-neutral-400'>
              Build, manage, and analyze your personal link page.
            </p>
          </div>

          <div className='grid gap-6 md:grid-cols-3'>
            {features.map((feature) => {
              const Icon = feature.icon

              return (
                <div
                  key={feature.title}
                  className='rounded-2xl border border-neutral-800 bg-neutral-900 p-6'
                >
                  <Icon className='mb-4 size-8' />

                  <h3 className='mb-2 text-lg font-semibold'>
                    {feature.title}
                  </h3>

                  <p className='text-neutral-400'>{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Landing
