import { Link } from "react-router-dom";
export default function HeaderContext() {
	return (
		<>
        <header id="header" class="fixed-top header-transparent">
            <div class="container d-flex align-items-center">

            <h1 class="logo mr-auto">
                <Link class="link" to="/accueil">
                    <img src="assets/img/logo.png" alt=""/>
                </Link>
            </h1>

            <nav class="nav-menu d-none d-lg-block">
                <ul>
                    <li class="activ">
                        <Link class="link" to="/accueil">
                            Accueil
                        </Link>
                    </li>

                    <li class="activ">
                        <Link class="link" to="/projets">
                            Nos projets
                        </Link>
                    </li>
                    
                    <li>
                        <Link class="link" to="/donation">
                            Faire un don
                        </Link>
                    </li> 

                    <li>
                        <Link class="link" to="/contact">
                            Contact
                        </Link>
                    </li>

                    {/* <li>
                        <Link class="link" to="/contact">
                            Qui sommes-nous?
                        </Link>
                    </li> */}
                </ul>
            </nav>

            </div>
        </header>
		</>
	);
}
