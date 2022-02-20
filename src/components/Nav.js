import './css/nav.css';


function Nav () {
    return ( <nav className="navbar sticky-top bs navbar-expand-lg bg navbar-light">
    <div class="container-fluid col-md-12">
      <a class="navbar-brand col-md-2 " href="#">
        <h1 className='title'> Cashback</h1>
       </a>
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <div class="row col-md-8 collapse navbar-collapse justify-content-between" id="navbarTogglerDemo02">
        <form className="col-lg-7 d-flex">
          <input
            type="search"
            className=" for form-control"
            placeholder="recherche..."
            aria-label="Search"
          />
          
          <button
            class="search"
            type="button"
            data-mdb-ripple-color="dark"
          >
            <i className='fa fa-search'></i>
            
          </button>
        
        </form>
        <span className='col-md-4'>
        <button className='btn2 btn-info'>s'inscrire</button>
        <button className='btn1 offset-md-1'>se connecté</button>
        </span>
    

      </div>
    </div>
    <div className='row col-md-12'>
         <div class=" collapse navbar-collapse " id="navbarTogglerDemo02">
                 

                 
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link act" aria-current="page" href="#"> <p class="colo">Decouverte </p> </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link colo" href="#"> <p class="colo">Promotions </p> </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#"> <p class="colo">Bien-etre </p></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#"><p class="colo">Shopping </p> </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#"><p class="colo">Restaurant </p> </a>
                      </li>
                      
                    </ul>
                  
                  </div>
    </div>
  </nav>
);
} 

export default Nav;