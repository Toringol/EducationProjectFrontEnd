import * as React from 'react';

export type TColor = 
    'green'
    | 'gray'
    | 'white'
    | 'red';

 export type TFontSize =
    'title1'
    | 'title2'
    | 'title5'
    | 'regular1'
    | 'regular'
    | 'subtext';

export type TFontWeight = 'regular' | 'medium' | 'bold';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
    color?: TColor
    title: string
    titleSize: TFontSize
    titleWeight: TFontWeight
    rounded?: boolean
}