import React, {useState, useEffect} from 'react'

export default (props) => {
  const [isStuck, setIsStuck] = useState(false)
  const sentinalEl = React.createRef()
  
  useEffect(() => {
    if (!window) return;

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