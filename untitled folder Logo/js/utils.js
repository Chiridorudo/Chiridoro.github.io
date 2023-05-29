export function setItemInLocal(name, value) {
  if (name == null) return
  const listItems = JSON.parse(
    localStorage.getItem(name) || "[]"
  )
  listItems.push(value)
  localStorage.setItem(name, JSON.stringify(listItems))
}