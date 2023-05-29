export function setItemInLocal(name, value) {
  if (name == null) return
  // console.log ('localStorage.getItem(name)',localStorage.getItem(name))
  const listItems = JSON.parse(
    localStorage.getItem(name) || "[]"
  )
  // console.log ('listItems',listItems)
  listItems.push(value)
  localStorage.setItem(name, JSON.stringify(listItems))
}