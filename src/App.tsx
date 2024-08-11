import React from "react";
import { useForm } from "react-hook-form";
import "./styles.css";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="parent">
      <div className="container">
        <div>
          <h1> Contact Us! </h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="inner-container">
            <div className="input-container">
              <label>Name</label> <br />
              <input
                type="text"
                placeholder="Please enter your name..."
                name="name"
                {...register("name", {
                  minLength: {
                    value: 4,
                    message: "minimum length of 4 is required",
                  },
                  required: "Name is required",
                })}
              />
              {errors.name && <p className="errorMsg">{errors.name.message}</p>}
              <br />
              <label>Email</label> <br />
              <input
                className="input-containers"
                type="text"
                placeholder="Please enter your email..."
                name="email"
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Email is not valid.",
                  },
                })}
              />
              {errors.email && (
                <p className="errorMsg">{errors.email.message}</p>
              )}
              <br />
              <label>Messages</label> <br />
              <input
                type="text"
                placeholder="Please leave a message..."
                name="comment"
                {...register("comment", {
                  minLength: {
                    value: 4,
                    message: "minimum length of 4 is required",
                  },
                  required: "Message is required",
                })}
              />
              {errors.comment && (
                <p className="errorMsg">{errors.comment.message}</p>
              )}
            </div>
          </section>
          <div className="form-control">
            <label></label>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
