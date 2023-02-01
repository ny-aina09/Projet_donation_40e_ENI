import React from 'react'
import '../styles/style.css';
import Header from "../contexts/Header";
import Footer from "../contexts/Footer";

export default function Contact() {
	return (
		<>
            <Header/>

            <section id="couverture-donation" class="d-flex align-items-center justify-content-center">
                <div class="container position-relative">
                    <h1 data-aos="zoom-in">
                        Vision, Travail, Réussite
                    </h1>
                </div>
            </section>
			
            <main id="main">
                <section id="services" class="services">
                    <div class="container">
                        <div class="section-title">
                            <h2>Projet I</h2><br/>
                            <div class="row" data-aos="fade-down">
                                <div class="col-lg-7 pt-4 pt-lg-0">
                                    <p class="pb-5">
                                        C’est depuis 1983 que l’ENI œuvre pour ces missions. 
                                        En co-organisation avec les anciens de l’ENI et l’association des étudiants de l’ENI,
                                        l'École veut célébrer son 40ème anniversaire durant l’année 2023.
                                        Cette célébration sera marquée par divers événements de sortie de promotion, 
                                        d’ateliers et conférences, de grand gala des anciens et sponsors, 
                                        des projets de rénovation de l'École et de construction de nouveaux bâtiments.
                                    </p>
                                </div>

                                <div class="col-lg-5">
                                    <img src="assets/img/cours.png" class="img-fluid" style={{height:"300px"}} alt=""/>
                                </div>
                            </div><br/><br/><br/>

                            <h2>Projet II</h2><br/>
                            <div class="row" data-aos="zoom-in">
                                <p class="pb-5">
                                    C’est depuis 1983 que l’ENI œuvre pour ces missions. 
                                    En co-organisation avec les anciens de l’ENI et l’association des étudiants de l’ENI,
                                    l'École veut célébrer son 40ème anniversaire durant l’année 2023.
                                    Cette célébration sera marquée par divers événements de sortie de promotion, 
                                    d’ateliers et conférences, de grand gala des anciens et sponsors, 
                                    des projets de rénovation de l'École et de construction de nouveaux bâtiments.
                                </p>
                            </div>

                            <section id="projet" class="projet">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-4" >
                                            <img src="assets/img/mur1.png" class="img-fluid" style={{height:"200px"}} alt=""/>
                                        </div>

                                        <div class="col-lg-4" >
                                            <img src="assets/img/mur2.png" class="img-fluid" style={{height:"200px"}} alt=""/>
                                        </div>

                                        <div class="col-lg-4" >
                                            <img src="assets/img/eni.jpg" class="img-fluid" style={{height:"200px"}} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
            </main>

            <Footer/>
		</>
	);
}
