import React, { useEffect } from 'react'
const Coders = (props) => {
        //console.log(this.props);
        const {coders} = props;
        const {deleteCoder} = props;
        const coderList = coders.map(coder => {
            if(coder.ranking > 800){
                return (
                    <div className='coder' key={coder.id}>
                        <div>Name: {coder.name}</div>
                        <div>Age:{coder.age}</div>
                        <div>Contribution: {coder.contribution}</div>
                        <div>Ranking: {coder.ranking}</div>
                        <button className="delete" onClick={() => {deleteCoder(coder.id)}}>Delete Coder</button> 
                    </div> 
                ) 
            }else {
                return null
            }
        })
        return(
            <div className='coder-list'>
            <h2>Details: </h2>
                {coderList}
            </div>
        )
    
}

export default Coders
