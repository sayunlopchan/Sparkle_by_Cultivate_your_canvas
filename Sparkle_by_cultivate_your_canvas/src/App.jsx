import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import RootLayout from './Home/RootLayout'
import Homepage from './Home/Homepage'

// pages
import About from './Home/Page/About'
import Program from './Home/Page/Program'
import Form from './Home/Page/Form'
import Career from './Home/Page/Career'
import Contact from './Home/Page/Contact'

// page page
import Art from './Home/Page/page-page/Art'
import Yoga from './Home/Page/page-page/Yoga'
import PublicSpeaking from './Home/Page/page-page/PublicSpeaking'
import Dance from './Home/Page/page-page/Dance'


// page not found
import PageNotFound from './Home/Page/PageNotFound'

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/', element: <RootLayout />, children: [
        { index: true, element: <Homepage /> },
        { path: 'about', element: <About /> },
        { path: 'program', element: <Program /> },
        { path: 'career', element: <Career /> },
        { path: 'form', element: <Form /> },
        { path: 'contact', element: <Contact /> },


        // nested-page

      ],
    },
    {
      path: '*', element: <PageNotFound />
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App