import './css/baniere.css';

function Baniere () {
    return (<div className="container-fluid barner col-md-12 mb-5">
         <div className="container"> 
        <div className="row justify-content-between col-md-12">
           <div className="row col-md-6 ">
                <h1 className='mb-5'>
                Cashback vous reverse de l'argent lorsque vous achetez sur internet, c'est le
                <span className='colortext'> cashback ! </span>
                </h1>
                <button className='col-md-8 btn3 mb-5'>Je m'inscris gratuitement 3$ offerts</button>

               <div className="row"> 
                    <div className='col-md-3'>
                    <i className='fa fa-book'></i>
                    </div>
                    <div className='col-md-3'>
                    <i className='fa fa-car'></i>
                    </div>
                    <div className='col-md-3'>
                    <i className='fa fa-stop'></i>
                    </div>
                    <div className='col-md-3'>
                    <i className='fa fa-search'></i>
                    </div>
               </div>
           </div>
           <div className="row col-md-6">
           <img src='' alt='img' className='img'>
           </img>
           </div>    
        </div>
        </div>
    </div>

    );
}
export default Baniere;