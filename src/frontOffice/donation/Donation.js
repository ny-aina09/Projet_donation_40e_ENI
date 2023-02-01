import React, {useEffect, useState} from 'react'
import AOS from 'aos'
import "aos/dist/aos.css"
import '../styles/style.css';
import Loading from './Loading';
import Header from "../contexts/Header";
import Footer from "../contexts/Footer";
import CountUp from 'react-countup'

export default function Donation() {
    const[isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        AOS.init({
            duration: 2000
        });
        AOS.refresh();

        setTimeout(() => {
           setIsLoading(false);
         },1500);
    })

	return (
		<>
            {isLoading ? <Loading/> :
        <div>
            <Header/>

            <section id="couverture-donation" class="d-flex align-items-center justify-content-center">
                <div class="container position-relative">
                    <h1 data-aos="zoom-in">
                        Fonds collectés
                    </h1>
                    <h1 style={{fontSize:"20pt"}}>
                    <CountUp 
                        start={0}
                        end={3400000}
                        duration={1.4}
                        separator=" "
                        suffix=' Ar'
                        />
                    </h1>
                </div>
            </section>
			
            <main id="main">
                <section id="donation" class="donation">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3">
                                {/* <h2>Faire un don</h2>
                                <p class="pb-5">
                                    C’est depuis 1983 que l’ENI œuvre pour ces missions. 
                                    En co-organisation avec les anciens de l’ENI et l’association des étudiants de l’ENI,
                                    l'École veut célébrer son 40ème anniversaire durant l’année 2023.
                                    Cette célébration sera marquée par divers événements de sortie de promotion, 
                                    d’ateliers et conférences, de grand gala des anciens et sponsors, 
                                    des projets de rénovation de l'École et de construction de nouveaux bâtiments.
                                </p>
                                <img src="assets/img/partenaires/f5.jpeg" class="img-fluid" alt=""/> */}
                            </div>

                            <div class="col-lg-6">
                                <form class="donation-form">
                                    <div class="form-row">
                                        <div class="col-md-6 form-group">
                                            <input type="text" name="prenom" class="form-control" id="prenom" placeholder="Votre prénom" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                            <div class="validate"></div>
                                        </div>
                                        <div class="col-md-6 form-group">
                                            <input type="text" class="form-control" name="nom" id="nom" placeholder="Votre nom" data-rule="email" data-msg="Please enter a valid email" />
                                            <div class="validate"></div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <input type="email" class="form-control" name="email" id="email" placeholder="Votre adresse e-mail" data-rule="email" data-msg="Please enter a valid email" />
                                        <div class="validate"></div>
                                    </div>

                                    <div class="form-group">
                                        <select class="form-control" name="type_donateur" id="type_donateur"> 
                                            <option selected>Type:</option>
                                            <option>Entreprise / ONG</option>
                                            <option>Anciens ENI</option>
                                            <option>Individus</option>
                                        </select>
                                    </div>

                                    <div class="form-row">
                                        <div class="col-md-6 form-group">
                                            <select class="form-control" name="pays" id="pays"> 
                                                <option>Votre pays:</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6 form-group">
                                            <input type="number" class="form-control" name="code" id="code" placeholder="Code postal" data-rule="email" data-msg="Please enter a valid email" />
                                            <div class="validate"></div>
                                        </div>
                                    </div><br/>

                                    <div class="form-row">
                                        <div class="col-md-4 form-group text-center">
                                            <input type="radio" name="paiement" id="paiement"/>
                                            <img src="assets/img/logo/orange.png" style={{height:"50px"}}class="img-fluid" alt=""/>
                                        </div>

                                        <div class="col-md-4 form-group text-center">
                                            <input type="radio" name="paiement" id="paiement"/>&nbsp;&nbsp;
                                            <img src="assets/img/logo/paypal.png" style={{height:"50px"}}class="img-fluid" alt=""/>
                                        </div>

                                        <div class="col-md-4 form-group text-center">
                                            <input type="radio" name="paiement" id="paiement"/>&nbsp;&nbsp;
                                            <img src="assets/img/logo/visa.jpg" style={{height:"50px"}}class="img-fluid" alt=""/>
                                        </div>
                                    </div>
                                
                                    <div class="mb-3">
                                    <div class="loading">Loading</div>
                                    <div class="error-message"></div>
                                    <div class="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div class="text-center"><button type="submit" class="form-control">Je soutiens</button></div>
                                </form>
                            </div>

                            <div class="col-lg-3">
                            </div>
                        </div>

                    </div>
                </section>

            </main>

            <Footer/>
        </div>}
		</>
	);
}
