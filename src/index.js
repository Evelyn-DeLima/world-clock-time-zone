function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A [</small>]"
  );

  let barcelonaElement = document.querySelector("#barcelona");
  let barcelonaDateElement = barcelonaElement.querySelector(".date");
  let barcelonaTimeElement = barcelonaElement.querySelector(".time");
  let barcelonaTime = moment().tz("Europe/Barcelona");

  barcelonaDateElement.innerHTML = barcelonaTime.format("MMMM Do YYYY");
  barcelonaTimeElement.innerHTML = barcelonaTime.format(
    "h:mm:ss [<small>]A [</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
