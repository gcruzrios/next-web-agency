
"use client"
import React, { useEffect, useState } from "react";
import axios from 'axios';




async function getFronts() {
 
  const token = localStorage.getItem('token');


  const res = await fetch('https://pocketbase.greiv.in/api/collections/fronts/records/t7t5ml9ph7dd4lf',{ headers: {Authentication: token}, 
  'Content-Type': 'application/json'  }, { cache: 'no-store' });
  const data = await res.json();
  console.log(data);
  return data?.item;
}

async function getToken(){

  const [adminToken, setAdminToken] = useState('');
  const [identity, setIdentity]= useState('');
  const [password, setPassword]= useState('');
  setIdentity('gcruzrios');
  setPassword('Cncr240675%%$$01');
    
 
  

  const response = await fetch('https://pocketbase.greiv.in/api/admins/auth-with-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'        
      },body:JSON.stringify({identity, password})});
   
   const admin = await response.json();
   console.log(admin);
   setAdminToken(admin.token)
   localStorage.setItem('token', adminToken);
}


async function  Hero() {
 

 // const fronts = await getFronts();

  


  useEffect(() => {
    getToken();
    
  }, []);

  return (
    <div>
      {/* <!--hero section start--> */}
      <section className="banner-area-wrap-v2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="left-content-hero-v2">
                <h5>Get Started With Ortencey</h5>
                <h1>
                  We Are The Best Digital <strong>Marketing</strong> Agency.
                </h1>
                <p>
                  The 3 golden rules professional Digital Marketing Agency don’t
                  want you to know about.
                </p>
                <div className="btn-groups">
                  <a href="#" className="btn btn-default">
                    Discover More
                  </a>
                  <a href="#" className="btn btn-get">
                    Get Started
                  </a>
                </div>
              </div>
              {/* <!--/.left-content-hero--> */}
            </div>
            <div className="col-lg-6">
              <div className="right-content-herov2">
                <div className="imgs">
                  <img src="img/home2/hero-img.png" data-aos="fade-up" alt="" />
                </div>
              </div>
              {/* <!--/.right-content-hero--> */}
            </div>
          </div>
        </div>
        {/* <!--/.container--> */}
        <span className="banner-frame-one"></span>
        <span className="banner-frame-two v2"></span>
        <span className="banner-frame-three"></span>
        <span className="banner-frame-four"></span>
      </section>
      {/* <!--hero section end--> */}
    </div>
  );
}

export default Hero;
