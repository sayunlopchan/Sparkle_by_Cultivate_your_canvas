import React, { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Layout
import RootLayout from "./Home/RootLayout";
import Homepage from "./Home/Homepage";
import GalleySkeleton from "./components/skeleton/GallerySkeleton";
import LoadingSkeleton from "./components/skeleton/LoadingSkeleton";
import HomePageSkeleton from "./components/skeleton/HomePageSkeleton";


// Lazy load pages
const About = lazy(() => import("./Home/Page/About"));
const Program = lazy(() => import("./Home/Page/Program"));
const Form = lazy(() => import("./Home/Page/Form"));
const Career = lazy(() => import("./Home/Page/Career"));
const Contact = lazy(() => import("./Home/Page/Contact"));
const ImageGallery = lazy(() => import("./Home/Page/ImageGallery"));

// Page not found
const PageNotFound = lazy(() => import("./Home/Page/PageNotFound"));

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true, element: (
            <Suspense
              fallback={
                <div>
                  <HomePageSkeleton />
                </div>
              }
            >
              <Homepage />
            </Suspense>
          )
        },
        {
          path: "about",
          element: (
            <Suspense
              fallback={
                <div>
                  <LoadingSkeleton />
                </div>
              }
            >
              <About />
            </Suspense>
          ),
        },
        {
          path: "program",
          element: (
            <Suspense
              fallback={
                <div>
                  <LoadingSkeleton />
                </div>
              }
            >
              <Program />
            </Suspense>
          ),
        },
        {
          path: "admissionform",
          element: (
            <Suspense
              fallback={
                <div>
                  <LoadingSkeleton />
                </div>
              }
            >
              <Form />
            </Suspense>
          ),
        },
        {
          path: "career",
          element: (
            <Suspense
              fallback={
                <div>
                  <LoadingSkeleton />
                </div>
              }
            >
              <Career />
            </Suspense>
          ),
        },
        {
          path: "gallery",
          element: (
            <Suspense
              fallback={
                <div>
                  <GalleySkeleton />
                </div>
              }
            >
              <ImageGallery />
            </Suspense>
          ),
        },
        {
          path: "contact",
          element: (
            <Suspense
              fallback={
                <div>
                  <LoadingSkeleton />
                </div>
              }
            >
              <Contact />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "*",
      element: (
        <Suspense fallback={<div>Loading Page Not Found...</div>}>
          <PageNotFound />
        </Suspense>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
