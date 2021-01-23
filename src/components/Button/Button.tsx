import * as React from 'react';
import classNames from 'classnames/bind';
import * as types from './Button.types';
import styles from './Button.module.scss';
import { TextBlock } from 'components';

const styleForColor = classNames.bind(
    {
        'green': styles.Green,
        'red': styles.Red
    } as Record<types.TColor, string>
);

export const Button: React.FunctionComponent<types.IButtonProps> = props => {
    const {
        className,
        onClick,
        color,
        title,
        rounded,
        ...divProps
    } = props;

    return (
        <div 
            className={classNames(
                className,
                styleForColor(color),
                styles.Button
            )}
            onClick={event => {
                onClick?.(event)
            }}
            {...divProps}
        >
            <TextBlock
                className={styles.Title}
                fontSize={'regular'}
                fontWeight={'regular'}
            >
                {title}
            </TextBlock>
        </div>
    )
}

Button.defaultProps = {
    color: 'green',
};