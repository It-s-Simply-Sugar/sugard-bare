import React from 'react';
import './Slider.css';
import leftArrow from '../../../assets/arrow-left.png';
import rightArrow from '../../../assets/arrow-right.png';

type Props = {
  direction: string;
  moveSlide: () => void;
};

export default function BtnSlider({ direction, moveSlide }: Props) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}>
      <img src={direction === 'next' ? rightArrow : leftArrow} />
    </button>
  );
}
