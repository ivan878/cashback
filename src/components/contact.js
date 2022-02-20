import './css/contact.css';

function Contact () {
    return (    <div className='container-fluid'> 
    <div className='container col-md-6'> 
         <div className='container'>
             <h3>Nous Conctacter</h3>
         </div>
         <form className='container justify-content-center'>
 
    <div class="form-outline mb-4">
      <input type="text" id="form4Example1" class="form-control" />
      <label class="form-label" for="form4Example1">Name</label>
    </div>
  
   
    <div class="form-outline mb-4">
      <input type="email" id="form4Example2" class="form-control" />
      <label class="form-label" for="form4Example2">Email address</label>
    </div>
  
   
    <div class="form-outline mb-4">
      <textarea class="form-control" id="form4Example3" rows="4"></textarea>
      <label class="form-label" for="form4Example3">Message</label>
    </div>
    <button type="submit" className="col-md-12 btn btn-success btn-block mb-4">Send</button>
  </form>
  </div>
  </div> 
    );
}export default Contact;