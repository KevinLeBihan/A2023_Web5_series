
import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'



export function MyComponent({ evaluation }) {

    const [rating, setRating] = useState(0)
    // console.log(Math.round(evaluation))


    const handleRating = (rate) => {
        setRating(rate)

    }
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (value, index) => console.log(value, index)


    return (
        <>
            <div className='Rating-serie'>
                <Rating
                    onPointerEnter={onPointerEnter}
                    onPointerLeave={onPointerLeave}
                    onPointerMove={onPointerMove}
                    initialValue={Math.round(evaluation) / 2}
                    readonly={true}
                />
            </div>
        </>
    )
}

// const Rating = ({eval}) => {

//     const [rating, setRating] = useState(null);

//     return (
//         <div className="rating">
//             {[...Array(5)].map((start,i) => { 
//                 const ratingValue = i+1;

//                 return <label>
//                     <input type="radio" name="rating" value={ratingValue} onClick={()=>setRating(ratingValue)}/>
//                     <FaStar className="star" size={50}/>
//                 </label>;
//             })}
//         </div>
//     );
// }

export default Rating;