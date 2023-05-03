import { useState } from 'react';

const ContactUs = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [formError, setFormError] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const changeHandler = <T extends HTMLInputElement | HTMLTextAreaElement>(
    e: React.ChangeEvent<T>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const errors = {
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    };

    if (!formData.firstName) {
      errors.firstName = 'First name is required';
    }

    if (!formData.lastName) {
      errors.lastName = 'Last name is required';
    }

    if (
      !formData.email.includes('@') ||
      (!formData.email.includes('.com') && formData.email.length > 1)
    ) {
      errors.email = 'A valid email is required';
    }

    if (!formData.email) {
      errors.email = 'Email is required';
    }

    if (!formData.message) {
      errors.message = 'A message is required';
    }

    if (errors.email || errors.firstName || errors.lastName || errors.message) {
      setFormError(errors);
      setLoading(false);
      return;
    }

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="sm:px-6 py-20">
      <div className="grid place-items-center">
        <h1 className="px-6 pb-6 uppercase text-center font-semibold leading-tight text-5xl sm:text-7xl xxl:text-8xl">
          contact
          <br />
          <span className="text-white xl:ml-32 xxl:ml-44" style={{ color: '#CCB6A0' }}>
            us
          </span>
        </h1>
      </div>
      <div className="mx-auto" style={{ maxWidth: '1200px' }}>
        <div
          className="w-full lg:flex px-6 py-8 md:p-20 sm:rounded-3xl"
          style={{ backgroundColor: '#CCB6A0', color: '#F3EFEB' }}>
          <div className="lg:w-1/2 grid place-items-center">
            <div>
              <h1 className="text-2xl xl:text-3xl font-semibold">We&apos;re here to help you</h1>
              <p className="mt-4 mb-14">
                Fill put the form and our team will
                <br />
                get back to you within 24 hours
              </p>

              <div className="mb-8">
                <div className="flex justify-start items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="28"
                    height="28">
                    <path
                      d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"
                      fill="#685F59"></path>
                  </svg>
                  <p className="ml-4">839848384</p>
                </div>
                <div className="flex justify-start items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="25"
                    height="25">
                    <path
                      d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"
                      fill="#685F59"></path>
                  </svg>
                  <p className="ml-5">hello@sugardbare.com</p>
                </div>
                <div className="hover:border border-box">
                  <div className="flex justify-start items-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="28"
                      height="28">
                      <path
                        d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z"
                        fill="#685F59"></path>
                    </svg>
                    <p className="ml-4">1243 summerfield Dr</p>
                  </div>
                </div>
              </div>

              {/* <div>social icons</div> */}
            </div>
          </div>
          <div className="lg:w-1/2 text-sm p-10 rounded-3xl bg-white">
            <form onSubmit={submitHandler}>
              <div className="mb-8">
                <label htmlFor="firstName" className="font-semibold text-black">
                  First Name
                  <br />
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={changeHandler}
                    className="font-normal py-2 px-5 mt-3 text-xs md:text-sm font-medium text-black w-full bg-white"
                    style={{ backgroundColor: '#F3EFEB' }}
                  />
                </label>
                <p className="text-xs text-red-600 mt-2">{formError.firstName}</p>
              </div>
              <div className="mb-8">
                <label htmlFor="lastNamelastName" className="font-semibold text-black">
                  Last Name
                  <br />
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={changeHandler}
                    className="font-normal py-2 px-5 mt-3 text-xs md:text-sm font-medium text-black w-full bg-white"
                    style={{ backgroundColor: '#F3EFEB' }}
                  />
                </label>
                <p className="text-xs text-red-600 mt-2">{formError.lastName}</p>
              </div>
              <div className="mb-8">
                <label htmlFor="email" className="font-semibold text-black">
                  Email
                  <br />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder="johnsmith@gmail.com"
                    className="font-normal py-2 px-5 mt-3 text-xs md:text-sm font-medium text-black w-full bg-white"
                    style={{ backgroundColor: '#F3EFEB' }}
                  />
                </label>
                <p className="text-xs text-red-600 mt-2">{formError.email}</p>
              </div>
              <div className="mb-8">
                <label htmlFor="message" className="font-semibold text-black">
                  Message
                  <br />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={changeHandler}
                    placeholder="What can we help you with today?"
                    className="font-normal py-2 px-5 mt-3 text-xs md:text-sm font-medium text-black w-full bg-white"
                    style={{ backgroundColor: '#F3EFEB' }}></textarea>
                </label>
                <p className="text-xs text-red-600 mt-2">{formError.message}</p>
              </div>
              <p className="text-xs text-red-600 mb-2">{''}</p>

              <div className="relative">
                <button
                  type="submit"
                  className="py-3 px-5 text-sm md:text-lg font-medium text-white mb-4 w-full rounded-md"
                  style={{ backgroundColor: '#685F59' }}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
