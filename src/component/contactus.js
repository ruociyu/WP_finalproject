import React from 'react';
import bootstrap from 'bootstrap';
import EmailIcon from '@material-ui/icons/Email';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';


const Contactus = () => {
    return(
        <div class="Container Contactus-background">

        <div class="row justify-content-center align-items-center text-center">
            <div class="col-4 justify-content-start align-items-start text-start">
                <div class="col-6 Contactinfo">
                    <p class="fw-bold h3">๐ฎ๐๐๐๐๐๐ ๐ด๐๐๐</p>
                    <LocalPhoneIcon></LocalPhoneIcon><b> Phone</b>
                    <h6>๐ฌ๐ฏ-๐ฎ๐ญ๐ญ๐ด๐ด๐ฌ๐ฌ</h6>
                    <EmailIcon></EmailIcon><b> Email</b>
                    <h6>๐จ๐๐๐@๐ด๐บ๐ฎ๐ถ๐น.๐ฐ๐ผ๐บ</h6>
                </div>
            </div>

                <form class="col-8 form Contactus-header">
                    <p class="display-4 fw-bold text-warning h1">ฤรถลแบรคฤแบ รแนฉ</p>
                    <div class="text-end fst-italic"><p class="h6">Please fill out the form below to send us an email<br></br> and we will
                  get back to you as soon as possible.</p></div>
                    <br></br>
                    <div class="col-7">
                        <label for="name" class="form-label form-control-lg">NickName</label>
                        <input type="text" class="form-control" id="name" placeholder="๐๐๐๐ ๐๐พ๐ธ๐๐๐ถ๐๐"></input>
                    </div>
                    <div class="col-7">
                        <label for="email" class="form-label form-control-lg">Email Address</label>
                            <input type="email" class="form-control" id="email" placeholder="๐๐ถ๐๐@๐๐๐ถ๐๐๐๐.๐ธ๐๐"></input>
                    </div>
                    <div class="col-7">
                        <label for="comment" class="form-label form-control-lg">Comment</label>
                            <textarea class="form-control" id="comment" rows="6" placeholder="๐๐๐พ๐๐ ๐๐๐๐๐๐ฝ๐พ๐๐ ๐๐ ๐๐"></textarea>
                    </div>

                    <br></br>
                    <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#exampleModal">   
                        Submit
                    </button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title text-warning" id="exampleModalLabel">Alert!</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body text-dark">
                            Confirm to send message?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-danger">Send Message</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </form>
  
        </div>
        </div>
    );
} 

export default Contactus;
