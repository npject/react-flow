import { useCallback, useContext } from "react"
import { FavoriteContext } from "../context/FavoriteContext"

export function useFavoriteCourses () {
    const { favCourses, setFavCourses } = useContext(FavoriteContext)
    const favCourseIds = favCourses.map(item => item.id)
    const favCourseCount = favCourses.length
    
    const favSet = new Set(favCourseIds)
    const isFavorite = (id) => favSet.has(id)

    const toggleFavorite = useCallback((item) => {
        setFavCourses(prevItems => {
            const isFav = prevItems.some(i => i.id === item.id)
            if(isFav) {
                return prevItems.filter(i => i.id !== item.id)
            }else {
                return [...prevItems, item]
            }
        })
    },[setFavCourses]) 
        
    return { favCourses, favCourseCount, isFavorite, toggleFavorite }
}
