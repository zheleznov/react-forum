import React, {Component} from 'react';
import DataService from '../../services/data-service';

function withData(WrappedComponent, targetData) {
  return class extends Component {
    service = new DataService();

    state = {
      data: [],
    };

    componentDidMount() {
      this.setState({
        data: this.service.getData(targetData),
      });
    }

    render() {
      return <WrappedComponent data={this.state.data} {...this.props}/>;
    }

  };
}

export default withData;
