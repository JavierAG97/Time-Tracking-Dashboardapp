import React from 'react'
import Data from '../data.json';
import work from "../images/icon-work.svg";
import play from "../images/icon-play.svg";
import exercise from "../images/icon-exercise.svg";
import social from "../images/icon-social.svg";
import selfCare from "../images/icon-self-care.svg";
import study from "../images/icon-study.svg";
import option from "../images/icon-ellipsis.svg"

import classes from './PlayCard.module.css';

export const Play = (props) => {
    function render(data, value) {
        return Data[data]['timeframes'][
            [
                props.Day ? 'daily' : props.Week ? 'weekly' : props.Month ? 'monthly' : 'daily',
            ]
        ][value];
    }
    return (
        <div className={classes.gridContainer}>
        <div className={classes.col}>
          <div className={classes.work}>
            <div className={classes.colImg}>
              <img src={work} />
            </div>
            <div className={classes.work__time}>
              <div className={classes.work__option}>
                <p>Work</p>
                <img src={option} />
              </div>
              <div className={classes.work__option1}>
                <p className={classes.work__hrs}>{render(0, ["current"])}hrs</p>
                <p>{`Last Week - ${render(0, ["previous"])}hrs`}</p>
              </div>
            </div>
          </div>
          <div className={classes.play}>
            <div className={classes.colImg1}>
              <img src={play} />
            </div>
            <div className={classes.work__time}>
              <div className={classes.work__option}>
                <p>Play</p>
                <img src={option} />
              </div>
              <div className={classes.work__option1}>
                <p className={classes.work__hrs}>{render(1, ["current"])}hrs</p>
                <p>{`Last Week - ${render(1, ["previous"])}hrs`}</p>
              </div>
            </div>
          </div>
          <div className={classes.study}>
            <div className={classes.colImg2}>
              <img src={study} />
            </div>
            <div className={classes.work__time}>
              <div className={classes.work__option}>
                <p>Study</p>
                <img src={option} />
              </div>
              <div className={classes.work__option1}>
                <p className={classes.work__hrs}>{render(2, ["current"])}hrs</p>
                <p>{`Last Week - ${render(2, ["previous"])}hrs`}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.col}>
          <div className={classes.exercise}>
            <div className={classes.colImg3}>
              <img src={exercise} />
            </div>
            <div className={classes.work__time}>
              <div className={classes.work__option}>
                <p>Exercise</p>
                <img src={option} />
              </div>
              <div className={classes.work__option1}>
                <p className={classes.work__hrs}>{render(3, ["current"])}hrs</p>
                <p>{`Last Week - ${render(3, ["previous"])}hrs`}</p>
              </div>
            </div>
          </div>
          <div className={classes.social}>
            <div className={classes.colImg4}>
              <img src={social} />
            </div>
            <div className={classes.work__time}>
              <div className={classes.work__option}>
                <p>Social</p>
                <img src={option} />
              </div>
              <div className={classes.work__option1}>
                <p className={classes.work__hrs}>{render(4, ["current"])}hrs</p>
                <p>{`Last Week - ${render(4, ["previous"])}hrs`}</p>
              </div>
            </div>
          </div>
          <div className={classes.selfCare}>
            <div className={classes.colImg5}>
              <img src={selfCare} />
            </div>
            <div className={classes.work__time}>
              <div className={classes.work__option}>
                <p>Self Care</p>
                <img src={option} />
              </div>
              <div className={classes.work__option1}>
                <p className={classes.work__hrs}>{render(5, ["current"])}hrs</p>
                <p>{`Last Week - ${render(5, ["previous"])}hrs`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Play;