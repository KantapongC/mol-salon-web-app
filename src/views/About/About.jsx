import React, { Component } from 'react';
import { Layout } from 'antd';

export default class About extends Component {
	render() {
		return (
			<Layout.Content style={{ padding: '25px' }}>
				<div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
					<h1 style={{ 'text-align': 'center' }}>This is a About page</h1>
				</div>
			</Layout.Content>
		);
	}
}
