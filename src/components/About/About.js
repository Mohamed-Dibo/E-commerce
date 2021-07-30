import React from 'react';
import PageHero from '../PageHero/PageHero';
import about from '../../assets/hero-bcg.jpeg'
import classes from './About.module.css'

const About = ({match}) => {
    return (
        <div>
            <PageHero url={match.url}/>
            <div className={classes.about}>
                <img src={about} alt='about' />
                <div className={classes.content}>
                <div className={classes.title}>
                    <h3>Our Story</h3>
                    <div className={classes.underLine}></div>
                </div>
                <div className={classes.info}>
                    <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.
                    </p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default About;