import axios from "axios";


const API_URL ="https://meowverse-api.onrender.com/cats";
let cachedData = [];

const loadData = async () => {
  if (cachedData.length > 0) return cachedData;

  try {
    const response = await axios.get(API_URL);
    if (response.data && Array.isArray(response.data.cats)) {
      cachedData = response.data.cats;
      return cachedData;
    } else {
      throw new Error("API'den gelen veri dizi formatında değil");
    }
  } catch (error) {
    console.error("Veri yüklenirken bir hata oluştu:", error.message);
    throw error;
  }
};

export const purrfectlyRandomCat = async () => {
  const data = await loadData();
  const random = data[Math.floor(Math.random() * data.length)];

  return random?.imageUrl|| "No URL found";
};

export const rainbowCatFinder = async (color) => {
  const data = await loadData();
  const filtered = data.filter((item) => item.color === color);
  if (filtered.length === 0) return "No matching cats found for color";
  const random = filtered[Math.floor(Math.random() * filtered.length)];
  return random?.imageUrl || "No URL found";
};

export const moodyCatPicker = async (mood) => {
  const data = await loadData();
  const filtered = data.filter((item) => item.mood === mood);
  if (filtered.length === 0) return "No matching cats found for mood";
  const random = filtered[Math.floor(Math.random() * filtered.length)];
  return random?.imageUrl || "No URL found";
};

export const colorfulMoodCats = async (color, mood) => {
  const data = await loadData();
  const filtered = data.filter(
    (item) => item.color === color && item.mood === mood
  );
  if (filtered.length === 0) return "No matching cats found for color and mood";
  const random = filtered[Math.floor(Math.random() * filtered.length)];
  return random?.imageUrl || "No URL found";
};
