import React, { useEffect } from "react";
import team2 from "../image/team-2.jpg";
import team3 from "../image/team-3.jpg";
import team4 from "../image/team-4.jpg";
import aos from 'aos'
import 'aos/dist/aos.css'



const Testimonial = () => {

  useEffect(()=>{
    aos.init({duration:2000})
  },[])
  return (
    <div data-aos='fade-right' id="testimonials">
      <div className="container">
        <h1>Testimonials</h1>
        <p className="">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, error?
        </p>

        <div className="row">
          <div className="col-md-4">
            <div className="profile">
              <img src={team3} className="user" alt="" />
              <blockquote>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
                vero inventore amet suscipit aliquid commodi consequuntur rem,
                reprehenderit atque, fuga, voluptates pariatur fugit! Quo,
                neque. Possi nam repudiandae.
              </blockquote>
              <h3>
                Huzy Potia <span>Co-founder XYZ company</span>
              </h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="profile">
              <img src={team2} className="user" alt="" />
              <blockquote>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
                vero inventore amet suscipit aliquid commodi consequuntur rem,
                reprehenderit atque, fuga, voluptates pariatur fugit! Quo,
                neque. Possi nam repudiandae.
              </blockquote>
              <h3>
                Alizy Harry <span>Founder/CEO XYZ company</span>
              </h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="profile">
              <img src={team4} className="user" alt="" />
              <blockquote>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
                vero inventore amet suscipit aliquid commodi consequuntur rem,
                reprehenderit atque, fuga, voluptates pariatur fugit! Quo,
                neque. Possi nam repudiandae.
              </blockquote>
              <h3>
                Alex Flash <span>Manager XYZ company</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
