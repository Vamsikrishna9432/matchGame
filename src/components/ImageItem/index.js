import './index.css'

const ImageItem = props => {
  const {each, onClickImageItem} = props
  const {id, imageUrl, thumbnailUrl, category} = each

  const onClickImage = () => {
    onClickImageItem(id)
  }

  return (
    <li className="single-thumbnail">
      <button className="but" type="button" onClick={onClickImage}>
        <img className="thumb" alt="thumbnail" src={thumbnailUrl} />
      </button>
    </li>
  )
}

export default ImageItem
