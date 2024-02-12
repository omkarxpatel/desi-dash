import { buttonVariants } from "@/components/ui/button";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { ArrowRight, Link } from "lucide-react";
import Image from "next/image";
import Footer from "@/components/Footer";

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

        <div className='relative isolate flex items-center justify-center'>
          <div className='mx-auto max-w-6xl lg: rounded-3xl'>
            <div className='mt-2 flow-root sm:mt-2 w-full mx-auto'>
              <div className='-m-2 bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 rounded-2xl lg:p-4 mx-auto'>
                <Image
                  src='/img.webp'
                  alt='product preview'
                  width={558}
                  height={390}
                  quality={100}
                  style={{ aspectRatio: 1 }}
                  className='rounded-2xl bg-white p-2 sm:p-8 md:p-8 shadow-2xl ring-1 ring-gray-900/10'
                />
              </div>
            </div>
          </div>
        </div>
        
        <Footer></Footer>
      </>
  )
}
