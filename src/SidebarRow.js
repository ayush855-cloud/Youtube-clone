
import React from 'react'
import './SidebarRow.css';


function SidebarRow({selected,Icon,Title}) {
    return (
        <div className={`SidebarRow ${selected && "selected"}`}>
            <Icon className="sidebar__icon"/>
            <h2 className="sidebar__title">{Title}</h2>
        </div>
    )
}

export default SidebarRow;
