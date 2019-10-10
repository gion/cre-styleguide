import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from 'antd'

import { TITLE_TYPES, TITLE_LEVEL_MAPPING } from './constants'

import classNames from 'classnames/bind'
import styles from './index.less'
const cx = classNames.bind(styles)

Title.propTypes = {
	type: PropTypes.oneOf(Object.values(TITLE_TYPES)),
	className: PropTypes.string,
	bold: PropTypes.bool,
}

Title.defaultProps = {
	type: TITLE_TYPES.MAIN,
	bold: false,
}

export function Title({ type, bold, className, ...rest }) {
	const cn = cx('title', `title-${type}`, { 'title-bold': bold }, className)
	return <Typography.Title className={cn} level={getLevel(type)} {...rest} />
}

function getLevel(type = 'main') {
	return TITLE_LEVEL_MAPPING[type] || TITLE_LEVEL_MAPPING.main
}
