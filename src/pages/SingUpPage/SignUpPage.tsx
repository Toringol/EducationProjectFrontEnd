import * as React from 'react';
import styles from './SignUpPage.module.scss';
import {
    Navbar,
    Card,
    TextBlock,
    InputBlock,
    Button
} from 'components';
import { ApiProfile, SignUpData } from 'api';
import { useHistory } from 'react-router-dom';

export const SignUpPage: React.FunctionComponent = props => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const history = useHistory();

    const onChangeName = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setName(event.target.value);
    };

    const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setEmail(event.target.value);
    };

    const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setPassword(event.target.value);
    };

    const onSubmitButtonClick = (event: React.MouseEvent<HTMLDivElement>): void => {
        if (!name || !email || !password) return;
        
        let signUpData: SignUpData = {
            name: name,
            email: email,
            password: password
        };

        ApiProfile.postSignUp(signUpData);
    };

    return (
        <div className={styles.SignUpPage}>
            <Navbar activePage={'login'}/>
            <div className={styles.Content}>
                <Card className={styles.Card}>
                <div className={styles.SignInBlock}>
                        <TextBlock
                            className={styles.GreetingsText}
                            fontSize={'title2'}
                            fontWeight={'bold'}
                        >
                            Welcome Back!
                        </TextBlock>
                        <TextBlock
                            className={styles.GreetingsTextInfo}
                            fontSize={'regular1'}
                            fontWeight={'regular'}
                        >
                            To keep connected with us please <br/>
                            login with your personal info
                        </TextBlock>
                        <Button
                            className={styles.ButtonSignIn}
                            onClick={event => history.push('login')}
                            color={'white'}
                            title={'Sign In'}
                            titleSize={'regular'}
                            titleWeight={'medium'}
                            rounded
                        />
                    </div>
                    <div className={styles.SignUpBlock}>
                        <TextBlock
                            className={styles.SignUpText}
                            fontSize={'title2'}
                            fontWeight={'bold'}
                        >
                            Create Account
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
                            or use your email for registration:
                        </TextBlock>
                        <InputBlock
                            text={name}
                            type={'user'}
                            maxLength={30}
                            onChange={onChangeName.bind(this)}
                        />
                        <InputBlock
                            className={styles.InputBlockEmail}
                            text={email}
                            type={'email'}
                            maxLength={30}
                            onChange={onChangeEmail.bind(this)}
                        />
                        <InputBlock
                            className={styles.InputBlockPassword}
                            text={password}
                            type={'password'}
                            maxLength={26}
                            onChange={onChangePassword.bind(this)}
                        />
                        <Button
                            className={styles.ButtonSignUp}
                            onClick={onSubmitButtonClick}
                            color={'green'}
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