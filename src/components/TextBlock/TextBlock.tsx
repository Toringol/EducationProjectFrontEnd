import * as React from 'react';
import * as types from './TextBlock.types';
import classNames from 'classnames/bind';
import styles from './TextBlock.module.scss';

const styleForFontSize = classNames.bind(
    {
        'title1': styles.SizeTitle1,
        'title2': styles.SizeTitle2,
        'title5': styles.SizeTitle5,
        'regular': styles.SizeRegular,
        'subtext': styles.SubText,
    } as Record<types.TFontSize, string>
);

const styleForFontWeight = classNames.bind(
    {
        'regular': styles.WeightRegular,
        'medium': styles.WeightMedium,
        'bold': styles.WeightBold
    } as Record<types.TFontWeight, string>
);

export const TextBlock: React.FunctionComponent<types.IProps> = props => {
    const {className, fontSize, fontWeight, maxLines, inline, children, ...divProps} = props;

    let isSingleLineClamp = false, isMultiLineClamp = false;
    if (maxLines) {
        isSingleLineClamp = maxLines === 1;
        isMultiLineClamp = maxLines > 1;
    }

    return (
        <div
            className={classNames(
                className,
                styles.Text,
                styleForFontSize(fontSize),
                styleForFontWeight(fontWeight),
                {
                    [styles.Inline]: inline,
                    [styles.SingleLineClamp]: isSingleLineClamp,
                    [styles.MultiLineClamp]: isMultiLineClamp
                }
            )}
            style={{['--max-lines' as string]: isMultiLineClamp && maxLines}}
            {...divProps}
        >
            {children}
        </div>
    );
};

TextBlock.defaultProps = {
    fontSize: 'regular',
    fontWeight: 'regular',
};