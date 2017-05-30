import React from 'react'

const FILTERS = ['SHOW_ALL', 'SHOW_COMPLETE', 'SHOW_UNCOMPLETE']

let Footer = ({activedFilter, activeFilter}) => {
  return (
    <div>
      <span>show: </span>
      {FILTERS.map((filter) => {
        return <a href="###" 
                  key={filter}
                  style={{textDecoration: (activedFilter === filter ? 'none' : 'underline'),
                          marginRight: '30px'}} 
                  onClick={(e) => {
                    e.preventDefault()
                    activeFilter(filter)}
                  }>{filter}</a>
      })}
    </div>
  );
}

export default Footer