import React, { useEffect } from 'react'
import list from './App'
const Coders = (props ) => {
    useEffect(() => {
        {props.list}
    }, [])
    const coderList = list.map(coder => {
        console.log(coder.name)
        return (
            <div className='coder' key={coder.key}>
               <div>Name: {coder.name}</div>
               <div>Age: {coder.age}</div>
               <div>Contribution: {coder.contribution}</div>
               <div>Ranking: {coder.ranking}</div> 
            </div>
        )
    })
    return(
        <div className='coder-list'>
            {coderList}
        </div>
    )
}

export default Coders
