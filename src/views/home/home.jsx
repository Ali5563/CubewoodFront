import React from "react";
import "./home.css";
import Button from "../../components/buttons/button";
import "bootstrap/dist/css/bootstrap.min.css";

const home = () => {
  return (
    <div className="home_page">
      <section className="home_header">
        <div className="container-custom">
          <div className="row">
            <div className="col-lg-5">
              <div className="content_top">
                <h5>SUMMER 2020</h5>
                <h1>Custom Woodwork</h1>
                <h4>
                  We know how large objects will act, but things on a small
                  scale
                </h4>
                <Button text={"SHOP NOW"}></Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default home;
