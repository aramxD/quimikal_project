import dayjs from "dayjs";

export function getRemainingTimeUntilMsTimestamp(timestampMs) {
  const timestapDayjs = dayjs(timestampMs);
  const nowDayjs = dayjs();
  if(timestapDayjs.isBefore(nowDayjs)){
    return{
      segundos: "00",
  minutos: "00",
  horas: "00",
  dias: "00",
    }
  }
  return {
    segundos: getRemainingSeconds(nowDayjs, timestapDayjs),
    minutos: getRemainingMinutes(nowDayjs, timestapDayjs),
    horas: getRemainingHours(nowDayjs, timestapDayjs),
    dias: getRemainingDays(nowDayjs, timestapDayjs),
  };
}

function getRemainingSeconds(nowTime, endsTime) {
  const seconds = endsTime.diff(nowTime, "seconds") % 60;
  return padWithZeros(seconds, 2);
}
function getRemainingMinutes(nowTime, endsTime) {
  const minutes = endsTime.diff(nowTime, "minutes") % 60;
  return padWithZeros(minutes,2);
}
function getRemainingHours(nowTime, endsTime) {
  const hours = endsTime.diff(nowTime, "hours") % 60;
  return padWithZeros(hours,2);
}
function getRemainingDays(nowTime, endsTime) {
  const days = endsTime.diff(nowTime, "days") % 60;
  return padWithZeros(days,2);
}


function padWithZeros(number, minLength){
  const numberStrings = number.toString()
  if(numberStrings.length>=minLength) return numberStrings
  return '0'.repeat(minLength-numberStrings.length) + numberStrings
}