import React, { Fragment, useState, useRef } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Link, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";

const reviews = {
  average: 3.9,
  totalCount: 4,
  featured: [
    {
      id: 1,
      title: "Can't say enough good things",
      rating: 5,
      content: `
          <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
          <p>The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
        `,
      author: "Risako M",
      date: "May 16, 2021",
      datetime: "2021-01-06",
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Card({ r, nanny, images, status, user, data,location,setBook }) {
  console.log(data)
  console.log(nanny)
  const [clicked, setClicked] = useState(false);
  const [startTime, setStartTime] = useState(dayjs(new Date()));
  const [endTime, setEndTime] = useState(dayjs(new Date()));
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);
  const [processing, setProcessing] = useState(false);
  const [checkpage, setCheckPage] = useState(false);

  let date1 = dayjs(startTime);
  let startDate = date1.format("YYYY-MM-DD HH:mm:ss");
  let date2 = dayjs(startTime);
  let endDate = date2.format("YYYY-MM-DD HH:mm:ss");
  const nav = useNavigate();

  const relatedProducts=data.slice(Math.max(data.length -3, 0))
  
  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://bbcare.onrender.com/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        start_time: startDate,
        end_time: endDate,
        caregiver_id: nanny.id,
        parent_id: user.id,
      }),
    }).then((r) => {
      if (r.ok) {
        setProcessing(true);
        setTimeout(() => {
          setCheckPage(true);
        }, 3000);
      }
    });
    setBook()
  }
