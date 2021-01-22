import * as React from 'react';
import styles from './MainPage.module.scss';
import {
    Navbar,
    TextBlock
} from '../../components';
import {
    MainPageIcon
} from '../../icons/index';

export const MainPage: React.FunctionComponent = props => {
    return (
        <div className={styles.MainPage}>
            <Navbar />
            <div className={styles.Content}>
                <div className={styles.TextView}>
                    <TextBlock 
                        className={styles.Title}
                        fontSize={'title1'}
                        fontWeight={'bold'}
                    >
                        New learning experience <br />
                        for everyone
                    </TextBlock>
                    <hr className={styles.Divider} />
                    <TextBlock
                        className={styles.Text}
                        fontSize={'title5'}
                        fontWeight={'regular'}
                    >
                        Improve your technical skills from easy exercesises to extremely hard, <br /> 
                        here you can find everything to your taste, earn archivements, compete <br />
                        with friends and grow as a specialist
                    </TextBlock>
                    <TextBlock
                        className={styles.Text}
                        fontSize={'regular'}
                        fontWeight={'regular'}
                    >
                        Start Now
                    </TextBlock>
                </div>
                <MainPageIcon 
                    className={styles.MainPageIcon}
                    size={820}
                />
            </div>
            <div className={styles.Footer}>
                <TextBlock
                    className={styles.FooterText}
                    fontSize={'subtext'}
                    fontWeight={'regular'}
                >
                    Copyright &copy; 2021 Toringol and Shev Inc. All rights reserved.
                </TextBlock>
            </div>
        </div>
    )
}