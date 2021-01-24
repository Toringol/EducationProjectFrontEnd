import * as React from 'react';

export type TFontSize =
    'title1'
    | 'title2'
    | 'title5'
    | 'regular'
    | 'subtext';

export type TFontWeight = 'regular' | 'medium' | 'bold';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
    fontSize?: TFontSize
    fontWeight?: TFontWeight
    inline?: boolean
    maxLines?: number
}