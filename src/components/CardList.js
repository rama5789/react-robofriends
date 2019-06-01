import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    console.log('CardList - PureFunction');
    /* if (true) {
        throw new Error('CardList Error !!!');
    } */
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            email={user.email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;