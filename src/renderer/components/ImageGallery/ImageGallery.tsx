import { useAppSelector } from '@/store/hooks';
import React, { useState } from 'react'
import { useEffect } from 'react';
import styles from './ImageGallery.module.css'

const ImageGallery = () => {
    const { files, currentIndex } = useAppSelector((state) => state.files)
    return <div className={styles.ImageGallery}>
        <div className={styles.GalleryContent}>
            {files.map((item, itemIndex) => {
                let position = 'nextSlide';
                if (Number(currentIndex) === itemIndex) position = "activeSlide";
                if (itemIndex === Number(currentIndex) - 1 || (Number(currentIndex) === 0 && itemIndex === files.length - 1)) position = 'leftSlide';
                if (itemIndex === Number(currentIndex) + 1 || (Number(currentIndex) === files.length - 1 && itemIndex === 0)) position = "rightSlide";

                return (
                    <div
                        key={item.id}
                        className={styles[position]}
                    >
                        <span>{item.name}</span>
                    </div>
                );
            })}
            <div className={styles.btns}>
            </div>
        </div>
    </div >
}

export default ImageGallery
