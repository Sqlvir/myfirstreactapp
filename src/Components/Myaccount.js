import React from 'react';
const Myaccount = () => {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Welcome to PopX</h3>
          <p className="Auth-form-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary Accountbtn">
               Create Account
            </button>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary Loginbtn">
               Already Registered? Login
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Myaccount;
