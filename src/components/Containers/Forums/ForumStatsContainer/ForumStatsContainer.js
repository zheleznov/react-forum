import {connect} from 'react-redux';
import ForumsStats from '../../../Forums/ForumStats';

const mapStateToProps = ({data}) => {
  const stats = data['stats'];

  return {
    stats,
  };
};

const ForumsStatsContainer = connect(mapStateToProps)(ForumsStats);
export default ForumsStatsContainer;
