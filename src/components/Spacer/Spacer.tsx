import React from 'react';

type Props = {
  margin?: string;
  marginRight?: string;
  config?: object;
};

export class Spacer extends React.Component<Props> {
  static defaultProps = {
    config: {
      xxs: 4,
      xs: 8,
      sm: 12,
      default: 16,
      lg: 20,
      xlg: 32,
      none: 0,
    },
    margin: 'default',
    marginRight: 'none',
  };

  render() {
    const { margin, marginRight, config, children, ...rest } = this.props;

    const stylesObject = {
      marginBottom: config![margin!],
      marginRight: config![marginRight!],
    };

    return (
      <div style={stylesObject} {...rest}>
        {children}
      </div>
    );
  }
}
