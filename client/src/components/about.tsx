import { Link } from "react-router-dom";

export const About = () => {
  return (
    <>
      <h1 className="font-medium text-center leading-tight text-5xl my-5 text-slate-700">
        ABOUT THE Pet World APP
      </h1>

      <section className="">
        <div className="container px-6 py-12 h-full">
          <div className="flex justify-center items-center lg:items-start lg:flex-wrap flex-col-reverse lg:flex-row h-full g-6 text-gray-800">
            <div className="flex flex-col mt-12 lg:mt-0 md:w-8/12 lg:w-6/12 mb-12 md:mb-0 justify-center">
              <div className="flex-row">
                <div className="flex flex-col sm:flex-row gap-5 bg-white border border-gray-200 rounded-lg shadow">
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20 justify-center items-center">
              <h2 className=" mb-3  text-2xl font-bold mx-auto text-center">
                About the App
              </h2>

              <p className="my-3  mx-auto text-center">
                Pet World is a demo fullstack MERN application that allows you
                to to shop for and adopt your next pet. You can access the{" "}
                <a
                  className="text-slate-700 font-bold"
                  href="https://github.com/CaseyConlin/MERN-Full-Stack-Pet-Adoption-App"
                >
                  repo here.
                </a>
              </p>
              <p className="  text-lg font-bold mx-auto text-center">Backend</p>

              <p className="  my-2 mx-auto text-center">
                Node.js, Express, and Mongoose communicate with collections on
                MongoDB.
              </p>
              <p className=" my-2  my-1 mx-auto text-center">
                The API handles filtering and sorting pets results based on
                client search params. See the{" "}
                <Link to="/pets" className="text-slate-700 font-bold">
                  All Pets
                </Link>{" "}
                page to use the sorting and filtering features.
              </p>
              <p className=" my-2  my-1 mx-auto text-center">
                The API also handles registering users, and authenticating users
                using HTTP-only cookies and JWT. See the{" "}
                <Link to="/users/login" className="text-slate-700 font-bold">
                  Login
                </Link>{" "}
                page to login as a test user, or register for a new account
                using the{" "}
                <Link to="/users/register" className="text-slate-700 font-bold">
                  Register
                </Link>{" "}
                page.
              </p>
              <p className=" my-2  my-1 mx-auto text-center">
                The backend processes payments using Stripe's API via the{" "}
                <Link to="/checkout" className="text-slate-700 font-bold">
                  Checkout
                </Link>{" "}
                page.
              </p>

              <p className="  mt-3 text-lg font-bold mx-auto text-center">
                Frontend
              </p>
              <p className=" my-2  my-1 mx-auto text-center">
                Client side the React app builds search params and calls to the
                API.
              </p>
              <p className=" my-2  my-1 mx-auto text-center">
                The shopping basket / cart is managed as state using React
                context in browser local storage. The total cost is transmitted
                to the backend for processing through Stripe at checkout.
              </p>
              <p className=" my-2  my-1 mx-auto text-center">
                Routing is handled clientside by React Router, with
                useLoaderData hook making API calls where possible.
              </p>
              <p className=" my-2  my-1 mx-auto text-center">
                User authentication state is managed with React context.
              </p>
              <p className=" my-2  my-1 mx-auto text-center">
                The app is styled with Tailwind and uses Typescript.
              </p>

              <p className="  my-5 text-lg font-bold mx-auto text-center">
                If you have any questions contact{" "}
                <a
                  className="text-blue-800"
                  href="mailto:casey.conlin@gmail.com"
                >
                  Casey Conlin
                </a>
              </p>
            </div>
          </div>
      </section>
    </>
  );
};
