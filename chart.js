window.onload = function() {
	var dataPoints = [];
	var aggData = {};

	function getDataPointsFromCSV(csv) {
		var dataPoints = csvLines = columns = [];
		csvLines = csv.split(/[\r?\n|\r|\n]+/);         

		for (var i = 0; i < csvLines.length; i++) {
			if (csvLines[i].length > 0) {
				var columns = csvLines[i].split(",");
				var date = new Date(columns[2]);
				var shortDate = new Date(date.getFullYear(), date.getMonth());
				if (aggData[shortDate] === undefined) {
					aggData[shortDate] = 0;
				}
				aggData[shortDate]++;
			}
		}

		var sortedDates = Object.keys(aggData).sort(function(a, b) {
			return new Date(a) - new Date(b);
		});
		for (var i of sortedDates) {
			dataPoints.push({
				label: moment(i).format("MMM YYYY"),
				y: aggData[i]
			})
		}
		return dataPoints;
	}

	$.get("/sample1.csv", function(data) {
			var chart = new CanvasJS.Chart("chartContainer", {
			title: {
			text: "Chart from CSV",
			},
			
			data: [{
                                    type: "column",
				    indexLabel:"{y}",
                                    dataPoints: getDataPointsFromCSV(data)
                                }]
                       });

		chart.render();

	});
}
