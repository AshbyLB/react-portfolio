import React from 'react';
import './Project.css';
import Drinks from '../../src/images/drinkrandom.png';
import Ghost from '../../src/images/ghostly.png';
import Schedule from '../../src/images/schedule.png';
import Password from '../../src/images/password.png';
import Fitness from '../../src/images/fitnesspro.png';
import National from '../../src/images/npwsite.png';



function Project() {
    return (

        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="card col-12 col-md-4 text-white m-4 bg-transparent">
                        <img src={National} className="card-img" alt="..."></img>
                        <div id="hiddenText" className="card-img-overlay row align-items-center ">
                            <div className=" text-center">
                                <a className="card-text text-decoration-none mx-4 fs-3" href="https://arcane-hamlet-34907.herokuapp.com/" >Website</a>
                                <a className="card-text text-decoration-none mx-4 fs-3" href="https://github.com/AshbyLB/national-roadtrip" >GitHub</a>
                            </div>
                        </div>
                    </div>
                    <div className="card col-12 col-md-4 text-white m-4 bg-transparent">
                        <img src={Drinks} className="card-img" alt="..."></img>
                        <div id="hiddenText" className="card-img-overlay row align-items-center">
                            <div className=" text-center">
                            <a className="card-text text-decoration-none mx-4 fs-3" href="https://ashbylb.github.io/dinner-drink-decisions/" >Website</a>
                            <a className="card-text text-decoration-none mx-4 fs-3" href="https://github.com/AshbyLB/dinner-drink-decisions" >GitHub</a>
                            </div>
                        </div>
                    </div>
                    <div className="card col-12 col-md-4 text-white m-4 bg-transparent">
                        <img src={Ghost} className="card-img" alt="..."></img>
                        <div id="hiddenText" className="card-img-overlay row align-items-center">
                            <div className=" text-center">
                                <a className="card-text text-decoration-none mx-4 fs-3" href="https://ghostly-stories-10-4-2021.herokuapp.com/" >Website</a>
                                <a className="card-text text-decoration-none mx-4 fs-3" href="https://github.com/as98250/ghostly-stories" >GitHub</a>
                            </div>
                        </div>
                    </div>
                    <div className="card col-12 col-md-4 text-white m-4 bg-transparent">
                        <img src={Schedule} className="card-img" alt="..."></img>
                        <div id="hiddenText" className="card-img-overlay row align-items-center">
                            <div className=" text-center">
                                <a className="card-text text-decoration-none mx-4 fs-3" href="https://ashbylb.github.io/workday-scheduler/" >Website</a>
                                <a className="card-text text-decoration-none mx-4 fs-3" href="https://github.com/AshbyLB/workday-scheduler" >GitHub</a>
                            </div>
                        </div>
                    </div>
                    <div className="card col-12 col-md-4 text-white m-4 bg-transparent">
                        <img src={Password} className="card-img" alt="..."></img>
                        <div id="hiddenText" className="card-img-overlay row align-items-center">
                            <div className=" text-center">
                                <a className="card-text text-decoration-none mx-4 fs-3" href="https://ashbylb.github.io/customized-password-generator/" >Website</a>
                                <a className="card-text text-decoration-none mx-4 fs-3" href="https://github.com/AshbyLB/password-generator" >GitHub</a>
                            </div>
                        </div>
                    </div>
                    <div className="card col-12 col-md-4 text-white m-4 bg-transparent">
                        <img src={Fitness} className="card-img" alt="..."></img>
                        <div id="hiddenText" className="card-img-overlay row align-items-center">
                            <div className=" text-center">
                                <a className="card-text text-decoration-none mx-4 fs-3" href="https://blooming-peak-88023.herokuapp.com/?id=616ef3422bb4390016549c34" >Website</a>
                                <a className="card-text text-decoration-none mx-4 fs-3" href="https://github.com/AshbyLB/nosql-workout-tracker" >GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}



export default Project;