import { useEffect, useMemo, useState } from "react"
import { FavoriteContext } from "./FavoriteContext"

export default function FavoriteProvider ({children}) {
    const [favCourses, setFavCourses] = useState(() => JSON.parse(localStorage.getItem("favCourses")) || [])

    const contextValue = useMemo(() => ({
        favCourses,
        setFavCourses
    }), [favCourses])

    useEffect(() => {
        localStorage.setItem("favCourses", JSON.stringify(favCourses))
    }, [favCourses])

    return (
        <FavoriteContext.Provider value={contextValue}>
            {children}
        </FavoriteContext.Provider>
    )
}
