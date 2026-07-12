import giftIcon from '../../assets/gift.svg';
import styles from './WishlistText.module.scss';

export function WishlistText() {
    return (
        <div className={styles.block}>
            <img src={giftIcon}></img>
            <p>Wishlist предназначен для книг, которые вы бы хотели получить в подарок в печатном виде</p>
        </div>
    )
}