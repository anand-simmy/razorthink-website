import React from 'react'
import CustomSelect from '../../components/CustomSelect/CustomSelect'
import Card from './components/Card/Card'
import styles from './Homepage.module.scss'

const Homepage= () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.navbar}>
                <div className={styles.logo}>
                    <img src={'./img/homepage/rzt-logo.svg'} />
                </div>
                <div className={styles.navLinksContainer}>
                    <ul className={styles.navLinks}>
                        <CustomSelect>RZT Platform</CustomSelect>
                        <CustomSelect>Resources</CustomSelect>
                        <CustomSelect>Industries</CustomSelect>
                        <li>About Us</li>
                        <li className={styles.signUpButton}>Signup</li>
                    </ul>
                </div>
            </div>
            <div className={styles.section1}>
                <img src={'./img/homepage/hero.png'} />
                <div className={styles.heroBannerContent}>
                    <div className={styles.heroBannerText}>
                        <span className={styles.heroBannerTextOne}>Improve Your Company Performance with</span>
                        <span className={styles.heroBannerTextTwo}>RazorThink Enterprise</span>
                        <span className={styles.heroBannerTextThree}>AI Products</span>
                    </div>
                    <div className={styles.heroBannerButtons}>
                        <button className={styles.requestDemoButton}>Request A Demo</button>
                        <button className={styles.previewButton}>Preview</button>
                    </div>
                </div>
            </div>
            <div className={styles.section2}>
                <div className={styles.container}>
                    <div className={styles.infoContainer}>
                        <span className={styles.sectionLink}>AI Products</span>
                        <div className={styles.sectionMainHeader}>RZT AI Inventory Optimization</div>
                        <span className={styles.sectionHeaderCaption}>Dramatically improve your inventory forecasting
                            performance.</span>
                        <div className={styles.sectionInfo}>
                            Inventory mistakes are costly. The RZT AI Inventory Optimization product
                            automates and manages your internal planning processes and will significantly
                            outperform your current models.
                        </div>
                        <button className={styles.learnMoreButton}>Learn More</button>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src={'./img/homepage/section2.png'} />
                    </div>
                </div>
            </div>
            <div className={styles.section3}>
                <div className={styles.container}>
                    <div className={styles.heading}>
                        <span className={styles.sectionLink}>RZT aiOS</span>
                        <div className={styles.sectionMainHeader}>
                            <span>One environment to</span>
                            <span>create, tune, deploy and operate</span>
                            <span>your AI.</span>
                        </div>
                    </div>
                    <div className={styles.pipelineContainer}>
                        <Card
                            logoSrc='./img/homepage/card-images/create-1.png'
                            heading='Create'
                            info='Pluggable Components Visual Tools <-> SDK Collaboration'
                        />
                        <div className={styles.arrowContainer}>
                            <img alt='arrow' src='./img/homepage/card-images/arrow-2.svg' />
                        </div>
                        <Card
                            logoSrc='./img/homepage/card-images/tune.png'
                            heading='Tune'
                            info='Scaled Experiments Versioning (Code, Artifacts and Data) Explanations'
                        />
                        <div className={styles.arrowContainer}>
                            <img alt='arrow' src='./img/homepage/card-images/arrow-2.svg' />
                        </div>
                        <Card
                            logoSrc='./img/homepage/card-images/Deploy.png'
                            heading='Deploy'
                            info='Single Click Deployment Workflow Seamless Integration'
                        />
                        <div className={styles.arrowContainer}>
                            <img alt='arrow' src='./img/homepage/card-images/arrow-2.svg' />
                        </div>
                        <Card
                            logoSrc='./img/homepage/card-images/Operate-1.png'
                            heading='Operate'
                            info='Performance and Fault Tolerance Governance Model Monitoring'
                        />
                    </div>
                    <div className={styles.trainButton}>
                        <button className={styles.trainYourOwnButton}>Train your own</button>
                    </div>
                </div>
            </div>
            <div className={styles.section4}>
                <div className={styles.container}>
                    <div className={styles.headingContainer}>
                        <div className={styles.heading}>
                            <span>The RazorThink</span>
                            <span>Advantage</span>
                        </div>
                    </div>
                    <div className={styles.advantageContainer}>
                        <div className={styles.advantages}>
                            <div className={styles.advantagesSection1}>
                                <div className={styles.advantagesBox}>
                                    <div className={styles.advantagesBoxContent}>
                                        Intelligent Systems and Processes
                                    </div>
                                </div>
                                <div className={styles.advantagesBox}>
                                    <div className={styles.advantagesBoxContent}>
                                        Easy to use, highly flexible
                                    </div>
                                </div>
                                <div className={styles.advantagesBox}>
                                    <div className={styles.advantagesBoxContent}>
                                        Visibility
                                    </div>
                                </div>
                                <div className={styles.advantagesBox}>
                                    <div className={styles.advantagesBoxContent}>
                                        Scalability of AI development can be achieved
                                    </div>
                                </div>
                            </div>
                            <div className={styles.advantagesSection2}>
                                <div className={styles.advantagesBox}>
                                    <div className={styles.advantagesBoxContent}>
                                        Single operating system includes all current and future AI
                                    </div>
                                </div>
                                <div className={styles.advantagesBox}>
                                    <div className={styles.advantagesBoxContent}>
                                        Hosting flexibility
                                    </div>
                                </div>
                                <div className={styles.advantagesBox}>
                                    <div className={styles.advantagesBoxContent}>
                                        Preserve your current AI investment
                                    </div>
                                </div>
                                <div className={styles.advantagesBox}>
                                    <div className={styles.advantagesBoxContent}>
                                        Versioning is automated
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.advantageImage}>
                            <img alt='advantages' src={'./img/homepage/image 2.png'} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.section5}>
                <div className={styles.container}>
                    <div className={styles.headingContainer}>
                        <div className={styles.heading}>
                            Get started today
                        </div>
                        <div className={styles.headingCaption}>
                            Are you ready to experience the power and
                            simplicity of market proven AI Products?
                        </div>
                        <div className={styles.requestButton}>
                            <button>REQUEST A DEMO</button>
                        </div>
                    </div>
                </div>
                <div className={styles.upwardButton}>
                    <a href='#'>
                        <img alt='arrow' src='./img/homepage/arrow.svg' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Homepage