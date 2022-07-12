import React, {FC} from "react"
import {useRoutes} from "react-router-dom"
import {mainRoutes} from "./routes"

const App: FC = () => {
    const routes = useRoutes(mainRoutes)
    return (
        <>
            {routes}
        </>
    )
}

export default App
