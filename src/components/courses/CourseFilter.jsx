function CourseFilter ({ filters, priceFilter, setPriceFilter, className }) {
    const activeIndex = filters.findIndex(f => f.value === priceFilter)
    const isVisible = activeIndex !== -1

    return (
        <>
        <div className={`${className || ''} 
        ${className?.includes('w-') ? '' : 'w-auto'} ${className?.includes('max-w-') ? '' : 'max-w-xs'}`}>
            <div className={`relative w-full inline-grid grid-cols-(--grid-cols) py-1 px-1.5 bg-primary-100
            border border-primary-200 text-sm font-medium rounded-b-3xl rounded-t-sm overflow-hidden isolate
            before:content-[''] before:absolute before:-z-1 before:right-(--position-right) before:top-1 before:w-(--item-width) 
            before:h-(--item-height) before:bg-primary-50 before:rounded-4xl before:shadow-liked
            before:transition-[right_.32s_cubic-bezier(.2,.8,.2,1)] ${isVisible ? 'before:visible' : 'before:invisible'}`}
            style={{ 
                '--grid-cols': `repeat(${filters.length}, minmax(0, 1fr))`,
                '--item-width': `calc((100% - 12px) / ${filters.length})`,
                '--item-height': 'calc(100% - 8px)',
                '--position-right': `calc(6px + (100% - 12px) / ${filters.length} * ${activeIndex})`,
            }}>

                {filters.map((item, index) => (
                    <button key={index} type="button" onClick={() => setPriceFilter(item.value)} aria-pressed={item.value === priceFilter}
                    className={`px-2 py-1.5 text-center rounded-4xl cursor-pointer whitespace-nowrap text-sm bg-transparent
                    active:scale-95
                    ${item.value === priceFilter ? 'text-primary-800'
                     : 'text-primary-500 hover:text-primary-800 hover:text-shadow-lg hover:text-shadow-primary-50'}`}>
                        {item.label}
                    </button>    
                ))}

            </div>          
        </div>
        </>
    )
}
export default CourseFilter
