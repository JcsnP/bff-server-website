import "../assets/Home.css";
import sectionIntro from "../images/section-intro.png";

export default function Home() {
    return(
        <>  
            <header>
                <div className="container is-flex is-flex-direction-column is-align-items-center has-text-centered">
                    <h1 className="has-text-white pt-5 title is-1">BFF SERVER</h1>
                    <p className="has-text-white title pt-5">
                        FRBFF.aternos.me
                    </p>
                    <p className="has-text-white title pb-5">
                        Play on 1.16.5
                    </p>
                </div>
            </header>
            <section className="bg-black">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <img src={sectionIntro} alt="" />
                        </div>
                        <div className="column is-three-fifths">
                            <h2 className="title is-2 has-text-white">What is BFF Server ?</h2>
                            <div className="content">
                                <p className="subtitle is-5 has-text-white has-text-justified">
                                    BFF Server is a private Minecraft Survival Multiplayer server where 3 initial players and 1 lost initial member come together to build a city in Minecraft. Political and administrative principles are applied within the server as well. The atmosphere of playing is serious but still having fun.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
        
    );
}