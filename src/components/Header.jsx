import styles from './Header.module.css'

import ingiteLogo from '../images/ignite-logo.svg';

export function Header(){
    return(
        <header className={styles.header }>
            <img src={ingiteLogo} />
        </header>
    );
}