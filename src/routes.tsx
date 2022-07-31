import React from "react"
import {RouteObject} from "react-router-dom"
import Layout from "./components/layout/Layout"
import HomePage from "./components/pages/HomePage/HomePage"
import AboutPage from "./components/pages/AboutPage"
import BlogPage from "./components/pages/BlogPage"
import PricingPage from "components/pages/PricingPage/PricingPage"
import LogInPage from "./components/pages/LogInPage"
import SignUpPage from "./components/pages/SignUpPage"
import ErrorPage from "./components/pages/ErrorPage"

export enum RouteNames {
    ROOT = "/",
    ABOUT = "/about",
    BLOG = "/blog",
    PRICING = "/pricing",
    LOGIN = "/login",
    SIGN_UP = "/sign_up"
}

export const mainRoutes: RouteObject[] = [
    {
        path: RouteNames.ROOT,
        element: <Layout/>,
        children: [
            {path: RouteNames.ROOT, element: <HomePage/>},
            {path: RouteNames.ABOUT, element: <AboutPage/>},
            {path: RouteNames.BLOG, element: <BlogPage/>},
            {path: RouteNames.PRICING, element: <PricingPage/>},
            {path: "*", element: <ErrorPage/>,},
            {path: RouteNames.LOGIN, element: <LogInPage/>},
            {path: RouteNames.SIGN_UP, element: <SignUpPage/>},
        ]
    },
]