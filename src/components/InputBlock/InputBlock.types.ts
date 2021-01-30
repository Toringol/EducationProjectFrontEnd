import * as React from 'react';

export type TInputType =
    'user'
    | 'email'
    | 'password';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
    text: string
    maxLength: number
    type: TInputType
}
