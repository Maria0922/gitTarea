import React from 'react'

//importar css
import "../styles/Rstudio.css"
import "bootstrap/dist/css/bootstrap.css"


class Rstudio extends React.Component{
    render(){
        return(
            <div className="cardcolor">
                <img style={{width:"380px", marginLeft:"130px"}} 
                src="https://d33wubrfki0l68.cloudfront.net/ba652c7b810bc5ac2f680266e10f65260a045b7f/21b9b/assets/img/rspm.png"></img>
                <div class="container">
                    <div class="row">
                        <div class="col-sm">
                            <div className="card1">
                                <div className="card-body">
                                    <h6 className="card-subtitle mb-2 text-muted">Base</h6>
                                    <h5 className="card-title ">$4,995</h5>
                                    <p className="card-text ">per year / no user limit 
                                    <br></br>
                                    <br></br>
                                        One Server Activation <br></br>
                                        One Repository<br></br>
                                        Access All of CRAN or Set Up Curated Subsets<br></br>
                                        Github Packages<br></br>
                                        Local Packages<br></br>
                                        Search And Browse</p>
                                </div>
                                <button type="button" class="btn btn-primary">BUY NOW</button>
                                <br></br><br></br> 
                                <a className="text" href="#">Dowload 45 Day Trial</a>  |
                                <a  href="#"> Learn More </a>
                                
                            </div>
                        </div>
                        <div class="col-sm">
                            <div className="card1">
                                <div className="card-body">
                                    <h6 className="card-subtitle mb-2 text-muted">Standar</h6>
                                    <h5 className="card-title ">$9,995</h5>
                                    <p className="card-text ">per year / no user limit 
                                    <br></br>
                                    <br></br>
                                        Includes All Base Features<br></br>
                                        + 2 Server Activations for High Availability<br></br>
                                        + 1 Staging Server<br></br>
                                        + 10 Repositories</p>
                                </div>
                                <br></br><br></br><br></br>
                                <button type="button" class="btn btn-primary">BUY NOW</button>
                                <br></br><br></br> 
                                <a className="text" href="#">Dowload 45 Day Trial</a>  |
                                <a  href="#"> Learn More </a>
                            </div>

                        </div>
                        <div class="col-sm">
                            <div className="card1">
                                <div className="card-body">
                                    <h6 className="card-subtitle mb-2 text-muted">Enterprise</h6>
                                    <h5 className="card-title ">$24,995</h5>
                                    <p className="card-text ">per year / no user limit 
                                    <br></br>
                                    <br></br>
                                        Includes All Standard Features<br></br>
                                        + Unlimited Server Activations<br></br>
                                        + Unlimited Repositories</p>
                                </div>
                                <br></br><br></br><br></br><br></br>
                                <button type="button" class="btn btn-primary">CONTAC SALES</button>
                                <br></br><br></br> 
                                <a  href="#"> Learn More </a>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
        );
    }
}



export default Rstudio;