import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import Page from 'components/Page'
import { Button } from 'antd'


class Test1 extends React.PureComponent {
	render(){
		const {loading , test1 } = this.props
		return (
			<Page loading={ loading.models.test1 }>

			</Page>
		)
	}
}

export default connect(
({ test1, loading }) => ({ test1, loading }))(
Test1)
