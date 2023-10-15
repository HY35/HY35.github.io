const clockTitle = document.querySelector(".js-clock");

async function getLocalTime() {
  try {
    const response = await fetch("https://worldtimeapi.org/api/ip");
    const data = await response.json();

    const localTime = new Date(data.utc_datetime);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };

    const formattedTime = localTime.toLocaleDateString(undefined, options);

    // Extract only country & region names from the timezone
    const [country, region] = data.timezone.split("/");
    const locationInfo = `${country.replace(/_/g, " ")} / ${region.replace(
      /_/g,
      " "
    )}`;

    clockTitle.innerText = `${formattedTime} (${locationInfo})`;
  } catch (error) {
    console.error("Error fetching local time:", error);
  }
}

getLocalTime();
const updateInterval = setInterval(getLocalTime, 1000);
