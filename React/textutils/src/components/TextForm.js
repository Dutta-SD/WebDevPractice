import React from 'react'

export default function TextForm() {
    return (
        <div className='container'>
            <div className="mb-3">
                <textarea 
                className="form-control" 
                id="exampleFormControlTextarea1" 
                rows="8">
                </textarea>
            </div>

            <button className='btn btn-primary'>Convert To UpperCase</button>
        </div>
    )
}
