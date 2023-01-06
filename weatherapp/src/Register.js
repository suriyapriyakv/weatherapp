import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className="container-lg">
        <div className="row" style={{minHeight: '100vh'}}>
            <div className="col-6 d-flex align-items-center justify-content-center">
                <img className="img-fluid" src={require('./assets/signin.jpg')}/>
			</div>
			<div className="col-6 d-flex align-items-center justify-content-center">
			  <div style={{width:'100%'}}>
				 <center> 
				 <div className="h1 mb-3">Register</div>
                 <div style={{width:'80%'}}>
					<div className="mb-3">
						<div className="col-sm-10">
						   <input type="text" className="form-control" id="FirstName" placeholder='First Name'/>
						</div>
					</div>
				 </div>
                 <div style={{width:'80%'}}>
					<div className="mb-3">
						<div className="col-sm-10">
						   <input type="text" className="form-control" id="LastName" placeholder='Last Name'/>
						</div>
					</div>
				 </div> 	
                 <div style={{width:'80%'}}>
					<div className="mb-3">
						<div className="col-sm-10">
						   <input type="text" className="form-control" id="Email" placeholder='Email'/>
						</div>
					</div>
				 </div>
				 <div style={{width:'80%'}}>
					<div className="mb-3">
						<div className="col-sm-10">
						   <input type="password" className="form-control" id="inputPassword" placeholder='Password'/>
						</div>
					</div>
				 </div>
				 <button className="btn btn-primary">Register</button><br/>
                 <Link to ="/">
                    <a href=""  style={{fontSize:'x-small',fontStyle:'italic'}}>Already have an account ? Sign In</a>
                 </Link>
				 </center>
		      </div>		 
			</div>
		</div>
	</div>
  )
}

export default Register