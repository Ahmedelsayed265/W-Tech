export function highlight(el) {
  el.target.previousElementSibling.classList.add("h");
}

export function dehighlight(el) {
  if (el.target.value === "") {
    el.target.previousElementSibling.classList.remove("h");
  }
}

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return {
    day: date.getDate(),
    month: date.toLocaleString("default", { month: "short" }),
  };
};
