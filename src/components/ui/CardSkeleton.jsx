import { Heart } from "lucide-react";
import { CardDecoration } from "./CardDecoration";

export default function CardSkeleton () {
    return (
        <>
        <div className="group course-card w-full hover:scale-[1.005] transition-all duration-200 
        hover:[&>.course-card-inner]:shadow-card-hover hover:[&>.course-card-inner]:border-border-card-hover">
            <div className="course-card-inner w-full flex flex-col bg-white px-4 pt-4 rounded-lg shadow-card-base border 
            border-border-card transition-all duration-200 ">
                <div className="animate-pulse">
                <div className="w-full shadow-card-base rounded-t-lg rounded-b-xs bg-primary-100
                aspect-square" ></div>
                <div className="w-full flex flex-col py-4 gap-4 mt-2">
                    <h5 className="h-2.5 w-3/4 rounded bg-primary-900/70"></h5>
                    <span className="h-2 w-full rounded bg-primary-400/70"></span>
                    <span className="h-2 w-1/4 rounded bg-secondary/70"></span>
                    <div className="w-full px-4 py-2 bg-primary-600/70 rounded-lg shadow-card-base h-10"></div>
                </div>
                </div>
                <div className="relative inline-flex items-center gap-4 -ms-4">
                    <div className="relative w-14.5 h-14.5 pt-2 pe-2 bg-base border border-border-card rounded-tl-4xl 
                    shadow-card-base-inner group-hover:shadow-card-hover-inner transition-all duration-200">
                        <div  
                        className="relative z-3 border-2 border-danger/50 w-12 h-12 rounded-full flex justify-center items-center">
                            <Heart 
                            className="text-danger/50 fill-transparent" />
                        </div>
                        <CardDecoration />
                    </div>
                    <p className="h-2 w-1/2 rounded bg-danger/50">
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}
