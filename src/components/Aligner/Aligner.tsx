import React, { FC, ReactNode } from 'react';
import cn from 'classnames';

import './styles.pcss';

const Left: FC = ({ children }) => <div className="aligner__left">{children}</div>;

type RightProps = {
  children: ReactNode;
  paddingLeft?: number;
};

const Right = ({ children, paddingLeft }: RightProps) => {
  const paddingRightStyle = paddingLeft ? { paddingLeft: paddingLeft } : undefined;
  return (
    <div style={paddingRightStyle} className="aligner__right">
      {children}
    </div>
  );
};
const Center: FC = ({ children }) => <div className="aligner__center">{children}</div>;

export interface Props {
  valign: 'center' | 'top' | 'baseline' | 'bottom';
  wrap?: boolean;
}

export class Aligner extends React.Component<Props> {
  static Left = Left;
  static Right = Right;
  static Center = Center;
  static defaultProps = { valign: 'center' };

  render() {
    const { children, valign, wrap, ...rest } = this.props;

    return (
      <div
        className={cn('aligner', {
          aligner_wrap: wrap,
          aligner_center: valign === 'center',
          aligner_top: valign === 'top',
          aligner_baseline: valign === 'baseline',
          aligner_bottom: valign === 'bottom',
        })}
        {...rest}
      >
        {children}
      </div>
    );
  }
}
