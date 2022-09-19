import React, {useEffect, useState} from 'react';
// import {Link} from 'react-router-dom';

function CPE() {
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/degrees-minors/cpe');
        const items = await data.json();
        setItems(items);
    };

    return(
        <section>
            {
            items.map(item => (
                <div className="container-fluid p-3 w-50">
                    <div className="card-deck">
                        <a href={'/degrees-minors/'+item.name.replace(/ /g, '-')} className='MajorLink' alt='Link to major'><div className="card">
                            <div className="card-body p-1">
                                <h6 className="card-title">{item.name}</h6>
                                <p class="card-text">{item.des}</p>
                            </div>
                        </div></a>
                    </div>
                </div>
            ))
            }
        </section>
    );
}

export default CPE;