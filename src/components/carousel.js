import './css/carousel.css';

function Carousel () {

    return (<div className='container-fluid co mb-5'>
          <h2 class="col-md-12 card-title centre crl ">1200 marchands partenaires avec des réductions</h2>
          <h4 class="col-md-12 card-title centre crl mb-5">Commande après commande, gagnez en moyenne 120€/an**</h4>
          <div className='container col-md-8 col-sm-12  mb-4'>
              <div className='row justify-content-between'>
              <button className='itm col-md-2 col-sm-6 mb-1'>Top marchands</button>
              <button className='itm col-md-2 col-sm-6 mb-1'>Voyage</button>
              <button className='itm col-md-2 col-sm-6 mb-1'>Maison & higth-tech</button>
              <button className='itm col-md-2 col-sm-6 mb-1'>Mode</button>
              <button className='itm col-md-2 col-sm-6 mb-1'>Beauté</button>
              </div>
                
          </div>
    <div class="page-content page-container" id="page-content">
        <div class="padding">
            <div class="row container-fluid">
                <div class="row col-lg-12 grid-margin stretch-card">
                    <div class="card">
                  
                        <div class="card-body">
                            
                            <div class="row justify-content-between">
                            <div class="col-sm-6 col-sms-6 col-md-3">
                                <article class="box">
                                    <figure> <a href="#" data-post_id="45" className="img"><img width="500" height="300" src="https://i.imgur.com/D5cu5rs.jpg" class="attachment-biggallery-thumb size-biggallery-thumb wp-post-image" alt=""></img></a>  </figure>
                                </article>
                            </div>
                            
                        </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </div>
    </div>
    );
} export default Carousel;