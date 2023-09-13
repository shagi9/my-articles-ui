import { FC, ReactNode } from 'react';
import cls from './AppLink.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  children: ReactNode;
}

export const AppLink: FC<AppLinkProps> = props => {
  const { 
    to, 
    className, 
    theme = AppLinkTheme.PRIMARY, 
    children, 
    ...otherProps 
  } = props;

  return (
    <Link 
      to={to} 
      className={classNames(cls.AppLink, [className, cls[theme]], {})}
      {...otherProps}
     >
      {children}
    </Link>  
  );
};