export const formatDate = (date: string, time: string) => {
    const adjustedTime = time.replace(/(\d+:\d+)([AP]M)/, '$1 $2');
    const dateTimeString = `${date} ${adjustedTime}`;

    const dateObj = new Date(dateTimeString);
    // console.log("Date object:", dateObj)

    if (isNaN(dateObj.getTime())) {
        throw new RangeError('Invalid date or time value');
    }

    const day = dateObj.getDate();
    const month = dateObj.toLocaleString('en-US', { month: 'short' });
    const year = dateObj.getFullYear();
    let hours = dateObj.getHours();
    const minutes = dateObj.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format

    return `${day} ${month} ${year} ${hours}:${minutes}${ampm}`;
};
