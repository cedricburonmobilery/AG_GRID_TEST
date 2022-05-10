import React from 'react';

var imgCell = (props: any) => {
    var element = <div className="img-cell">
        {props.value.map((elt: any) => <img key={elt.key} src={elt.src} alt={elt.desc} />)}
    </div>
    return element;
}
export default imgCell

