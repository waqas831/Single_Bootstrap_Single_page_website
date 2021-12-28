import React from "react";

const Skills = () => {
  return (
    <div >
      <div class="progress" style={{margin:'5%',height:'8%'}}>
        <div
          class="progress-bar bg-success"
          role="progressbar"
          style={{width:" 85%",fontSize:25,color:'black'}}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >HTML5</div>
      </div>
      <div class="progress"  style={{margin:'5%',height:'8%'}}>
        <div
          class="progress-bar bg-info"
          role="progressbar"
          style={{width:" 70%",fontSize:25,color:'black'}}
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        >CSS3</div>
      </div>
      <div class="progress"  style={{margin:'5%',height:'8%'}}>
        <div
          class="progress-bar bg-warning"
          role="progressbar"
          style={{width:" 60%",fontSize:25,color:'black'}}
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        >JAVASCRIPT</div>
      </div>
      <div class="progress"  style={{margin:'5%',height:'8%'}}>
        <div
          class="progress-bar bg-danger"
          role="progressbar"
          style={{width:" 70%",fontSize:25,color:'black'}}
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        >REACTJS</div>
      </div>
      <div class="progress"  style={{margin:'5%',height:'8%'}}>
        <div
          class="progress-bar bg-danger"
          role="progressbar"
          style={{width:" 60%",fontSize:25,color:'black'}}
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        >NODEJS</div>
      </div>
      <div class="progress"  style={{margin:'5%',height:'8%'}}>
        <div
          class="progress-bar bg-danger"
          role="progressbar"
          style={{width:" 70%",fontSize:25,color:'black'}}
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        >EXPRESSJS</div>
      </div>
      <div class="progress"  style={{margin:'5%',height:'8%'}}>
        <div

          class="progress-bar bg-danger"
          role="progressbar"
          style={{width:" 70%",fontSize:25,color:'black'}}
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        >MONGODB</div>
      </div>
    </div>
  );
};

export default Skills;
