import React from 'react';
import Swiper from 'react-id-swiper';
import 'react-id-swiper/libs/styles/css/swiper.css';
import styles from './styles.styl';

export default class extends React.PureComponent {

  static defaultProps = {
    slides: []
  };

  static propTypes = {
    slides: React.PropTypes.array
  };

  onItemClick(slide) {
    let {onItemClick} = this.props;
    if(!onItemClick) {
      return;
    }

    onItemClick(slide);
  }

  render() {
    const params = {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      autoplay: 2000,
      loop: true,
      grabCursor: true
    };
    let self = this;
    return (
      <div className={styles.self}>
        <Swiper {...params}>
          {this.props.slides.map((slide)=>{
            return <div className={styles.slideItem}
                        key={slide.id}
                        style={{width:100,backgroundImage: `url(${slide.url})`}}></div>
          })}
        </Swiper>
      </div>
    );
  }
}
