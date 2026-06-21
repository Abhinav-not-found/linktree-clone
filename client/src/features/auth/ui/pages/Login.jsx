import { useForm } from "react-hook-form"
import { Link } from "react-router"
import { useAuth } from "../../hooks/useAuth"

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const { handleLogin } = useAuth()

  return (
    <div className='min-h-screen bg-neutral-950 text-white'>
      <div className='mx-auto flex min-h-screen max-w-7xl'>
        {/* Left Side */}
        <div className='hidden flex-1 items-center justify-center border-r border-neutral-800 lg:flex'>
          <div className='max-w-md px-10'>
            <h1 className='text-5xl font-bold leading-tight'>
              One link for everything.
            </h1>

            <p className='mt-6 text-lg text-neutral-400'>
              Share your content, social profiles, portfolio, and more from a
              single customizable page.
            </p>

            <div className='mt-10 rounded-3xl border border-neutral-800 bg-neutral-900 p-6'>
              <div className='flex flex-col items-center'>
                <div className='h-20 w-20 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500' />

                <h3 className='mt-4 font-semibold'>@johndoe</h3>

                <div className='mt-6 w-full space-y-3'>
                  {["Portfolio", "GitHub", "YouTube"].map((item) => (
                    <div
                      key={item}
                      className='rounded-xl bg-neutral-800 py-3 text-center'
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className='flex flex-1 items-center justify-center px-6'>
          <div className='w-full max-w-md'>
            <div className='mb-8'>
              <h2 className='text-3xl font-bold'>Welcome back</h2>

              <p className='mt-2 text-neutral-400'>
                Login to manage your links and analytics.
              </p>
            </div>

            <form onSubmit={handleSubmit(handleLogin)} className='space-y-5'>
              <div>
                <label className='mb-2 block text-sm font-medium'>Email</label>

                <input
                  type='email'
                  placeholder='john@example.com'
                  {...register("email", {
                    required: "Email is required",
                  })}
                  className='w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 outline-none transition focus:border-white'
                />

                {errors.email && (
                  <p className='mt-1 text-sm text-red-500'>
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className='mb-2 block text-sm font-medium'>
                  Password
                </label>

                <input
                  type='password'
                  placeholder='Enter your password'
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className='w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 outline-none transition focus:border-white'
                />

                {errors.password && (
                  <p className='mt-1 text-sm text-red-500'>
                    {errors.password.message}
                  </p>
                )}
              </div>

              <button
                type='submit'
                className='w-full rounded-xl bg-white py-3 font-medium text-black transition hover:bg-neutral-200'
              >
                Login
              </button>
            </form>

            <p className='mt-6 text-center text-neutral-400'>
              Don't have an account?{" "}
              <Link
                to='/register'
                className='font-medium text-white hover:underline'
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
