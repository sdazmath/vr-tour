import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section className="bg-teal-900 lg:grid lg:h-2/3 lg:place-content-center dark:bg-gray-900">
            <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
                <div className="mx-auto max-w-prose text-center">
                    <h1 className="text-xl font-bold sm:text-5xl text-white">
                        Discover the Vibrant
                        <strong className="text-amber-600"> Campus Life </strong>
                        at Jyothishmathi Institute of Technology & Science
                    </h1>

                    <p className="mt-4 text-base text-pretty sm:text-lg/relaxed text-amber-400">
                        Take a closer look at the heart of JITS—where learning meets life. Explore our modern labs, spacious classrooms,through an immersive tour designed to give you a real feel.
                    </p>

                    <div className="mt-4 flex justify-center gap-4 sm:mt-6">
                        <Link 
                            className="inline-block rounded border text-white hover:text-black  border-white bg-sand px-5 py-3 font-medium shadow-sm transition-colors hover:bg-green-200"
                            to="/tour"
                        >
                            Get Started
                        </Link>

                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero