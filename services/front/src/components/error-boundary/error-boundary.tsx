import { Component } from 'react';

export class ErrorBoundary extends Component<any, any> {
  state = {
    hasError: false,
  };

  constructor(props: any) {
    super(props);
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState(() => ({
      hasError: true,
    }));
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Error</h1>;
    }

    return this.props.children!;
  }
}
