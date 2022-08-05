import React from "react";
import { useState } from "react";
import ReactMapGL from "react-map-gl";
import { useForm } from "react-hook-form";
import NavBar from "./NavBar"

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset();
    console.log("Message submited: " + JSON.stringify(data));
  };

  const [viewport, setViewport] = useState({
    latitude: 1.3644,
    longitude: 103.9915,
    zoom: 8,
  });

  return (
    <>
      <div className="leftpart">
        <NavBar />
      </div>

      <div className="rightpart">
        <div className="rightpart_in">
          <div className="tokyo_tm_section">
            <div className="container">
              <div className="tokyo_tm_contact">
                <div className="tokyo_tm_title">
                  <div className="title_flex">
                    <div className="left">
                      <span>Contact</span>
                      <h3>Get in Touch</h3><br />
                      <hr/>
                      <p><b>Email</b>: <a href = "mailto: ng_weihan@outlook.com">ng_weihan@outlook.com</a></p>
                    </div>
                  </div>
                </div>
                {/* END TITLE */}


                {/* MENU WRAP */}

                <div className="fields">

                  {/* END FORM */}
                </div>
                {/* END FIELDS */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
