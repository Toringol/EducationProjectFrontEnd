import * as React from 'react';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: number
    darkens?: boolean
}

export type TIconComponent = React.FunctionComponent<IProps>;