import { useState } from 'react'

function Navbar() {
  const [nav, setNav] = useState(false)
  const [navBackground, setNavBackground] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavBackground(true)
    } else {
      setNavBackground(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  const handleNav = () => {
    setNav((prev) => !prev)
  }
  const styles = {
    navLink: `relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
    before:bottom-0 before:left-0 before:bg-black
    before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
    before:transition before:ease-in-out before:duration-1000 font-normal`,
  }
  return (
    <>
      <nav className='bg-slate-100 dark:bg-dark text-dark dark:text-slate-100 '>
        <div className='p-4 container mx-auto max-w-7xl'>
          <div className='flex items-center justify-between relative'>
            {/* Logo */}
            <div className='flex space-x-2 items-center justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-10 h-10'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5'
                />
              </svg>
              <h1 className='text-2xl font-semibold'>Academy</h1>
            </div>
            {/* Menu */}
            <div className='hidden lg:flex items-center space-x-10 '>
              <a href='#' className={styles.navLink}>
                Home
              </a>
              <a href='#' className={styles.navLink}>
                Courses
              </a>
              <a href='#' className={styles.navLink}>
                About
              </a>
              <a href='#' className={styles.navLink}>
                Contact
              </a>
            </div>
            {/* Hamburger */}
            <div onClick={handleNav} className='lg:hidden'>
              {nav ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-8 h-8'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-8 h-8'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                  />
                </svg>
              )}
            </div>
            {/* Dropdown Menu */}
            <div
              className={`absolute bg-slate-100 dark:bg-dark ${
                nav ? 'block' : 'hidden'
              } container mx-auto w-full rounded-lg top-16`}
            >
              <div className='flex flex-col items-center space-y-8 p-4 my-10 font-light'>
                <a href='#' className={styles.navLink}>
                  Home
                </a>
                <a href='#' className={styles.navLink}>
                  Classes
                </a>
                <a href='#' className={styles.navLink}>
                  Schedule
                </a>
                <a href='#' className={styles.navLink}>
                  About
                </a>
                <a href='#' className={styles.navLink}>
                  Blog
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
