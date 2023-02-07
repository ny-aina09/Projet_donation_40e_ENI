import React, { useEffect } from 'react'
import AOS from 'aos'
import "aos/dist/aos.css"
import { Link } from "react-router-dom";
import { libraryList, AjoutLibrary } from './File';
import '../styles/style.css';
import Header from "../contexts/Header";
import Footer from "../contexts/Footer";

export default function Accueil() {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
        AOS.refresh();
    }, [])
    return (
        <>
            <Header />

            <section id="couverture" class="d-flex align-items-center justify-content-center">
                <div class="container position-relative">
                    <h1 data-aos="zoom-in">
                        Collecte de fonds pour un projet de réhabilitation <br />
                        et de rénovation de l'Ecole Nationale d'Informatique
                    </h1>
                    <h2 data-aos="zoom-in">"Ecole ingénieuse, la pépinière des élites informaticiennes"</h2>
                    <a href="#about" class="btn-get-started scrollto">
                        <Link class="link text-white" to="/donation">
                            Faire un don
                        </Link>
                    </a>
                </div>
            </section>

            <main id="main">
                <section id="services" class="services">
                    <div class="container">
                        <div class="section-title">
                            <h2>A quoi servira cette collecte ?</h2>
                            <p>
                                C’est depuis 1983 que l’ENI œuvre pour ces missions.
                                En co-organisation avec les anciens de l’ENI et l’association des étudiants de l’ENI,
                                l'École veut célébrer son 40ème anniversaire durant l’année 2023.
                                Cette célébration sera marquée par divers événements de sortie de promotion,
                                d’ateliers et conférences, de grand gala des anciens et sponsors,
                                des projets de rénovation de l'École et de construction de nouveaux bâtiments.
                            </p>
                        </div>

                        <div class="row text-center">
                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                <div class="icon-box iconbox-blue">
                                    <div class="icon">
                                        <i class="bx bx-home"></i>
                                    </div>
                                    <h4><a href="">Projet I</a></h4>
                                    <p>
                                        Cette célébration sera marquée par divers événements de sortie de promotion,
                                        d’ateliers et conférences, de grand gala des anciens et sponsors,
                                        des projets de rénovation de l'École et de construction de nouveaux bâtiments.
                                    </p>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                <div class="icon-box iconbox-blue">
                                    <div class="icon">
                                        <i class="bx bx-home"></i>
                                    </div>
                                    <h4><a href="">Projet I</a></h4>
                                    <p>
                                        Cette célébration sera marquée par divers événements de sortie de promotion,
                                        d’ateliers et conférences, de grand gala des anciens et sponsors,
                                        des projets de rénovation de l'École et de construction de nouveaux bâtiments.
                                    </p>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                <div class="icon-box iconbox-blue">
                                    <div class="icon">
                                        <i class="bx bx-home"></i>
                                    </div>
                                    <h4><a href="">Projet I</a></h4>
                                    <p>
                                        Cette célébration sera marquée par divers événements de sortie de promotion,
                                        d’ateliers et conférences, de grand gala des anciens et sponsors,
                                        des projets de rénovation de l'École et de construction de nouveaux bâtiments.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section id="services" class="services">
                    <div class="container">
                        <div class="section-title">
                            <div class="row">
                                <div class="col-lg-6 pt-4 pt-lg-0" data-aos="fade-right">
                                    <h2>Qui sommes-nous ?</h2>
                                    <p class="pb-5">
                                        C’est depuis 1983 que l’ENI œuvre pour ces missions.
                                        En co-organisation avec les anciens de l’ENI et l’association des étudiants de l’ENI,
                                        l'École veut célébrer son 40ème anniversaire durant l’année 2023.
                                        Cette célébration sera marquée par divers événements de sortie de promotion,
                                        d’ateliers et conférences, de grand gala des anciens et sponsors,
                                        des projets de rénovation de l'École et de construction de nouveaux bâtiments.
                                    </p>
                                </div>

                                <div class="col-lg-6" data-aos="fade-left">
                                    <img src="assets/img/logo.png" class="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="partenaires" class="partenaires">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                <img src="assets/img/partenaires/uf.jpg" class="img-fluid" alt="" />
                            </div>

                            <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                <img src="assets/img/partenaires/aeeni.jpg" class="img-fluid" alt="" />
                            </div>

                            <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                <img src="assets/img/partenaires/etech.jpg" class="img-fluid" alt="" />
                            </div>

                            <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                <img src="assets/img/partenaires/axian.jpg" class="img-fluid" alt="" />
                            </div>

                            <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                <img src="assets/img/partenaires/cementis.jpg" class="img-fluid" alt="" />
                            </div>

                            <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                <img src="assets/img/partenaires/nga.jpg" class="img-fluid" alt="" />
                            </div>
                        </div>

                    </div>
                </section>
            </main>

            <Footer />

            <a href="#" class="back-to-top"><i class="bx bx-up-arrow-alt"></i></a>

            {libraryList.forEach(x => AjoutLibrary(x))}
        </>
    );
}
