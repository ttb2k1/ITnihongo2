import React from 'react'

function Map() {
  return (
    <div class="mapouter">
        <div>
          <h1>駐車場</h1>
        </div>
        <div class="gmap_canvas">
            <iframe style={{width: "80%", height:"500px"}} class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Cau Rong&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
    </div>
  );
}

export default Map;
