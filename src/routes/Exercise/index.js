import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import Page from 'components/Page'
import style from './index.less'

class Exercise extends React.PureComponent {
  render() {
    const { loading, exercise } = this.props
    return (
        <Page loading={loading.models.exercise}
              className={style.container}
        >
          <div className={style.tips_layer}>
            不会做? <a className={style.tips_text}>查看提示</a>
          </div>
        
        </Page>
    )
  }
}

export default connect(
    ({ exercise, loading }) => ({ exercise, loading }))(
    Exercise)
