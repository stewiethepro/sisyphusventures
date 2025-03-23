import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'

import image1 from '@/images/photos/image-1.png'
import image2 from '@/images/photos/image-2.png'
import image3 from '@/images/photos/image-3.png'
import image4 from '@/images/photos/image-4.png'
import image5 from '@/images/photos/image-5.png'
import { formatDate } from '@/lib/formatDate'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { SimpleLayout } from '@/components/SimpleLayout'
import investing from '@/images/photos/investing.png'
import trading from '@/images/photos/trading.png'
import ecosystem from '@/images/photos/ecosystem.png'
import logoArbitrum from '@/images/logos/arbitrum.svg'
import logoArtblocks from '@/images/logos/artblocks.svg'
import logoAztec from '@/images/logos/aztec.png'
import logoBitcoin from '@/images/logos/bitcoin.svg'
import logoCompound from '@/images/logos/compound.svg'
import logoConstitutiondao from '@/images/logos/constitutiondao.svg'
import logoCow from '@/images/logos/cow.svg'
import logoCryptopunks from '@/images/logos/cryptopunks.png'
import logoCurve from '@/images/logos/curve.svg'
import logoDydx from '@/images/logos/dydx.svg'
import logoEns from '@/images/logos/ens.svg'
import logoEthereum from '@/images/logos/ethereum.svg'
import logoFoundation from '@/images/logos/foundation.png'
import logoGala from '@/images/logos/gala.svg'
import logoGitcoin from '@/images/logos/gitcoin.svg'
import logoGmx from '@/images/logos/gmx.svg'
import logoGnosis from '@/images/logos/gnosis.svg'
import logoHop from '@/images/logos/hop.png'
import logoLens from '@/images/logos/lens.svg'
import logoLooksrare from '@/images/logos/looksrare.svg'
import logoOlympus from '@/images/logos/olympus.svg'
import logoOptimism from '@/images/logos/optimism.svg'
import logoScroll from '@/images/logos/scroll.svg'
import logoStarkware from '@/images/logos/starkware.svg'
import logoSuperrare from '@/images/logos/superrare.png'
import logoTreasure from '@/images/logos/treasure.png'
import logoUrbit from '@/images/logos/urbit.svg'
import logoYuga from '@/images/logos/yuga.png'
import logoZksync from '@/images/logos/zksync.svg'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when we publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

const focusAreas = [
  {
    name: 'Investing',
    description:
      'Investing in assets across infrastructure, scaling, DeFi, gaming and art.',
    link: { href: '#', label: 'Investing' },
    image: investing,
  },
  {
    name: 'Trading',
    description:
      'Trading spot and perpetuals markets.',
    link: { href: '#', label: 'trading' },
    image: trading,
  },
  {
    name: 'Ecosystem',
    description:
      'Engaging in governance and testing of protocols through all stages of development.',
    link: { href: '#', label: 'ecosystem' },
    image: ecosystem,
  },
]

