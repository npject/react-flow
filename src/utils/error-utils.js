export const getFriendlyErrorMessage = (error) => {
    const message = (typeof error === 'string' ? error : error?.message || '').toLowerCase()

    if (message.includes('failed to fetch') || message.includes('network'))
        return 'اتصال به اینترنت برقرار نیست، لطفا شبکه خود را بررسی کنید!'

    if (message.includes('404') || message.includes('not found'))
        return 'اطلاعات موردنظر یافت نشد!'

    if (message.includes('401') || message.includes('403'))
        return 'شما مجوز دسترسی به این بخش را ندارید!'

    if (message.includes('500'))
        return 'خطای داخلی سرور رخ داده است، لطفا بعدا تلاش کنید!'

    return 'خطای پیش بینی نشده ای رخ داده است، لطفا بعدا تلاش کنید!'
}
