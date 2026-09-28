import React from 'react'

const app  = () => {
  return (
  
    <>{/*these are called empty tags(fragments) which are used to contain stuffs inside*/}
    <div id="parent">
      <h1 id="child1">app</h1>
      <h2 id="child2">yuhuuuuuu</h2>
      <h3 id="child3">I'm shining </h3>
    </div>
    <div id="hello">hello there srijeet here </div>{/*2 parents cannot  be under same function*/}
    <h2>hi</h2> {/*you can't return 2 things at the same time in a function*/}
  
    </>
  )
}

export default  app
