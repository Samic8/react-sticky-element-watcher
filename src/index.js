import React, {useState, useEffect} from 'react'

export default (props) => {
  const [isStuck, setIsStuck] = useState(false)
  const sentinalEl = React.createRef()
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!window.IntersectionObserver) return;

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