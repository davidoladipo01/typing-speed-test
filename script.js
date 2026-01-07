const startTest = () => {
  const blurOverlay = document.querySelector(".blur-overlay");
  blurOverlay.classList.add("hidden");
};

const resetTest = () => {
  const blurOverlay = document.querySelector(".blur-overlay");
  blurOverlay.classList.remove("hidden");
};

document.addEventListener("DOMContentLoaded", () => {
  const passageText = document.getElementById("textdisplay");
  passageText.textContent =
    "The archaeological expedition unearthed artifacts that complicated prevailing theories about Bronze Age trade networks. Obsidian from Anatolia, lapis lazuli from Afghanistan,";
});

let allPassages = null;

const loadAllPages = async () => {
  try {
    const response = await fetch("data.json");
    const data = await response.json();
    console.log(data);
    allPassages = data;

    console.log("JSON loaded successfully!");
  } catch (error) {
    console.error("Failed to load JSON:", error);

    allPassages = {
      easy: [{ text: "The sun rose over the quiet town. Birds sang in the trees as people woke up and started their day. It was going to be a warm and sunny morning." }],
      medium: [{ text: "Learning a new skill takes patience and consistent practice. Whether you're studying a language, picking up an instrument, or mastering a sport, the key is to show up every day. Small improvements compound over time, and before you know it, you'll have made remarkable progress.." }],
      hard: [{ text: "The archaeological expedition unearthed artifacts that complicated prevailing theories about Bronze Age trade networks. Obsidian from Anatolia, lapis lazuli from Afghanistan, and amber from the Baltic—all discovered in a single Mycenaean tomb—suggested commercial connections far more extensive than previously hypothesized. \"We've underestimated ancient peoples' navigational capabilities and their appetite for luxury goods,\" the lead researcher observed. \"Globalization isn't as modern as we assume.\"" }],
    };
  }
};

loadAllPages();
