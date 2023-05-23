const timeconv = (time) =>
{
    
    let hours = parseInt(time.substr(0,2));
    
    let minutes = time.substr(3,2);
    let seconds = time.substr(6,2);

    if (time.includes("pm") && hours < 12)
    {
        hours = hours + 12;
        

    }
    else if (time.includes("am") && hours === 12)
    {
        hours = hours - 12;
    }


    let strHours = hours.toString();

    let result = `${hours}:${minutes}:${seconds}`

    return result;
}

console.log(timeconv("02:30:27pm"));