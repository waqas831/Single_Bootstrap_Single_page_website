import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [desc, setDisc] = useState("");
  return (
    <div>
      <h3>Contact Us</h3>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Email Email
        </label>
        <input
          type="text"
          class="form-control"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          id="exampleFormControlInput1"
          placeholder="Enter your name"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Enter Email
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Enter Password
        </label>
        <input
          type="password"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="passwordexample"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Example textarea
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          onChange={(e) => {
            setDisc(e.target.value);
          }}
          value={desc}
        ></textarea>
      </div>
      <div className="mb-3">
        <button className="btn fs-2 btn-primary mt-3">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
