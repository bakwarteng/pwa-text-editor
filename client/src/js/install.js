const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
window.addEventListener("beforeinstallprompt", (event) => {
  window.deferredPrompt = event;
  butInstall.classList.toggle("hidden", false);
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  if (window.deferredPrompt) {
    window.deferredPrompt.prompt();
    const choiceResult = await window.deferredPrompt.userChoice;
    window.deferredPrompt = null;
    butInstall.style.display = "none";
    console.log(`User response to the install prompt: ${choiceResult.outcome}`);
  }
});

// Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  console.log("PWA was installed", event);
});