const projects = [
  {
    name: 'Arbitrum',
    description:
      '',
    link: { href: 'https://arbitrum.io/', label: 'arbitrum.io' },
    logo: logoArbitrum,
  },
  {
    name: 'Art Blocks',
    description:
      '',
    link: { href: 'https://artblocks.io/', label: 'artblocks.io' },
    logo: logoArtblocks,
  },
  {
    name: 'Aztec',
    description:
      '',
    link: { href: 'https://aztec.network/', label: 'aztec.network' },
    logo: logoAztec,
  },
  {
    name: 'Bitcoin',
    description:
      '',
    link: { href: 'https://bitcoin.org', label: 'bitcoin.org' },
    logo: logoBitcoin,
  },
  {
    name: 'Compound',
    description:
      '',
    link: { href: 'https://compound.finance/', label: 'compound.finance' },
    logo: logoCompound,
  },
  {
    name: 'Constitution Dao',
    description:
      '',
    link: { href: 'https://www.constitutiondao.com/', label: 'constitutiondao.com' },
    logo: logoConstitutiondao,
  },
  {
    name: 'Cow',
    description:
      '',
    link: { href: 'https://cow.fi/', label: 'cow.fi' },
    logo: logoCow,
  },
  {
    name: 'CryptoPunks',
    description:
      '',
    link: { href: 'https://cryptopunks.app/', label: 'cryptopunks.app' },
    logo: logoCryptopunks,
  },
  {
    name: 'Curve',
    description:
      '',
    link: { href: 'https://curve.fi/', label: 'curve.fi' },
    logo: logoCurve,
  },
  {
    name: 'DyDx',
    description:
      '',
    link: { href: 'https://dydx.exchange/', label: 'dydx.exchange' },
    logo: logoDydx,
  },
  {
    name: 'ENS',
    description:
      '',
    link: { href: 'https://ens.domains/', label: 'ens.domains' },
    logo: logoEns,
  },
  {
    name: 'Ethereum',
    description:
      '',
    link: { href: 'https://ethereum.org/en/', label: 'ethereum.org' },
    logo: logoEthereum,
  },
  {
    name: 'Foundation',
    description:
      '',
    link: { href: 'https://foundation.app', label: 'foundation.app' },
    logo: logoFoundation,
  },
  {
    name: 'Gala',
    description:
      '',
    link: { href: 'https://gala.com/', label: 'gala.com' },
    logo: logoGala,
  },
  {
    name: 'Gitcoin',
    description:
      '',
    link: { href: 'https://www.gitcoin.co/', label: 'gitcoin.co' },
    logo: logoGitcoin,
  },
  {
    name: 'GMX',
    description:
      '',
    link: { href: 'https://gmx.io/', label: 'gmx.io' },
    logo: logoGmx,
  },
  {
    name: 'Gnosis',
    description:
      '',
    link: { href: 'https://www.gnosis.io/', label: 'gnosis.io' },
    logo: logoGnosis,
  },
  {
    name: 'Hop',
    description:
      '',
    link: { href: 'https://www.hop.exchange/', label: 'hop.exchange' },
    logo: logoHop,
  },
  {
    name: 'Lens',
    description:
      '',
    link: { href: 'https://www.lens.xyz/', label: 'lens.xyz' },
    logo: logoLens,
  },
  {
    name: 'LooksRare',
    description:
      '',
    link: { href: 'https://looksrare.org/', label: 'looksrare.org' },
    logo: logoLooksrare,
  },
  {
    name: 'Olympus',
    description:
      '',
    link: { href: 'https://www.olympusdao.finance/', label: 'olympusdao.finance' },
    logo: logoOlympus,
  },
  {
    name: 'Optimism',
    description:
      '',
    link: { href: 'https://www.optimism.io/', label: 'optimism.io' },
    logo: logoOptimism,
  },
  {
    name: 'Scroll',
    description:
      '',
    link: { href: 'https://scroll.io/', label: 'scroll.io' },
    logo: logoScroll,
  },
  {
    name: 'Starkware',
    description:
      '',
    link: { href: 'https://starkware.co/', label: 'starkware.co' },
    logo: logoStarkware,
  },
  {
    name: 'SuperRare',
    description:
      '',
    link: { href: 'https://superrare.com/', label: 'superrare.com' },
    logo: logoSuperrare,
  },
  {
    name: 'Treasure',
    description:
      '',
    link: { href: 'https://treasure.lol/', label: 'treasure.lol' },
    logo: logoTreasure,
  },
  {
    name: 'Urbit',
    description:
      '',
    link: { href: 'https://urbit.org/', label: 'urbit.org' },
    logo: logoUrbit,
  },
  {
    name: 'Yuga',
    description:
      '',
    link: { href: 'https://yuga.com/', label: 'yuga.com' },
    logo: logoYuga,
  },
  {
    name: 'zkSync',
    description:
      '',
    link: { href: 'https://zksync.io/', label: 'zksync.io' },
    logo: logoZksync,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 mb-48 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function Projects() {
  return (
    <>
      <SimpleLayout
        title="We invest, trade & participate."
        intro="We don't just buy crypto assets, we use and deploy them within the ecosystem."
      >

        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 mb-20"
        >
          {focusAreas.map((focusArea) => (
            <Card as="li" key={focusArea.name}>
              <div className="relative z-10 flex items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={focusArea.image}
                  alt=""
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={focusArea.link.href}>{focusArea.name}</Card.Link>
              </h2>
              <Card.Description>{focusArea.description}</Card.Description>
            </Card>
          ))}
        </ul>
    

        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 border-t border-zinc-100 pt-20 dark:border-zinc-700/40"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-indigo-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>
        Diffusion Capital - Digital Asset Investment
        </title>
        <meta
          name="description"
          content="Diffusion Capital - Digital Asset Investment"
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Investing in the new internet.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Diffusion Capital is an investment office focused solely on digital assets.
          </p>
          {/* <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://instagram.com"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div> */}
        </div>
      </Container>
      <Photos />
      <Projects/>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
