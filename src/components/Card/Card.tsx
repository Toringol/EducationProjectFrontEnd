import * as React from 'react';
import classNames from 'classnames/bind';
import * as types from './Card.types';
import styles from './Card.module.scss';

export const Card: React.FunctionComponent<types.IProps> = props => {
    const {
        className, 
        children, 
        ...divProps
    } = props;

    return (
        <div 
            className={classNames(
                className, 
                styles.Card
            )}
            {...divProps}
        >
            {children}
        </div>    
    )
}