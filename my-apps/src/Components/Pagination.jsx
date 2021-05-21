import React from 'react';

const Pagination = ({currentPage, totalPages, handleChange}) => {
    const arr = new Array(totalPages).fill(0).map((a,i)=> i+1)
    return (
        <div style={{display:"flex"}}>
            {
                arr.map(item =>{
                    return <button onClick={()=> handleChange(item)} >{item} </button>
                })
            }
        </div>
    );
}

export default Pagination
