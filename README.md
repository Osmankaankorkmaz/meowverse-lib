# 🐾 Meowverse

**Meowverse** is a lightweight and modern JavaScript library that delivers random and delightful cat images from a remote API. Whether you're building a fun app, a mood tracker, or just want a furry friend to lighten your UI, Meowverse is here to purr-fectionize your project.

---

## ✨ Features

- 🐱 Fetches **random** cat images
- 🎨 Get cats by **color**
- 😺 Pick cats by **mood**
- 🌈 Combine **color + mood** for curated results
- 🚀 Super fast thanks to in-memory caching

---

## 📦 Installation

To install **Meowverse**, use npm:

```bash
npm install meowverse
```

---

## 🛠️ Usage

To use **Meowverse**, import the required functions and start showing cats with different moods, colors, or even random ones:

```js
import {
  purrfectlyRandomCat,
  rainbowCatFinder,
  moodyCatPicker,
  colorfulMoodCats
} from "meowverse";

const showCats = async () => {
  console.log("Random cat:", await purrfectlyRandomCat());
  console.log("Black cat:", await rainbowCatFinder("black"));
  console.log("Happy cat:", await moodyCatPicker("happy"));
  console.log("White + sleepy cat:", await colorfulMoodCats("white", "sleepy"));
};

showCats();
```

This example demonstrates how you can call the functions to retrieve different cat images, either randomly, by color, mood, or a combination of both. Simply run the code to get cat images in your console.

---

## 📖 API Reference

Here are the functions available in **Meowverse**:

### `purrfectlyRandomCat()`

Returns a random cat image URL.

* **Returns**: A URL of a random cat image.

**Example**:

```js
const randomCat = await purrfectlyRandomCat();
console.log(randomCat); // Prints a random cat image URL
```

---

### `rainbowCatFinder(color)`

Returns a cat image URL based on the color provided.

* **Parameter**: `color` (string) - The color of the cat (e.g., `"black"`, `"white"`).
* **Returns**: A URL of the cat image or a message if no match is found.

**Example**:

```js
const blackCat = await rainbowCatFinder("black");
console.log(blackCat); // Prints a black cat image URL
```

---

### `moodyCatPicker(mood)`

Returns a cat image URL based on the mood provided.

* **Parameter**: `mood` (string) - The mood of the cat (e.g., `"happy"`, `"sleepy"`).
* **Returns**: A URL of the cat image or a message if no match is found.

**Example**:

```js
const happyCat = await moodyCatPicker("happy");
console.log(happyCat); // Prints a happy cat image URL
```

---

### `colorfulMoodCats(color, mood)`

Returns a cat image URL based on both the color and mood provided.

* **Parameters**:

  * `color` (string) - The color of the cat.
  * `mood` (string) - The mood of the cat.
* **Returns**: A URL of the cat image or a message if no match is found.

**Example**:

```js
const whiteSleepyCat = await colorfulMoodCats("white", "sleepy");
console.log(whiteSleepyCat); // Prints a white, sleepy cat image URL
```

---

## 💻 Development

To contribute to **Meowverse**, follow these steps:

1. Fork the repository.
2. Clone your fork locally.
3. Create a new branch (`git checkout -b feature-branch`).
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to your branch (`git push origin feature-branch`).
6. Create a pull request.

---

## 📝 License

**Meowverse** is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🤖 API Example

Here’s how you can use the functions provided in **Meowverse**:

```js
import {
  purrfectlyRandomCat,
  rainbowCatFinder,
  moodyCatPicker,
  colorfulMoodCats
} from "meowverse";

const showCats = async () => {
  console.log("Random cat:", await purrfectlyRandomCat());
  console.log("Black cat:", await rainbowCatFinder("black"));
  console.log("Happy cat:", await moodyCatPicker("happy"));
  console.log("White + sleepy cat:", await colorfulMoodCats("white", "sleepy"));
};

showCats();
```

This will fetch random, colored, and mood-based cat images from the API and log them to the console.

---

Happy coding and enjoy the cute cat images! 🐱
