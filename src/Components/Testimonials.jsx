export default function Testimonials() {
  return (
    <>
      <section className="bg-white m-auto">
        <div className="border-t pb-10 pt-10 mb-10">
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-500 text-center sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
            Testimonials
          </h1>
          <p className="text-center mt-6 lg:text-4xl font-medium text-gray-900 sm:text-center md:text-xl sm:text-sm sm:p-4">
          Here are some of the testimonies from our happy clients.
          </p>
        </div>
        <div className="relative mx-auto lg:w-11/12 lg:grid lg:grid-cols-3 grid-rows-2 gap-x-3.5 row-gap-4.5 md:px-6 lg:px-0 md:gap-y-3.5 ">
          <div id="testimonial" className="bg-emerald-800 py-12 px-4 sm:px-6 md:flex md:flex-col md:mb-10 md:py-16 md:pl-10 md:pr-10 lg:pr-16">
            <div className="md:flex-shrink-0">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/tuple-logo-indigo-300.svg"
                alt="Tuple"
              />
            </div>
            <blockquote className="mt-6 md:flex md:flex-grow md:flex-col">
              <div className="relative text-lg font-medium text-white md:flex-grow">
                <svg
                  className="absolute top-0 left- h-8 w-8 -translate-x-3 -translate-y-2"
                  fill="white"
                  viewBox="0 0 30 38"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative px-2 py-3">
                We were so impressed with the selection of nannies on the app. We were able to find the perfect nanny for our family in no time. The messaging system and calendar feature made it easy for us to schedule interviews and appointments. We highly recommend this app to any parent looking for a trustworthy and reliable nanny.
                </p>
              </div>
              <footer className="mt-8">
                <div className="flex items-start">
                  <div className="inline-flex flex-shrink-0 rounded-full border-2 border-white">
                    <img
                      className="h-12 w-12 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-base font-medium text-white">
                      Judith Black
                    </div>
                    <div className="text-base font-medium text-indigo-200">
                      CEO, Tuple
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
          <div id="testimonial"  className="bg-emerald-800 border-t-2 border-indigo-900 py-12 px-4 md:mb-10 sm:px-6 md:border-t-0 md:border-l md:py-16 md:pr-0 md:pl-10 lg:pl-16">
            <div className="md:flex-shrink-0">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/workcation-logo-indigo-300.svg"
                alt="Workcation"
              />
            </div>
            <blockquote className="mt-6 md:flex md:flex-grow md:flex-col">
              <div className="relative text-lg font-medium text-white md:flex-grow">
                <svg
                  className="absolute top-0 left- h-8 w-8 -translate-x-3 -translate-y-2"
                  fill="white"
                  viewBox="0 0 30 38"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative px-2 py-3">
                Our experience with the app was nothing short of amazing. We were able to find a nanny with the qualifications and experience we were looking for, and the process was so much easier than trying to find a nanny through other means. We feel very lucky to have found our nanny through this app and highly recommend it to other parents.
                </p>
              </div>
              <footer className="mt-8">
                <div className="flex items-start">
                  <div className="inline-flex flex-shrink-0 rounded-full border-2 border-white">
                    <img
                      className="h-12 w-12 rounded-full"
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-base font-medium text-white">
                      Joseph Rodriguez
                    </div>
                    <div className="text-base font-medium text-indigo-200">
                      CEO, Workcation
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
          <div id="testimonial"  className="bg-emerald-800  border-t-2 md:mb-10 py-12 px-4 sm:px-6 md:border-t-0 md:border-l md:py-16 md:pr-0 md:pl-10 lg:pl-16">
            <div className="md:flex-shrink-0">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/workcation-logo-indigo-300.svg"
                alt="Workcation"
              />
            </div>
            <blockquote className="mt-6 md:flex md:flex-grow md:flex-col">
              <div className="relative text-lg font-medium text-white md:flex-grow">
                <svg
                  className="absolute top-0 left- h-8 w-8 -translate-x-3 -translate-y-2"
                  fill="white"
                  viewBox="0 0 30 38"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative px-2 py-3">
                We were a bit skeptical about using a nanny app at first, but it ended up being a lifesaver for us. The thorough background checks and qualifications of the nannies on the platform gave us peace of mind, and we were able to find a fantastic nanny for our children.</p>
              </div>
              <footer className="mt-8">
                <div className="flex items-start">
                  <div className="inline-flex flex-shrink-0 rounded-full border-2 border-white">
                    <img
                      className="h-12 w-12 rounded-full"
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-base font-medium text-white">
                      Joseph Rodriguez
                    </div>
                    <div className="text-base font-medium text-indigo-200">
                      CEO, Workcation
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
          <div id="testimonial"  className="bg-emerald-800  border-t-2 md:mb-10  py-12 px-4 sm:px-6 md:border-t-0 md:border-l md:py-16 md:pr-0 md:pl-10 lg:pl-16">
            <div className="md:flex-shrink-0">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/workcation-logo-indigo-300.svg"
                alt="Workcation"
              />
            </div>
            <blockquote className="mt-6 md:flex md:flex-grow md:flex-col">
              <div className="relative text-lg font-medium text-white md:flex-grow">
                <svg
                  className="absolute top-0 left- h-8 w-8 -translate-x-3 -translate-y-2"
                  fill="white"
                  viewBox="0 0 30 38"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative px-2 py-3">
                We couldn't be happier with the app. We have been using the service for a few months now and have had nothing but positive experiences. The nannies on the app are professional and reliable, and the search feature makes it easy to find the perfect nanny for our family. We highly recommend this app to other parents.
                </p>
              </div>
              <footer className="mt-8">
                <div className="flex items-start">
                  <div className="inline-flex flex-shrink-0 rounded-full border-2 border-white">
                    <img
                      className="h-12 w-12 rounded-full"
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-base font-medium text-white">
                      Joseph Rodriguez
                    </div>
                    <div className="text-base font-medium text-indigo-200">
                      CEO, Workcation
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
          <div id="testimonial"  className="bg-emerald-800  border-t-2 md:mb-10 py-12 px-4 sm:px-6 md:border-t-0 md:border-l md:py-16 md:pr-0 md:pl-10 lg:pl-16">
            <div className="md:flex-shrink-0">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/workcation-logo-indigo-300.svg"
                alt="Workcation"
              />
            </div>
            <blockquote className="mt-6 md:flex md:flex-grow md:flex-col">
              <div className="relative text-lg font-medium text-white md:flex-grow">
                <svg
                  className="absolute top-0 left- h-8 w-8 -translate-x-3 -translate-y-2"
                  fill="white"
                  viewBox="0 0 30 38"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative px-2 py-3">
                I have been using this app for the past 6 months and I can't recommend it enough. The nannies on the app are qualified, experienced and have been vetted by the app's team. The app's messaging system and calendar feature are also very convenient and easy to use. I have been able to find a great nanny for my child thanks to this app and I would recommend it to any parent.
                </p>
              </div>
              <footer className="mt-8">
                <div className="flex items-start">
                  <div className="inline-flex flex-shrink-0 rounded-full border-2 border-white">
                    <img
                      className="h-12 w-12 rounded-full"
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-base font-medium text-white">
                      Joseph Rodriguez
                    </div>
                    <div className="text-base font-medium text-indigo-200">
                      CEO, Workcation
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
          <div id="testimonial" className="bg-emerald-800  border-t-2 md:mb-10  py-12 px-4 sm:px-6 md:border-t-0 md:border-l md:py-16 md:pr-0 md:pl-10 lg:pl-16">
            <div className="md:flex-shrink-0">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/workcation-logo-indigo-300.svg"
                alt="Workcation"
              />
            </div>
            <blockquote className="mt-6 md:flex md:flex-grow md:flex-col">
              <div className="relative text-lg font-medium text-white md:flex-grow">
                <svg
                  className="absolute top-0 left- h-8 w-8 -translate-x-3 -translate-y-2"
                  fill="white"
                  viewBox="0 0 30 38"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative px-2 py-3">
                We were very impressed with the selection of nannies on the app, and the ease of communication made the process smooth and stress-free. We highly recommend the nanny app to other parents.
                </p>
              </div>
              <footer className="mt-8">
                <div className="flex items-start">
                  <div className="inline-flex flex-shrink-0 rounded-full border-2 border-white">
                    <img
                      className="h-12 w-12 rounded-full"
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-base font-medium text-white">
                      Joseph Rodriguez
                    </div>
                    <div className="text-base font-medium text-indigo-200">
                      CEO, Workcation
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}
