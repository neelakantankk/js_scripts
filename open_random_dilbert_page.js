function getRandInt(min, max) {
  return Math.floor(min + Math.floor((Math.random() * (max - min))));
}

function getRandomDate(start_date, end_date) {

  let random_year = getRandInt(start_date.getFullYear(),
                               end_date.getFullYear()+1);

  let min_month = 1;
  let max_month = 12;

  if (random_year == 1989) {
    min_month = 4;
  }

  if (random_year == end_date.getFullYear()) {
  	max_month = end_date.getMonth();
  }

  let random_month = getRandInt(min_month, max_month + 1);

  let min_date = 1;
  let max_date = (new Date(random_year, random_month,0)).getDate();

  if (random_year == 1989 && random_month == 4) {
    min_date = 16;
  }

  if (random_year == end_date.getFullYear()
      && random_month == end_date.getMonth()) {
  	max_date = end_date.getDate();
  }

  let random_date = getRandInt(min_date, max_date);

  let full_date = new Date(random_year, random_month, random_date);

  return full_date.toISOString().split('T')[0];
}

var first_strip = new Date('1989-04-16');
var today = new Date();

var click_button = document.getElementById("trial");

click_button.addEventListener('click',function() {
	let random_date = getRandomDate(first_strip,today);
  url_to_open = `https://www.dilbert.com/strip/${random_date}`;
  let id = `Dilbert - ${random_date}`;
  
  window.open(url_to_open, id);  
});


