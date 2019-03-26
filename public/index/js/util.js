export function export2Excel(columns,list,filterVal){
	require.ensure([], () => {
		const { export_json_to_excel } = require('./excel/Export2Excel');
		let tHeader = columns;
		const data = list.map(v => filterVal.map(j => v[j]));
		export_json_to_excel(tHeader, data, '数据列表');
	})
}