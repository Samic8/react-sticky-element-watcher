# React Sticky Element Watcher

The CSS property `position: sticky` lacks an `:active` pseudo-class for apply styles when a element is "stuck".

## Installation
```
npm install react-sticky-element-watcher
```

## Usage
```js
import React from 'React'
import StickyElementWatcher from 'react-sticky-element-watcher'

export default () => (
    <StickyElementWatcher
        render={({ isStuck }) => (
            <nav style={{
                position: 'sticky',
                top: '10px',
                backgroundColor: isStuck ? 'red' : 'white'
            }}>
                Logo: link1, link2
            </nav>
        )}
    />
)
```