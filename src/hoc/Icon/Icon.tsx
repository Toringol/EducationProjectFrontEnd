import * as React from 'react';
import * as types from './Icon.types';
import classNames from 'classnames';
import styles from './Icon.module.scss';

export function makeIcon(
    SVGIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
): React.FunctionComponent<types.IProps> {
    const Icon: types.TIconComponent = props => {
        const {className, size, darkens, ...divProps} = props;
        return (
            <div
                className={classNames(styles.Container, className)}
                {...divProps}
            >
                <SVGIcon
                    className={classNames({[styles.Darken]: darkens})}
                    width={size}
                    height={size}
                />
            </div>
        );
    };

    Icon.defaultProps = {
        size: 16
    };

    return Icon;
}