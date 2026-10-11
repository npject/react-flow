export const CardDecoration = () => {
    return (
        <>
        <div className="w-full h-0 pointer-events-none">
            {/* Decorative Elements */}
            {/* --- shadow یکم ایراد داره --- */}
            <div className="before:z-1 before:content-[''] before:absolute before:-bottom-4 before:-right-4 
            before:w-0 before:h-0 before:border-45 before:border-r-base before:border-b-base 
            before:border-t-transparent before:border-l-transparent 
            "></div>
            {/* before:w-[73px] before:h-[73px] before:rounded-tl-[35px] before:bg-base */}
            <div className="before:z-2 before:content-[''] before:absolute before:bottom-full before:-right-0.5 
            before:w-4 before:h-4 before:transparent before:rounded-br-lg before:border-r before:border-b 
            before:border-border-card before:shadow-[8px_8px_0px_8px_var(--color-base)]
            "></div>
            <div className="after:z-3 after:content-[''] after:absolute after:bottom-full after:-right-0.5 
            after:w-4 after:h-4 after:transparent after:rounded-br-lg 
            after:shadow-card-base group-hover:after:shadow-card-hover
            "></div>
            <div className="before:z-2 before:content-[''] before:absolute before:-bottom-0.5 before:-left-4 
            before:w-4 before:h-4 before:transparent before:rounded-br-lg before:border-r before:border-b 
            before:border-border-card before:shadow-[8px_8px_0px_8px_var(--color-base)]
            "></div>
            <div className="after:z-3 after:content-[''] after:absolute after:-bottom-0.5 after:-left-4 
            after:w-4 after:h-4 after:transparent after:rounded-br-lg 
            after:shadow-card-base group-hover:after:shadow-card-hover
            "></div>    
        </div>        
        </>
    )
}
