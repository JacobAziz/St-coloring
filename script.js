// 1) Get references to your elements
const germanInput = document.getElementById("germanInput");
const englishInput = document.getElementById("englishInput");
const colorCodeBtn = document.getElementById("colorCodeBtn");
const copyBtn = document.getElementById("copyBtn");
const outputArea = document.getElementById("outputArea");

// 2) Random color generator
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// 3) Color Code button logic
colorCodeBtn.addEventListener("click", () => {
  const germanText = germanInput.value.trim();
  const englishText = englishInput.value.trim();

  // Split both sentences into arrays of words
  const germanWords = germanText.split(" ");
  const englishWords = englishText.split(" ");

  // Basic check for equal word counts
  if (germanWords.length !== englishWords.length) {
    alert("The German and English sentences must have the same number of words.");
    return;
  }

  // Build the color-coded output
  let coloredGerman = "";
  let coloredEnglish = "";

  for (let i = 0; i < germanWords.length; i++) {
    const color = getRandomColor();
    coloredGerman += `<span style="color: ${color}">${germanWords[i]}</span> `;
    coloredEnglish += `<span style="color: ${color}">${englishWords[i]}</span> `;
  }

  // Display the results in the output area
  outputArea.innerHTML = `
    <div>${coloredGerman}</div>
    <div>${coloredEnglish}</div>
  `;
});

// 4) Function to copy HTML from a hidden, contentEditable div
function copyFromHiddenDiv(html) {
  const hiddenDiv = document.getElementById("hiddenHtml");
  hiddenDiv.innerHTML = html;

  // Select the hidden div’s contents
  const range = document.createRange();
  range.selectNodeContents(hiddenDiv);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);

  // Copy
  document.execCommand("copy");
  selection.removeAllRanges();

  alert("Copied from hidden div!");
}

// 5) Copy Text button logic
copyBtn.addEventListener("click", () => {
  copyFromHiddenDiv(outputArea.innerHTML);
});
