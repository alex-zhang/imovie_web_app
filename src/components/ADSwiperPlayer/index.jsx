import React from 'react';
import Swiper from 'react-id-swiper';
import 'react-id-swiper/libs/styles/css/swiper.css';
import styles from './styles.styl';

export default class extends React.Component {

  static defaultProps = {
    slides: []
  };

  static propTypes = {
    slides: React.PropTypes.array
  };


  render() {
    const params = {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      loop: true,
      grabCursor: true
    };

    return (
      <div className={styles.self}>
        <Swiper {...params}>
          {this.props.slides.map((slide)=>{
            return <div className={styles.slideItem} key={slide.id} style={{width:100,backgroundImage: `url(${slide.url})`}}></div>
          })}
        </Swiper>
      </div>
    );
  }
}
