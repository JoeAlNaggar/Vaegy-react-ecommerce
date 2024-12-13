import React from 'react'

function BreadCrumps(props) {
  return (
    <div>
        <section className="pagehead">
  <div className="bg">
    <div className="text-center title">
      <h3>{props.title}</h3>
    </div>
    <div className="text-center bread-crumb">
      <a href="/" target="_self">
        home
      </a>
      <span>&gt;</span>
      <p>{props.Page}</p>
    </div>
  </div>
</section>

    </div>
  )
}

export default BreadCrumps