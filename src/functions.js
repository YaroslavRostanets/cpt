
export const tableToExcel = (function() {
		var uri = 'data:application/vnd.ms-excel;base64,'
		, template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>'
		, base64 = function(s) { return window.btoa(unescape(encodeURIComponent(s))) }
		, format = function(s, c) { 	    	 
			return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) 
		}
		, downloadURI = function(uri, name) {
		    var link = document.createElement("a");
		    link.download = name;
		    link.href = uri;
		    link.click();
		}

		return function(table, name, fileName) {
			if ( !document.getElementById("print-container") ) {
				let content = document.getElementById("content-tool");
				let printContainer = document.createElement("div");
				printContainer.setAttribute("id", "print-container");
				content.appendChild( printContainer );
			}

			let printedTable = document.querySelector("#planning-table table").outerHTML;
			document.getElementById("print-container").innerHTML = printedTable;

			let inputs = document.querySelectorAll("#print-container input");
				inputs.forEach((item, index)=>{
					item.parentNode.innerText = item.value;
					item.remove();
				});

			

			if (!table.nodeType) table = document.querySelector(table)
				table.setAttribute('align', 'right');
				table.style.textAlign = 'right';
				var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML.replace(/\./g,',')}
			var resuri = uri + base64(format(template, ctx))
			downloadURI(resuri, fileName);
		}
	})();  

export function printTable () {
	if ( !document.getElementById("print-container") ) {
		let content = document.getElementById("content-tool");
		let printContainer = document.createElement("div");
		printContainer.setAttribute("id", "print-container");
		content.appendChild( printContainer );
	}
	let printedTable = document.querySelector("#planning-table table").outerHTML;
	let legend = document.querySelector('.js-table-legend').outerHTML;
	document.getElementById("print-container").innerHTML = printedTable + legend;
	let inputs = document.querySelectorAll("#print-container input");
	inputs.forEach((item, index)=>{
		let value = document.createElement("span");
		value.innerText = item.value;
		item.parentNode.insertBefore(value, item);
		item.remove();
	});

		window.print();
}