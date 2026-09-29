import { useState } from "react";

export function useFilterCourses ({ allCourses }) {
    const [searchQuery, setSearchQuery] = useState("")
    const [priceFilter, setPriceFilter] = useState("all")

    const filters = [
        { value: "all", label: "همه دوره ها"},
        { value: "free", label: "دوره های رایگان"},
        { value: "pro", label: "دوره های پولی"}
    ]

    const filteredCourses = allCourses
        .filter(course => course.title.toLowerCase().includes(searchQuery))
        .filter(course => priceFilter === "all" ? course : course.status === priceFilter)

    const onChangeInput = (ev) => setSearchQuery(ev.target.value.trim().toLowerCase())  
    // const clearSearchQuery = () => setSearchQuery("")

    return { searchQuery, onChangeInput, filters, priceFilter, setPriceFilter, filteredCourses }
}
