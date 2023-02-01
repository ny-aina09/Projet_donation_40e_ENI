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
                        "La changement, c'est maintenant!"
                    </h1>
                </div>
            </section>
			
            <main id="main">
                <section id="contact" class="contact">
                    <div class="container">
                        <div class="section-title">
                            <h2>On peut t'aider ?</h2>
                            <p>
                                Cette célébration sera marquée par divers événements de sortie de promotion, 
                                d’ateliers et conférences, de grand gala des anciens et sponsors, 
                                des projets de rénovation de l'École et de construction de nouveaux bâtiments.
                            </p>
                        </div>

                        <div class="row">
                            <div class="col-lg-6">
                                <div class="row">
                                    <div class="col-md-12" data-aos="zoom-in">
                                        <div class="info-box">
                                            <i class="bx bx-map"></i>
                                            <h3>Notre adresse</h3>
                                            <p>
                                                Antaninarenina, Tanambao<br/>
                                                BP 1487 Fianarantsoa (301)
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-md-6" data-aos="zoom-in">
                                        <div class="info-box mt-4">
                                            <i class="bx bx-envelope"></i>
                                            <h3>Adresse e-mail</h3>
                                            <p>eni@eni-univ-fianar.mg</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6" data-aos="zoom-in">
                                        <div class="info-box mt-4">
                                            <i class="bx bx-phone-call"></i>
                                            <h3>Téléphone</h3>
                                            <p> +261 34 05 733 36<br/>+261 33 42 302 02</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="col-lg-6">
                                <form action="forms/contact.php" method="post" class="php-email-form">
                                    <div class="form-row">
                                        <div class="col-md-6 form-group">
                                        <input type="text" name="name" class="form-control" id="name" placeholder="Votre nom" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                        <div class="validate"></div>
                                        </div>
                                        <div class="col-md-6 form-group">
                                        <input type="email" class="form-control" name="email" id="email" placeholder="Votre adresse e-mail" data-rule="email" data-msg="Please enter a valid email" />
                                        <div class="validate"></div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" name="subject" id="subject" placeholder="Sujet" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                        <div class="validate"></div>
                                    </div>
                                    <div class="form-group">
                                        <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Votre message"></textarea>
                                        <div class="validate"></div>
                                    </div>
                                    <div class="mb-3">
                                        <div class="loading">Loading</div>
                                        <div class="error-message"></div>
                                        <div class="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div class="text-center"><button type="submit">Envoyer</button></div>
                                </form>
                            </div>
                        </div>

                    </div>
                </section>
            </main>

            <Footer/>
		</>
	);
}
