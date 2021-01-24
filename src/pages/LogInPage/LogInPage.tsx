import * as React from 'react';
import styles from './LogInPage.module.scss';
import {
    Navbar,
    Card,
    TextBlock
} from 'components';

export const LogInPage: React.FunctionComponent = props => {
    return (
        <div className={styles.LogInPage}>
            <Navbar />
            <div className={styles.Content}>
                <Card className={styles.Card}>
                    <div className={styles.SignInBlock}>
                        <TextBlock
                            className={styles.SignInText}
                            fontSize={'title2'}
                            fontWeight={'bold'}
                        >
                            Sign in to Education+
                        </TextBlock>
                        <div className={styles.Services}>
                            <TextBlock
                                className={styles.ServiceYaText}
                                fontSize={'title5'}
                                fontWeight={'bold'}
                            >
                                Ya
                            </TextBlock>
                            <TextBlock
                                className={styles.ServiceGoogleText}
                                fontSize={'title5'}
                                fontWeight={'bold'}
                            >
                                G+
                            </TextBlock>
                            <TextBlock
                                className={styles.ServiceVkText}
                                fontSize={'title5'}
                                fontWeight={'bold'}
                            >
                                vk
                            </TextBlock>
                        </div>
                    </div>
                    <div className={styles.SignUpBlock}>
                        <TextBlock
                            className={styles.GreetingsText}
                            fontSize={'title2'}
                            fontWeight={'bold'}
                        >
                            Hello, friend!
                        </TextBlock>
                    </div>
                </Card>
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