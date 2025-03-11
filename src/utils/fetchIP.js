import axios from "axios";

export async function checkIP() {
  try {
    const response = await axios.get("https://api.db-ip.com/v2/free/self");
    const ip = response.data.ipAddress;
    const sum = ip.split(".").reduce((acc, num) => acc + parseInt(num, 10), 0);
    alert(sum > 100 ? "OK" : "KO");
  } catch (error) {
    console.error("Erreur lors de la récupération de l'IP", error);
  }
}
