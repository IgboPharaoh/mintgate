import React from 'react';
import ReactDOM from 'react-dom/client';

import { Admin } from './Admin';
import { ErrorPage } from './ErrorPage';
import { Federation } from './FederationPage';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const router = createBrowserRouter([
    {
        path: '/',
        element: <Admin />,
        errorElement: <ErrorPage />,
    },
    {
        path: 'federation/:federationId',
        element: <Federation />,
        errorElement: <ErrorPage />,
    },
]);

root.render(
    <React.StrictMode>
        <ChakraProvider>
            <BrowserRouter>
                <Routes>
                    {/* <RouterProvider router={router}/> */}
                    <Route path='/' element={<Admin />} />
                    <Route path='federation/:federationId' element={<Federation />} />
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
