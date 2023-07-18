import { useAppSelector } from '@/store/hooks'
import styles from './ImageGallery.module.css'
import cn from 'classnames'

const ImageGallery = () => {
    const { files, currentFile } = useAppSelector((state) => state.files)
    let index = files.findIndex((file) => file.id === currentFile)
    return (
        <div className={styles.ImageGallery}>
            <div className={styles.GalleryContent}>
                {files.map((item, itemIndex) => {
                    let position = 'NextSlide'
                    if (itemIndex === index - 1 || (index === 0 && itemIndex === files.length - 1))
                        position = 'LeftSlide'
                    if (itemIndex === index + 1 || (index === files.length - 1 && itemIndex === 0))
                        position = 'RightSlide'
                    if (index === itemIndex || files.length === 1) position = 'ActiveSlide'
                    return (
                        <div key={item.id} className={cn(styles.DefaultSlide, styles[position])}>
                            <img src={item.pathToFile} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ImageGallery

const Slide: React.FC<SlideProps> = ({ path }) => {
    let extension = 'default'
    if (path !== undefined) {
        //extension = path.split('.').pop().toLowerCase();
    }

    const isImage = /\.(jpg|jpeg|png|gif)$/i.test(extension)
    const isVideo = /\.(mp4|avi|mov)$/i.test(extension)
    const isText = /\.(txt|csv)$/i.test(extension)
    return <div></div>
}

interface SlideProps {
    path: string | 'default'
}
