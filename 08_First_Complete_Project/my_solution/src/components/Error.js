
import React from 'react';

function Error({isError, setIsError}) {
  return (
    <>
      { isError &&
        <div className='error-overlay' onClick={() => setIsError('')}>
          <div className='error-inputs' >  
            <h3>Invalid input</h3>
            <p>{isError}</p>
            <button 
              type='button' 
              className='btn-confirm-error'
              onClick={() => setIsError('')}> Okay
            </button>
          </div> 
        </div>
      }
    </>
  );
}

export default Error;
