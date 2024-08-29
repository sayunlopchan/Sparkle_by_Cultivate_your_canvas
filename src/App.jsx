import React, { Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Layout
import RootLayout from './Home/RootLayout';
import Homepage from './Home/Homepage';

// Lazy load pages
const About = lazy(() => import('./Home/Page/About'));
const Program = lazy(() => import('./Home/Page/Program'));
const Form = lazy(() => import('./Home/Page/Form'));
const Career = lazy(() => import('./Home/Page/Career'));
const Contact = lazy(() => import('./Home/Page/Contact'));
const ImageGallery = lazy(() => import('./Home/Page/ImageGallery'));

// Page not found
const PageNotFound = lazy(() => import('./Home/Page/PageNotFound'));

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <Homepage /> },
        { path: 'about', element: <Suspense fallback={<div>Loading About...</div>}><About /></Suspense> },
        { path: 'program', element: <Suspense fallback={<div>Loading Program...</div>}><Program /></Suspense> },
        { path: 'form', element: <Suspense fallback={<div>Loading Form...</div>}><Form /></Suspense> },
        { path: 'career', element: <Suspense fallback={<div>Loading Career...</div>}><Career /></Suspense> },
        { path: 'gallery', element: <Suspense fallback={<div>Loading Gallery...</div>}><ImageGallery /></Suspense> },
        { path: 'contact', element: <Suspense fallback={<div>Loading Contact...</div>}><Contact /></Suspense> },
      ],
    },
    {
      path: '*',
      element: <Suspense fallback={<div>Loading Page Not Found...</div>}><PageNotFound /></Suspense>
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
