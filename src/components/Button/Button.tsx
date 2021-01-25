import * as React from 'react';
import classNames from 'classnames/bind';
import * as types from './Button.types';
import styles from './Button.module.scss';
import { TextBlock } from 'components';

const styleForColor = classNames.bind(
    {
        'green': styles.Green,
        'white': styles.White,
        'gray': styles.Gray,
        'red': styles.Red
    } as Record<types.TColor, string>
);

export const Button: React.FunctionComponent<types.IProps> = props => {
    const {
        className,
        onClick,
        color,
        title,
        titleSize,
        titleWeight,
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
                fontSize={titleSize}
                fontWeight={titleWeight}
            >
                {title}
            </TextBlock>
        </div>
    )
}

Button.defaultProps = {
    color: 'green',
};