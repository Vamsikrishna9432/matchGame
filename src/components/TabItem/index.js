import './index.css'

const TabItem = props => {
  const {tabItem, isActive, onClickTabItem} = props
  const {tabId, displayText} = tabItem

  const changeTabActive = () => {
    onClickTabItem(tabId)
  }

  console.log(isActive)

  const classNames = isActive ? 'btn active' : 'btn'
  return (
    <li className="list-item">
      <button className={classNames} type="button" onClick={changeTabActive}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
