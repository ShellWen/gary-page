import RibbonBgSvg from '@components/RibbonBgSvg.tsx'
import { useWindowSize } from '@uidotdev/usehooks'
import React from 'react'
import {FaArrowRight, FaGithub, FaInstagram, FaTelegram, FaTwitter} from 'react-icons/fa6'

function FooterDivider() {
  return <span className="hidden md:inline"> / </span>
}

function FooterLink({
  href,
  icon,
  text,
}: {
  href: string
  icon: React.ComponentType<{
    className?: string | undefined
  }>
  text: string
}) {
  const Icon = icon
  return (
    <a href={href} target="_blank" rel="noreferrer" className="inline-block font-medium">
      <Icon className="inline-block" />
      {text}
    </a>
  )
}

function Footer() {
  return (
    <footer className="flex flex-col pt-4 font-sans md:block [&>*]:py-1">
      <FooterLink href="https://twitter.com/TargaryenLiu" icon={FaTwitter} text=" @TargaryenLiu" />
      <FooterDivider />
      <FooterLink href="https://t.me/GaryTargaryen" icon={FaTelegram} text=" @GaryTargaryen" />
      <FooterDivider />
      <FooterLink href="https://github.com/TargaryenGary" icon={FaGithub} text=" @TargaryenGary" />
      <FooterDivider />
      <FooterLink href="https://www.instagram.com/TargaryenLiu/" icon={FaInstagram} text=" @TargaryenLiu" />
      <br />
      <div>
        Made with <span className="text-red-500">❤</span> by{' '}
        <a href="https://github.com/ShellWen" target="_blank" rel="noreferrer">
          ShellWen
        </a>
      </div>
      <div>
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer" className="text-sm text-inherit">
          苏ICP备2023004319号-1
        </a>
      </div>
    </footer>
  )
}

function Content() {
  return (
    <div className="flex flex-col items-center justify-center break-words p-16 md:items-start lg:p-24">
      <header className="text-6xl font-black">Gary</header>
      <div className="mt-2 text-center text-lg italic md:text-left w-full">To see a World in a Grain of Sand And a Heaven in a Wild Flower</div>
      <div className="mt-2 text-left text-xl w-full">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Hey there, I'm <b>Gary</b> from <b>Nanjing, China</b>.<br />
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        I'm a junior studying <b>Electronic Engineering.</b>
        <br />
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Beyond that, I'm all about <b>humanities</b>, <b>history</b>, <b>philosophy</b>, and <b>psychology</b>.<br />
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        You'll catch me splashing <b>in the pool</b> or smashing shuttlecocks on the <b>badminton court</b>, living my best water and
        racquet life!
        <br />
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        And yeah, I'm a total <b>car enthusiast</b>.
      </div>
      <div className="mt-2 text-left text-lg w-full">
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        <a href="https://blog.targaryenliu.com" target="_blank" className="font-bold">
          <FaArrowRight className="inline-block"/>More in Blog
        </a>
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
      <div className="absolute left-0 top-0 flex min-h-screen w-full font-sans-serif backdrop-brightness-50 md:backdrop-filter-none">
        <div className="flex w-full grow flex-col items-center justify-center md:w-3/5 md:justify-end">
          <Content />
        </div>
        <div className="flex w-0 grow flex-col items-center justify-center md:w-2/5"></div>
      </div>
    </main>
  )
}

export default App
