import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from 'antd'

import { TEXT_TYPES } from './constants'

import classNames from 'classnames/bind'
import styles from './index.less'
const cx = classNames.bind(styles)

const type = PropTypes.oneOf(Object.values(TEXT_TYPES))

Text.propTypes = {
	type,
	className: PropTypes.string,
	bold: PropTypes.bool,
}

Text.defaultProps = {
	type: TEXT_TYPES.SECONDARY,
	bold: false,
}

export function Text({ type, bold, className, ...rest }) {
	const cn = cx('text', `text-${type}`, { 'text-bold': bold }, className)
	return <Typography.Text className={cn} {...rest} />
}
