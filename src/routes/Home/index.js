import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import Page from 'components/Page'


class Home extends React.PureComponent {
	render(){
		const {loading , home } = this.props
		return (
			<Page loading={ loading.models.home }>
        <button>
          test
        </button>
			</Page>
		)
	}
}

export default connect(
({ home, loading }) => ({ home, loading }))(
Home)
