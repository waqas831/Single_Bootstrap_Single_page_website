import React from "react";
const Maps = () => {
  return (
    <div>
      <h3 className="fs-3 ml-2">Address</h3>
      <br></br>
      <span className="fs-3 text-bold">Suraj Miani Road Razabad Chowk</span>
      <br></br>
      <span className="fs-3 text-bold">
        Pakistan-- <b>Multan</b>
      </span>
      <br></br>
      <i className="fs-3 text-bold">0301-6957648</i>
      <div className="mt-1">
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe 
              class="gmap_iframe"
              width="100%"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University of 
              Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maps;
