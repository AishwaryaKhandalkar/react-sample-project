import React from 'react'

const Card = ({produtname,brandname,cost,ratings}) => {

    const generateStars = (ratings) => {
        let rating = ''
        for (let i = 0; i < ratings ; i++){
            rating = rating + '\u2605'
        }
        for (let j = 0; j < (5 - ratings) ; j++){
            rating = rating + '\u2606'
        }
        return rating
    }
    return (
        <div>
            <div className="card-container">
                <img src="/kama.png" alt="Logo" width ="320px" />
                <div>
                    <div className="Product-name">{produtname}</div>
                    <div className="brand-name">{brandname}</div>
                    <div className="cost"><sup>&#8377;</sup>{cost}<sup>00</sup></div>
                    <div className="ratings yellow">{generateStars(ratings)}</div>
                    <div className="website"><span className="yellow">&#10004;</span> Prime</div>
                </div>
            </div>
        </div>
    )
}

export default Card;
