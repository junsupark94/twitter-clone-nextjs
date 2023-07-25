export default function timeSince(date : Date) {

  var seconds = Math.floor((+new Date() - +date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return date.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }
  // interval = seconds / 2592000;
  // if (interval > 1) {
  //   return date.toLocaleString('en-US', { month: 'short', day: 'numeric' });
  // }
  interval = seconds / 86400;
  if (interval > 7) {
    return date.toLocaleString('en-US', { month: 'short', day: 'numeric' });
  }
  if (interval > 1 && interval < 7) {
    return Math.floor(interval) + " days ago";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours ago";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";



}