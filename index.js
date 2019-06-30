import React, {useState, useEffect} from 'react'

export default StickyElementWatcher = (props) => {
  const [isStuck, setIsStuck] = useState(false)
  const sentinalEl = React.createRef()
  
  useEffect(() => {
    const handler = (entries) => {
      setIsStuck(!entries[0].isIntersecting)
    }

    const observer = new window.IntersectionObserver(handler)
    observer.observe(sentinalEl.current)
  }, [])

  return (
    <React.Fragment>
      <div ref={sentinalEl} />
      {props.render({isStuck})}
    </React.Fragment>
  )
}