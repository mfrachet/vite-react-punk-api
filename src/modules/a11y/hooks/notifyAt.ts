export const notifyAt = (str: string) => {
  const alertEl = document.getElementById("status");

  if (alertEl) {
    alertEl.innerText = str;
  }
};
