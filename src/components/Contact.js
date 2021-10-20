import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <form id="form" className="container col-3 text-white text-center pt-5">
            <div class="mb-3">
                <h3>Contact Me!</h3>
                <label for="exampleInputEmail1" className="form-label">Name</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Email address</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default Contact;