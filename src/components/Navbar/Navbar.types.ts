import * as React from 'react';

export type TActivePage =
    'home'
    | 'blog'
    | 'cources'
    | 'login';

export interface IProps extends React.HTMLAttributes<HTMLDivElement> {
    activePage: TActivePage
}