import React from 'react';

const Contact = () => {
    return (
        <div className="bg-secondary text-light">
            <div className="heading text-center py-4 my-2 bg-dark">
                <h3 className="display-4 text-danger">Contact Us</h3>
                <p>Email: <a href="www.mostafarmstu@gmail.com">www.mostafarmstu@gmail.com</a></p>
                <p>Phone: <span className="text-primary"> 01516-7151333</span></p>
            </div>
            <div class="modal-body">
                <form>
                    <div class="form-group d-flex">
                        <label className="mr-4" for="name">Name</label>
                        <input type="text" id="name" class="form-control" name="Your Name"></input>
                    </div>
                    <div class="form-group d-flex">
                        <label className="mr-4 pr-1" for="email">Email</label>
                        <input type="email" id="email" class="form-control" name="Your Email"></input>
                    </div> 
                    <div class="form-group d-flex">
                        <label className="pr-1" for="message">Message</label>
                        <textarea class="form-control" name="Message" id="message"></textarea>
                    </div>
                </form>
                <input class="btn btn-primary" type="submit" value="Send"></input>
            </div>
        </div>
    );
};

export default Contact;