import React from 'react'

const StuffList = ({ title, synopsis, list }) =>
  <div>
    <h3>{ title }</h3>
    <p>{ synopsis }</p>
    <ul>
      { list.map(item => <li><a target="_blank" href={ item.link }>{ item.title }</a> - { item.snippet }.</li>) }
    </ul>
  </div>

export default StuffList
