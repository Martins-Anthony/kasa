import '../../scss/modules/tags.scss'

function Tags({ arrays, id }) {
  const listItems = arrays.map((listItem) => (
    <li key={id + listItem}>{listItem}</li>
  ))
  return <ul className="tags-container">{listItems}</ul>
}

export default Tags
