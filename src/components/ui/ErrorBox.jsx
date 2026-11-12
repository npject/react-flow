import { AlertTriangle, RefreshCw } from "lucide-react"

function ErrorBox ({ message, onRetry } = {}) {
    return (
        <>
        <div className="w-full lg:w-lg max-w-lg mx-auto flex flex-col items-center justify-center p-8 my-6 bg-danger-200/50 
        border border-danger-200 rounded-lg shadow-sm backdrop-blur-lg transition-all duration-300">
            <div className="relative w-14 h-14 flex justify-center items-center rounded-full bg-danger-200/50 text-danger-500 mb-4">
                <span className="absolute w-full h-full rounded-full bg-danger-300/20 animate-ping"></span>
                <AlertTriangle className="w-7 h-7 relative" />
            </div>
            <h3 className="text-lg font-bold text-primary-900 mb-1">
                اوه! مشکلی پیش آمد
            </h3>
            <p className="text-sm font-medium text-primary-700 text-center mb-6 leading-relaxed">
                {message || "خطایی در دریافت اطلاعات رخ داده است، لطفا دوباره تلاش کنید."}
            </p>
            {onRetry && (
                <button onClick={onRetry}
                className="inline-flex items-center gap-2 px-4 py-2 bg-danger-500 text-sm text-danger-50 rounded-xl shadow-card-base 
                hover:bg-danger-600 hover:text-white hover:shadow-card-hover transition-all duration-200 cursor-pointer 
                active:scale-95" >
                    <RefreshCw className="w-4 h-4"/>
                    تلاش مجدد
                </button>
            )}
        </div>
        </>
    )
}
export default ErrorBox
