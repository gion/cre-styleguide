import React from 'react'
import { Typography } from 'antd'

import './index.less'

const AntText = Typography.Text

export function Text(props) {
	return (
		<AntText className="text" {...props} />
	)
}
