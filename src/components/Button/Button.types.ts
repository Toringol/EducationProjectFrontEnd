import * as React from 'react';

export type TColor = 
    'green'
    | 'red';

export interface IButtonProps extends React.HTMLAttributes<HTMLDivElement> {
    color?: TColor
    title: string
    rounded?: boolean
}