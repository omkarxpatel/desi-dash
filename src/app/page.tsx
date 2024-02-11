import { buttonVariants } from "@/components/ui/button";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { ArrowRight, Link } from "lucide-react";
import { cn } from "@/lib/utils";
// import { image } from "next/image";
import Image from "next/image";

// use text-orange as theme for now
export default function Home() {
  return (
    <>
      <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
        <div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50'>
          <p className='text-sm font-semibold text-gray-700'>
            Desi Dash is now public!
          </p>
        </div>
        <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
          The {' '}
          <span className='text-orange-600'>Desi Dash</span>{' '}
          Essential Delivery.
        </h1>
        <p className='mt-5 max-w-prose text-zinc-700 sm:text-lg'>
          Your Essentials at Your Doorstep in {' '}
          <span className='text-orange-600'>24 Hours</span>
          {' '}- Tailored for South Asian Students in Fort Collins, Colorado.
        </p>
        <div className={buttonVariants({
          size: 'lg',
          className: 'mt-5',
        })}>
          Get Started
          <ArrowRight className='ml-2 h-5 w-5' /></div>
        </MaxWidthWrapper>

        <div>
          <div className='mx-auto max-w-6xl px-6 lg:px-8 rounded-3xl'>
            <div className='mt-16 flow-root sm:mt-24'>
              <div className='-m-2 rounded-3xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                <Image
                  src='/img.webp'
                  alt='product preview'
                  width={1364}
                  height={866}
                  quality={100}
                  className='rounded-3xl bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10'/>
              </div>
            </div>
          </div>
          
        </div>
      </>
  )
}
