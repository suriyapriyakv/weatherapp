import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
	<div className="container-lg">
        <div className="row" style={{minHeight: '100vh'}}>
            <div className="col-6 d-flex align-items-center justify-content-center">
                <img className="img-fluid" src={require('./assets/signin.jpg')}/>
			</div>
			<div className="col-6 d-flex align-items-center justify-content-center">
			  <div style={{width:'100%'}}>
				 <center> 
				 <div className="h1 mb-3">Login</div> 	
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
				 <Link to="/landing">
				   <button className="btn btn-primary">Login</button><br/>
				 </Link>
				 <Link to="/register">
                   <span  style={{fontSize:'x-small',fontStyle:'italic'}}>Don't have an account? Sign Up</span>
				 </Link>
				 </center>
		      </div>		 
			</div>
		</div>
	</div>
  )
}

export default Login