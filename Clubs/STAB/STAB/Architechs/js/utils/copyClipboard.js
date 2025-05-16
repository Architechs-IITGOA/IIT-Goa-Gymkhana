document.getElementById("copy-icon").addEventListener("click", copyToClipboard);
document.getElementById("mobile-text").addEventListener("click", copyToClipboard);

function copyToClipboard() {
  const mobileNumber = document.getElementById("mobile-text").textContent;
  navigator.clipboard.writeText(mobileNumber).then(() => {
    alert("Mobile number copied to clipboard!");
  }).catch(err => {
    console.error("Error copying to clipboard:", err);
  });
}
