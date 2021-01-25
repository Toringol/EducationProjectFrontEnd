import * as React from 'react';
import styles from './LogInPage.module.scss';
import {
    Navbar,
    Card,
    TextBlock,
    InputBlock,
    Button
} from 'components';
import { useHistory } from 'react-router-dom';

export const LogInPage: React.FunctionComponent = props => {
    const [text, setText] = React.useState('');
    const [password, setPassword] = React.useState('');
    const history = useHistory();

    const onChangeText = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setText(event.target.value);
    };

    const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setPassword(event.target.value);
    };

    return (
        <div className={styles.LogInPage}>
            <Navbar activePage={'login'}/>
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
                            <Button
                                className={styles.ServiceButtonYandex}
                                onClick={event => console.log("Clicked to Button")}
                                color={'gray'}
                                title={'Ya'}
                                titleSize={'regular'}
                                titleWeight={'bold'}
                                rounded
                            />
                            <Button
                                className={styles.ServiceButtonGoogle}
                                onClick={event => console.log("Clicked to Button")}
                                color={'gray'}
                                title={'G+'}
                                titleSize={'regular'}
                                titleWeight={'bold'}
                                rounded
                            />
                            <Button
                                className={styles.ServiceButtonVk}
                                onClick={event => console.log("Clicked to Button")}
                                color={'gray'}
                                title={'vk'}
                                titleSize={'regular'}
                                titleWeight={'bold'}
                                rounded
                            />
                        </div>
                        <TextBlock
                            className={styles.InfoText}
                            fontSize={'regular1'}
                            fontWeight={'regular'}
                        >
                            or use your email account:
                        </TextBlock>
                        <InputBlock
                            text={text}
                            type={'email'}
                            maxLength={30}
                            onChange={onChangeText.bind(this)}
                        />
                        <InputBlock
                            className={styles.InputBlockPassword}
                            text={password}
                            type={'password'}
                            maxLength={26}
                            onChange={onChangePassword.bind(this)}
                        />
                        <TextBlock
                            className={styles.InfoTextPassword}
                            fontSize={'regular1'}
                            fontWeight={'regular'}
                        >
                            Forgot your password?
                        </TextBlock>
                        <Button
                            className={styles.ButtonSignIn}
                            onClick={event => console.log("Clicked to Button")}
                            color={'green'}
                            title={'Sign In'}
                            titleSize={'regular'}
                            titleWeight={'medium'}
                            rounded
                        />
                    </div>
                    <div className={styles.SignUpBlock}>
                        <TextBlock
                            className={styles.GreetingsText}
                            fontSize={'title2'}
                            fontWeight={'bold'}
                        >
                            Hello, friend!
                        </TextBlock>
                        <TextBlock
                            className={styles.GreetingsTextInfo}
                            fontSize={'regular1'}
                            fontWeight={'regular'}
                        >
                            Enter your personal details <br/>
                            and start jorney with us
                        </TextBlock>
                        <Button
                            className={styles.ButtonSignUp}
                            onClick={event => history.push('signup')}
                            color={'white'}
                            title={'Sign Up'}
                            titleSize={'regular'}
                            titleWeight={'medium'}
                            rounded
                        />
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