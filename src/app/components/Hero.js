
"use client"
import React, { useEffect, useState } from "react";
import axios from 'axios';




async function getFronts() {


  
  const res = await fetch('https://pocketbase.greiv.in/api/collections/fronts/records/t7t5ml9ph7dd4lf', { cache: 'no-store' });

  //const res = await fetch('https://pocketbase.greiv.in/api/collections/fronts/records/t7t5ml9ph7dd4lf',{ headers: {Token:token}, 
  //'Content-Type': 'application/json'  }, { cache: 'no-store' });
  const data = await res.json();
  console.log(data);
  return data;
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
   return (admin.token)
}


async function  Hero() {


   const fronts = await getFronts();
   //const tokenAdmin =  await getToken();
  //   useEffect(() => {
  //     getToken();
  //  }, []);

  return (
    <div>
      {/* <!--hero section start--> */}
      <section className="banner-area-wrap-v2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="left-content-hero-v2">
                <h5>{fronts.title}</h5>
                <h1>
                  {fronts.resume}
                </h1>
                <p>
                <div dangerouslySetInnerHTML={{ __html: fronts.content }} />
                  {/* {fronts.content} */}
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
                <img src="img/home2/hero-img.png" alt=""/>
                  {/* <img src="img/home2/hero-img.png" data-aos="fade-up" alt="" /> */}
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
