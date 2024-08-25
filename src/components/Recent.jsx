import React from "react";

const Recent = ( {data} ) => {
    return (
        <div className="cntre grid-gap recent">
            <div className="headline txt-upper res-m-ato2">{data.headline}</div>
            <ul className="list flx-wrp mrgn-tp">
                {
                    data.list.map( (el, i) => {
                        return (
                            <li className="list-item res-m-ato2" key={i}>
                                <a href="#"><img className="img-rad4" src={el.img} alt="image" /></a> 
                                <a href="#"><div className="list-title">{el.title}</div></a> 
                                <div className="created-by">{el.createdBy} <span className="edge"></span> {el.time.month} {el.time.day} {el.time.year}</div>
                            </li>
                        );
                    } )
                }
            </ul>
        </div>
    );
}

export default Recent;