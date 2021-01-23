import * as React from 'react';
import styles from './LogInPage.module.scss';
import {
    Navbar
} from 'components';

export const LogInPage: React.FunctionComponent = props => {
    return (
        <div className={styles.LogInPage}>
            <Navbar />
        </div>
    )
}