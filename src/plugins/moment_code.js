var moment = require('moment');
moment().format();

let now = moment().format("ddd, hA");

const addDate = () => {
  const line = document.querySelector('#line');
  line.insertAdjacentText('beforebegin', now);
}

export { addDate };