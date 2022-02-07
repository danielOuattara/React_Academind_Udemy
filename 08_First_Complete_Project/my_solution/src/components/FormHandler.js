
import React from 'react';

function FormHandler({handleChange, handleSubmit, user}) {
  return (
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-item'>
          <label htmlFor="username" className='form-label'>Username</label>
          <input 
            type="text" 
            name="username" 
            id="username"  
            className='form-input'
            onChange={handleChange}
            value={user.username}/>
        </div>

        <div className='form-item'>
          <label htmlFor="age" className='form-label'>Age (Years)</label>
          <input 
            type="number" 
            name="age" 
            id="age" 
            className='form-input'
            onChange={handleChange}
            value={user.age}
            />
        </div>
        <button type='submit' className='form-btn' >Add User</button>
      </form>

  );
}

export default FormHandler;
