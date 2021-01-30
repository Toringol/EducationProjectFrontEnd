import * as React from 'react';
import classNames from 'classnames/bind';
import * as types from './InputBlock.types';
import styles from './InputBlock.module.scss';
import {
    UserIcon,
    EmailIcon,
    PasswordIcon
} from 'icons';

export const InputBlock: React.FunctionComponent<types.IProps> = props => {
    const {
        className,
        type,
        text,
        maxLength,
        onChange,
        ...divProps
    } = props;
    
    return (
        <div 
            className={classNames(
                className,
                styles.InputBlock
            )}
            {...divProps}
        >
            {
                type === 'email'
                ?
                <EmailIcon className={styles.Icon} size={16}/>
                :
                type === 'user'
                ?
                <UserIcon className={styles.Icon} size={16}/>
                :
                <PasswordIcon className={styles.Icon} size={16}/>
            }
            <input
                className={styles.Input}
                type={type === 'password' ? 'password' : 'text'}
                value={text}
                placeholder={
                    type === 'email' 
                    ? 
                    'Email' 
                    : 
                    type === 'user'
                    ? 
                    'User' : 'Password'
                }
                onChange={onChange}
                maxLength={maxLength}
            />
        </div>
    )
}