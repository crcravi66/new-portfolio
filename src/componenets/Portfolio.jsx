import React from "react";

import swipeImg from '../assets/img/swipe.jpg'
import massively from '../assets/img/massively.jpg'
import hpImg from '../assets/img/hpproject.jpg'
import RefProject from '../assets/img/React-Ref-Demo-Project.jpeg'
import investCal from '../assets/img/Investment-Cal.jpeg'
import elegantContext from '../assets/img/Elegant-context.jpeg'
import reactQuiz from '../assets/img/React-Quiz.jpeg'
import formApp from '../assets/img/React-Form.jpeg'
import Analytics_dashboard from '../assets/img/Analytics_dashboard.jpg'
import ReactCRUDApp from '../assets/img/React-CRUD-app.jpg'


const Portfolio = () => {
    return (<section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="title-box text-center">
                        <h3 className="title-a">
                            Portfolio
                        </h3>
                        <div className="line-mf"></div>
                    </div>
                </div>
            </div>
            <div className="row">

                <div ><h1 className="mb-5 fw-bold fs-3 text-primary w-title ">React Projects :-</h1></div>
                <div className="col-md-6">
                    <div className="work-box">
                        <div className="work-img">
                            <a href="https://crcravi66.github.io/analytics-dashboard/"><img src={Analytics_dashboard} alt=""
                                className="img-fluid" /></a>
                        </div>
                        <div className="work-content">
                            <div className="row">
                                <div className="col-sm-8">
                                    <h2 className="w-title">Analytics Dashboard</h2>
                                    <div className="w-more">
                                        <span className="w-ctegory">Web Design</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="work-box">
                        <div className="work-img">
                            <a href="https://crcravi66.github.io/react-crud-app/"><img src={ReactCRUDApp} alt=""
                                className="img-fluid" /></a>
                        </div>
                        <div className="work-content">
                            <div className="row" >
                                <div className="col-sm-12" >
                                    <h2 className="w-title">React CRUD app</h2>
                                    <div className="d-flex justify-content-evenly" >
                                        <p className="p-in-portfolio mx-2"> Admin Id : admin@example.com <br /> Password : admin123</p>
                                        <p className="p-in-portfolio"> User Id : user@example.com <br /> Password : user123</p>
                                    </div>
                                    {/* <div className="w-more">
                                        <span className="w-ctegory">Web Design</span>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="work-box">
                        <div className="work-img">
                            <a href="https://crcravi66.github.io/react_project_manager/"><img src={RefProject} alt=""
                                className="img-fluid" /></a>
                        </div>
                        <div className="work-content">
                            <div className="row">
                                <div className="col-sm-8">
                                    <h2 className="w-title">React Project Manager(React.js)</h2>
                                    <div className="w-more">
                                        <span className="w-ctegory">Web Design</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="work-box">
                        <div className="work-img">
                            <a href="https://crcravi66.github.io/investment_calculator/"><img src={investCal} alt=""
                                className="img-fluid" /></a>
                        </div>
                        <div className="work-content">
                            <div className="row">
                                <div className="col-sm-8">
                                    <h2 className="w-title">Investment Calculator(React.js)</h2>
                                    <div className="w-more">
                                        <span className="w-ctegory">Web Design</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="work-box">
                        <div className="work-img">
                            <a href="https://crcravi66.github.io/elegant_context/"><img src={elegantContext} alt=""
                                className="img-fluid" /></a>
                        </div>
                        <div className="work-content">
                            <div className="row">
                                <div className="col-sm-8">
                                    <h2 className="w-title">ELEGANT CONTEXT(React.js)</h2>
                                    <div className="w-more">
                                        <span className="w-ctegory">Web Design</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="work-box">
                        <div className="work-img">
                            <a href="https://crcravi66.github.io/react_quiz_app/"><img src={reactQuiz} alt=""
                                className="img-fluid" /></a>
                        </div>
                        <div className="work-content">
                            <div className="row">
                                <div className="col-sm-8">
                                    <h2 className="w-title">REACT QUIZ(React.js)</h2>
                                    <div className="w-more">
                                        <span className="w-ctegory">Web Design</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="work-box">
                        <div className="work-img">
                            <a href="https://crcravi66.github.io/react_form_input/"><img src={formApp} alt=""
                                className="img-fluid" /></a>
                        </div>
                        <div className="work-content">
                            <div className="row">
                                <div className="col-sm-8">
                                    <h2 className="w-title">React Forms(React.js)</h2>
                                    <div className="w-more">
                                        <span className="w-ctegory">Web Design</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div ><h1 className="mb-5 fw-bold fs-3 text-primary w-title ">HTML Projects :-</h1></div>
                <div className="col-md-6">
                    <div className="work-box">
                        <div className="work-img">
                            <a href="https://crcravi66.github.io/html-practices/Index.html"><img src={swipeImg} alt=""
                                className="img-fluid" /></a>
                        </div>
                        <div className="work-content">
                            <div className="row">
                                <div className="col-sm-8">
                                    <h2 className="w-title">SWIPE PROJECT</h2>
                                    <div className="w-more">
                                        <span className="w-ctegory">Web Design</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="work-box">
                        <div className="work-img">
                            <a href="https://crcravi66.github.io/html-practices/massively.html"><img src={massively}
                                alt="" className="img-fluid" /></a>
                        </div>
                        <div className="work-content">
                            <div className="row">
                                <div className="col-sm-8">
                                    <h2 className="w-title">MASSIVELY PROJECT</h2>
                                    <div className="w-more">
                                        <span className="w-ctegory">Web Design</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="work-box">
                        <div className="work-img">
                            <a href="https://crcravi66.github.io/hp-project/"><img src={hpImg} alt=""
                                className="img-fluid" /></a>
                        </div>
                        <div className="work-content">
                            <div className="row">
                                <div className="col-sm-8">
                                    <h2 className="w-title">HP Project</h2>
                                    <div className="w-more">
                                        <span className="w-ctegory">Web Design</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>)
}


export default Portfolio;