import Link from "next/link";
import React from "react";

function Error404() {
  return (
    <div>
      {/* <!--404 start--> */}
      <div className="error-pg-sec px-120">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="inner-404 text-center">
                <img src="img/404.png" alt="" />
                <div className="mt-50">
                  <h2>Oops! Page Not Found.</h2>
                  <p>
                    The page you are looking for is not available or has been
                    moved. Try a different page or go to homepage with the
                    button below.
                  </p>
                  <Link className="btn btn-default" href="/">Back to home</Link>
                  {/* <a href="/" className="btn btn-default">
                    Back to home
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--/.container--> */}
      </div>
      {/* <!--404 end--> */}
    </div>
  );
}

export default Error404;
