import * as React from 'react';
import * as types from './Navbar.types';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import { LogoIcon } from 'icons';
import { useHistory } from 'react-router-dom';
import {
    TextBlock,
    Button
} from 'components';

export const Navbar: React.FunctionComponent<types.IProps> = props => {
    const { activePage } = props; 
    let history = useHistory();

    return (
        <div className={styles.Navbar}>
            <div className={styles.NavPanel}>
                <LogoIcon
                    className={styles.LogoIcon}
                    size={32}
                />
                <TextBlock
                    className={
                        classNames(
                            styles.HomeText,
                            (activePage === 'home' ? styles.Active : null)
                        )
                    } 
                    fontSize={'regular'}
                    onClick={() => history.push('/')}
                >
                    Home
                </TextBlock>
                <TextBlock
                    className={
                        classNames(
                            styles.BlogText,
                            (activePage === 'blog' ? styles.Active : null)
                        )
                    } 
                    fontSize={'regular'}
                    onClick={() => history.push('/')}
                >
                    Blog
                </TextBlock>
                <TextBlock
                    className={
                        classNames(
                            styles.CorcesText,
                            (activePage === 'cources' ? styles.Active : null)
                        )
                    }
                    fontSize={'regular'}
                    onClick={() => history.push('/')}
                >
                    Cources
                </TextBlock>
            </div>
            <div className={styles.UserInfo}>
                <Button
                    className={styles.Button}
                    onClick={event => history.push("/login")}
                    color={'green'}
                    title={'Log In'}
                    titleSize={'regular'}
                    titleWeight={'medium'}
                    rounded
                />
            </div> 
        </div>
    )
}