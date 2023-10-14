import RibbonBgSvg from '@components/RibbonBgSvg.tsx'
import { SiGithub, SiTelegram, SiTwitter } from '@icons-pack/react-simple-icons'
import { useWindowSize } from '@uidotdev/usehooks'
import { PropsWithChildren } from 'react'

function U({ children }: PropsWithChildren) {
  return <span className="underline decoration-tertiary-500 decoration-2">{children}</span>
}

function Footer() {
  return (
    <footer className="flex flex-col pt-4 font-sans md:block [&>*]:py-1">
      <a href="https://twitter.com/TargaryenLiu" target="_blank" rel="noreferrer">
        <SiTwitter className="inline-block" />
        {' @TargaryenLiu'}
      </a>
      <span className="hidden md:inline"> / </span>
      <a href="https://t.me/GaryTargaryen" target="_blank" rel="noreferrer">
        <SiTelegram className="inline-block" />
        {' @GaryTargaryen'}
      </a>
      <span className="hidden md:inline"> / </span>
      <a href="https://github.com/TargaryenGary" target="_blank" rel="noreferrer">
        <SiGithub className="inline-block" />
        {' @TargaryenGary'}
      </a>
      <br />
      <span>
        Made with <span className="text-red-500">❤</span> by{' '}
        <a href="https://github.com/ShellWen" target="_blank" rel="noreferrer">
          ShellWen
        </a>
      </span>
    </footer>
  )
}

function Content() {
  return (
    <div className="flex flex-col items-center justify-center break-words p-16 text-center md:items-end md:text-right lg:p-24">
      <header className="text-6xl font-black">Gary</header>
      <div className="mt-2 text-lg italic">
        Lorem <U>ipsum</U> dolor sit <U>amet</U>, <U>consectetur</U> adipiscing elit
      </div>
      <div className="mt-2 text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
        in culpa qui officia deserunt mollit anim id est laborum.
      </div>
      <Footer />
    </div>
  )
}

function App() {
  const { width, height } = useWindowSize()
  return (
    <main className="relative w-screen bg-primary-200 text-primary-100 md:text-primary-950">
      <div className="fixed h-screen w-screen">{width && height && <RibbonBgSvg width={width} height={height}></RibbonBgSvg>}</div>
      <div className="font-sans-serif absolute left-0 top-0 flex min-h-screen w-full backdrop-brightness-50 md:backdrop-filter-none">
        <div className="flex w-0 grow flex-col items-center justify-center md:w-2/5"></div>
        <div className="flex w-full grow flex-col items-center justify-center md:w-3/5 md:justify-end">
          <Content />
        </div>
      </div>
    </main>
  )
}

export default App