console.log(user)
  const ratings = parseFloat(
    (r.reduce((a, b) => a + b, 0) / r.length).toFixed(1)
  );
  return (
    <>
      {checkpage ? (
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-400"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                    <div>
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                        <CheckIcon
                          className="h-6 w-6 text-green-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center sm:mt-5">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          Your Appointment has been Received
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Thank you for choosing BbCare, we are glad to inform
                            you that we have received your appointment. We will
                            inform you once the caregiver has accepted your
                            request. You can proceed to check the status.
                            <br></br>
                            Thank you!😊
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-gradient-to-r from-teal-500 to-cyan-600 px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                      >
                        <Link to="/checkout_status">Check Status</Link>
                      </button>

                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                        onClick={() => setOpen(false)}
                        ref={cancelButtonRef}
                      >
                        Cancel
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      ) : (
        <div className="bg-white">
          <main className="mx-auto mt-8 max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8 border-r">
            <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
              <div className="lg:col-span-5 lg:col-start-8">
                <div className="flex justify-between">
                  <h1 className="text-2xl font-medium text-gray-900">
                    
                  </h1>
                  <p className="text-xl font-medium text-gray-900">
                    Price Tag: {nanny.hourly_rate}/hr
                  </p>
                </div>
                {/* Reviews */}
                <div className="mt-4">
                  <h2 className="">Average Rating</h2>
                  <div className="flex items-center">
                    <p className="text-sm text-gray-700">
                      {ratings}
                      <span> out of 5 stars</span>
                    </p>
                    <div className="ml-1 flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            ratings > rating
                              ? "text-yellow-400"
                              : "text-gray-200",
                            "h-5 w-5 flex-shrink-0"
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <div
                      aria-hidden="true"
                      className="ml-4 text-sm text-gray-300"
                    >
                      ·
                    </div>
                    <div className="ml-4 flex">
                      <Link
                        to="/cards/card-item/reviews"
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        See all {r.length} reviews
                      </Link>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-sm font-medium text-gray-900 lg:text-2xl pt-6">
                      Location
                    </h2>
                    <li className="mt-1 text-sm text-gray-500">
                      {location.city}, {location.town}
                    </li>
                  </div>
                  <div>
                    <h2 className="text-sm font-medium text-gray-900 lg:text-2xl pt-6">
                      Status
                    </h2>
                    {status ? (
                      <p className="text-sm font-medium text-red-600 lg:text-2xl pt-2">
                        Sorry‼️ {nanny.name} is unavailable
                      </p>
                    ) : (
                      <button className="bg-green-400 mt-2 flex w-1/2 items-center justify-center rounded-md border border-transparent py-3 text-base font-medium text-black">
                        Available for Hire
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Image gallery */}
              <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0 lg:mb-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 lg:gap-8">
                  <div className="lg:col-span-4 lg:row-span-4 object-fit">
                    <img className="" src={images.image1} alt="Primary" />
                  </div>
                  <div className="hidden rounded-lg lg:grid grid-cols-2 lg:col-span-4 ">
                    <div>
                      <img src={images.image2} alt="image_2" />
                    </div>
                    <div>
                      <img className="" src={images.image3} alt="Image_1" />
                    </div>
                  </div>
                  {/* {caregiver.images.map((image) => (
                <img
                  key={image.id}
                  src={image.imageSrc}
                  alt={image.imageAlt}
                  className={classNames(
                    image.primary
                      ? "lg:col-span-4 lg:row-span-4"
                      : "hidden lg:block",
                    "rounded-lg"
                  )}
                />
              ))} */}
                </div>
              </div>

              <div className="mt-8 lg:col-span-5">
                {/* Bio and experience*/}
                <div className="mt-10">
                  <h2 className="text-sm font-medium text-gray-900 lg:text-2xl">
                    About {nanny.first_name} {nanny.last_name}
                  </h2>

                  <div
                    className="prose prose-sm mt-4 text-gray-500"
                    dangerouslySetInnerHTML={{ __html: nanny.bio }}
                  />
                </div>

                <div className="mt-8 border-t border-gray-200 pt-8">
                  <h2 className="text-sm font-medium text-gray-900 lg:text-2xl">
                    Field &amp; Experience
                  </h2>

                  <div className="prose prose-sm mt-4 text-gray-500">
                    <ul>
                      <li>{nanny.experience }</li>
                    </ul>
                  </div>
                </div>
                {status ? null : (
                  <div>
                    {clicked ? (
                      <form onSubmit={handleSubmit}>
                        <>
                          <p className="text-lg text-sm font-medium text-red-600 lg:text-2xl pt-6 pb-6">
                            Select Start and End Time
                          </p>
                          <div className="flex flex-col m-auto justify-between">
                            <div className="w-1/2 mb-4">
                              <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <Stack spacing={3}>
                                  <DateTimePicker
                                    label="Date&Time picker"
                                    value={startTime}
                                    onChange={(newValue) =>
                                      setStartTime(newValue)
                                    }
                                    dateFormat="yyyy-MM-dd HH:mm:ss"
                                    showTimeSelect
                                    timeFormat="HH:mm:ss"
                                    timeIntervals={15}
                                    timeCaption="time"
                                    renderInput={(params) => (
                                      <TextField {...params} />
                                    )}
                                  />
                                </Stack>
                              </LocalizationProvider>{" "}
                            </div>
                            <div className="w-1/2 mt-4">
                              <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <Stack spacing={3}>
                                  <DateTimePicker
                                    label="Date&Time picker"
                                    value={endTime}
                                    onChange={(newValue) =>
                                      setEndTime(newValue)
                                    }
                                    dateFormat="yyyy-MM-dd HH:mm:ss"
                                    showTimeSelect
                                    timeFormat="HH:mm:ss"
                                    timeIntervals={15}
                                    timeCaption="time"
                                    renderInput={(params) => (
                                      <TextField {...params} />
                                    )}
                                  />
                                </Stack>
                              </LocalizationProvider>{" "}
                            </div>
                          </div>
                          {processing ? (
                            <button
                              disabled
                              type="button"
                              class="w-1/2 mt-8 h-14 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center "
                            >
                              <svg
                                aria-hidden="true"
                                role="status"
                                class="inline w-4 h-4 mr-3 text-white animate-spin"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                  fill="#E5E7EB"
                                />
                                <path
                                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                  fill="currentColor"
                                />
                              </svg>
                              Request Processing...
                            </button>
                          ) : (
                            <button
                              type="submit"
                              className="mt-8 flex w-1/2 items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-teal-500 to-cyan-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                              Submit Request
                            </button>
                          )}
                        </>
                      </form>
                    ) : (
                      <button
                        onClick={() => setClicked(true)}
                        type="submit"
                        className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-teal-500 to-cyan-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Book Now
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Reviews */}
            <section
              aria-labelledby="reviews-heading"
              className="mt-10 sm:mt-24"
            >
              <h2
                id="reviews-heading"
                className="text-lg text-sm font-medium text-gray-900 lg:text-2xl pt-6"
              >
                Recent reviews
              </h2>

              <div className="mt-6 space-y-10 divide-y divide-gray-200 border-t border-b border-gray-200 pb-10">
                {reviews.featured.map((review) => (
                  <div
                    key={review.id}
                    className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8"
                  >
                    <div className="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
                      <div className="flex items-center xl:col-span-1">
                        <div className="flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                              key={rating}
                              className={classNames(
                                review.rating > rating
                                  ? "text-yellow-400"
                                  : "text-gray-200",
                                "h-5 w-5 flex-shrink-0"
                              )}
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                        <p className="ml-3 text-sm text-gray-700">
                          {review.rating}
                          <span className="sr-only"> out of 5 stars</span>
                        </p>
                      </div>

                      <div className="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0">
                        <h3 className="text-sm font-medium text-gray-900">
                          {review.title}
                        </h3>

                        <div
                          className="mt-3 space-y-6 text-sm text-gray-500"
                          dangerouslySetInnerHTML={{ __html: review.content }}
                        />
                      </div>
                    </div>

                    <div className="mt-6 flex items-center text-sm lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">
                      <p className="font-medium text-gray-900">
                        {review.author}
                      </p>
                      <time
                        dateTime={review.datetime}
                        className="ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
                      >
                        {review.date}
                      </time>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Top rated caregivers */}
            <section
              aria-labelledby="related-heading"
              className="mt-0 sm:mt-24"
            >
              <h2
                id="related-heading"
                className="text-lg text-sm font-medium text-gray-900 lg:text-2xl"
              >
                Top rated Caregivers
              </h2>

              <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {relatedProducts.map((relatedProduct) => (
                  <div key={relatedProduct.id} className="group relative">
                    <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-80">
                      <img
                        src={relatedProduct.image.image1}
                        alt={relatedProduct.imageAlt}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <a href={relatedProduct.href}>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {relatedProduct.username}
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {relatedProduct.location.city}
                        </p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">
                        Price Tag:{relatedProduct.hourly}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      )}
    </>
  );
}
