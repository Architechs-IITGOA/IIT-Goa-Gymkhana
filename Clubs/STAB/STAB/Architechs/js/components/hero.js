document.addEventListener("DOMContentLoaded", () => {
  const titleElement = document.querySelector(".hero-text-title");
  const textElement = document.querySelector(".hero-text-title-part1");
  const button = document.querySelector(".get-started-button");

  const sentences = [
    { element: titleElement, text: titleElement.textContent.trim() },
    { element: textElement, text: textElement.textContent.trim() },
  ];

  const typingSpeed = 100; // Typing speed (ms per character)
  const sentenceDelay = 650; // Delay before typing the next sentence
  const initialDelay = 1600; // Initial delay before typing starts

  // Clear existing content in elements
  sentences.forEach(({ element }) => (element.innerHTML = ""));

  let currentSentenceIndex = 0;

  const typeText = ({ element, text }, callback) => {
    let charIndex = 0;

    // Create a blinking caret
    const caret = document.createElement("span");
    caret.classList.add("blinking-caret");
    element.appendChild(caret);

    const typeChar = () => {
      if (charIndex < text.length) {
        caret.before(document.createTextNode(text[charIndex]));
        charIndex++;
        setTimeout(typeChar, typingSpeed);
      } else {
        caret.remove();
        callback();
      }
    };

    typeChar();
  };

  /**
   * Initiates the typing effect for the next sentence in the list.
   */
  const typeNextSentence = () => {
    if (currentSentenceIndex < sentences.length) {
      const currentSentence = sentences[currentSentenceIndex];
      typeText(currentSentence, () => {
        currentSentenceIndex++;
        setTimeout(typeNextSentence, sentenceDelay);
      });
    } else {
      button.classList.add("glowing");
    }
  };

  setTimeout(typeNextSentence, initialDelay);
});
