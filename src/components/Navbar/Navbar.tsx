import * as React from 'react';
import * as types from './Navbar.types';
import styles from './Navbar.module.scss';
import { LogoIcon } from 'icons';
import { useHistory } from 'react-router-dom';
import {
    TextBlock,
    Button
} from '..';

export const Navbar: React.FunctionComponent<types.INavbarProps> = props => {
    let history = useHistory();

    return (
        <div className={styles.Navbar}>
            <div className={styles.NavPanel}>
                <LogoIcon
                    className={styles.LogoIcon}
                    size={32}
                />
                <TextBlock className={styles.HomeText} fontSize={'regular'}>Home</TextBlock>
                <TextBlock className={styles.BlogText} fontSize={'regular'}>Blog</TextBlock>
                <TextBlock className={styles.CorcesText} fontSize={'regular'}>Cources</TextBlock>
            </div>
            <div className={styles.UserInfo}>
                <Button
                    className={styles.Button}
                    onClick={event => history.push("/login")}
                    color={'green'}
                    title={'Log In'}
                    rounded
                />
            </div> 
        </div>
    )
}