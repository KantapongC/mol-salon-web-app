import React from 'react';
import { Table } from 'antd';

const MenuTable = ({ tableHeader, title, tableData, onRowClick }) => {
	const today = new Date().toDateString();

	return (
		<Table
			columns={tableHeader}
			dataSource={tableData}
			title={() => <h2>{title + ' ' + today}</h2>}
			bordered
			// pagination={{ position: 'bottom' }}
			pagination={false}
			onRowClick={onRowClick}
			loading={tableData === null ? true : false}
			hasData={tableData && tableData.length === 0 ? true : false}
		/>
	);
};

export default MenuTable;
