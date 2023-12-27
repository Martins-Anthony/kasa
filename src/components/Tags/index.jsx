import '../../scss/modules/tags.scss'

function Tags({ tagsArray }) {
  const listItems = tagsArray.map((listItem) => (
    <li key={listItem}>{listItem}</li>
  ))
  return <ul className="tags-container">{listItems}</ul>
}

export default Tags
