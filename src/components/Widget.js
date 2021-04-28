import React from 'react'
import '../css/Widget.css'
import WidgetOption from './WidgetOption'

function Widget() {
    return (
        <div className="widget">
            <div className="widget_header">
                <h5>Spaces to Follow</h5>
            </div>
            <WidgetOption/>
        </div>
    )
}

export default Widget;
