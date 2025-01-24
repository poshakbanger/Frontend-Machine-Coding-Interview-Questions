import React, { useState } from "react";

function Form () {

    const [formdata, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formdata, [name]: value})

    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form refresh
        console.log("Form submitted:", setFormData);
    }


    return (
        <form onSubmit={handleSubmit}>
            <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formdata.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formdata.email}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formdata.password}
            onChange={handleChange}
          />
        </label>
      </div>
      <button onClick={() => setFormData()} type="submit">Submit</button>

        </form>
    )
}
export default Form;