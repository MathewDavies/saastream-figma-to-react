export function secondsToReadable(seconds) {
    // Convert firebase timestamp to a Date object
    if(seconds === null) return "";
    seconds = seconds * 1

    // Get the current date and time
    const currentSeconds = Math.floor(Date.now() / 1000);
    // Calculate the difference in milliseconds between the current date and the timestamp
    const difference = currentSeconds - seconds;
    
    // Define time intervals in milliseconds
    const minute = 60;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;
    const month = day * 30;
    const year = day * 365;
  
    // Define a function to format the time difference
    function formatTimeDifference(unit, interval, suffix){
      const timeDifference = Math.round(difference / interval);
      return `${timeDifference} ${unit}${timeDifference !== 1 ? 's' : ''} ${suffix}`;
    }
  
    // Format the time difference based on different intervals

    if(Number.isNaN(difference)) return "----" // create a better error message
    if (difference < minute) {
      return 'just now';
    } else if (difference < hour) {
      return formatTimeDifference('minute', minute, 'ago');
    } else if (difference < day) {
      return formatTimeDifference('hour', hour, 'ago');
    } else if (difference < week) {
      return formatTimeDifference('day', day, 'ago');
    } else if (difference < month) {
      return formatTimeDifference('week', week, 'ago');
    } else if (difference < year) {
      return formatTimeDifference('month', month, 'ago');
    } else {
      return formatTimeDifference('year', year, 'ago');
    }
  }

export class Validation{

  minLength(length, text){
    return text.length < length? false: true 
  }
  matching(str1, str2){
    return str1 === str2? true: false
  }
  passwordStrength(str){
    let strength = 0;
    let missing = []
    const symbol = /[^\w]/.test(str);
    const number = /\d/.test(str);
    const capital = /[A-Z]/.test(str);
    const length = str.length >= 7

    strength = symbol + number+ capital + length

    if (!symbol) missing.push('symbol');
    if (!number) missing.push('number');
    if (!capital) missing.push('capital');
    if (!length) missing.push('length');
    
    return {
      strength: strength,
      missing: missing

    }

  }
}