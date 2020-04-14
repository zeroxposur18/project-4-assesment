import React from 'react';
import './Circles.css'

const Circles=(props) => (
    <div className="Circles">
        {props.circleNo.map((taco, idx) =>
            <div className = {props.circleIdx === idx ? 'selected' : 'color'}>
                {idx + 1}
            </div>
        )}
    </div>
)


export default Circles