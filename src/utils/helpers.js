export const handleChange = (e, setFormData) => {
  setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
};
export function highlight(el) {
  el.target.previousElementSibling.classList.add("h");
}
export function dehighlight(el) {
  if (el.target.value === "") {
    el.target.previousElementSibling.classList.remove("h");
  }
}
