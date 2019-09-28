// read the csv using d3
d3.csv('c:/Users/aj_si/Downloads/bootcamp/hw/D3-HW/D3-HW/d3_ajs/StarterCode/assets/data/data.csv')
    .then(function (jData) {
        console.log('jData:', jData);

        // create empty lists that we will append their respective values to
        var incomes_list = [];
        var obesity_list = [];
        var healthcare_list = [];
        var state_postal_list = [];

        // grab our x and y values (lists) -> x (income), y (obesity)
        for (var i = 0; i < jData.length; i++) {
            var dictionary = jData[i]; // this is the dictionary

            // capture the single values
            var income = dictionary['income'];
            var obesity = dictionary['obesity'];
            var healthcare = dictionary['healthcare'];
        
            var postal = dictionary['abbr'];

            // insert into our empty lists
            incomes_list.push(income);
            obesity_list.push(obesity);
            healthcare_list.push(healthcare);
            state_postal_list.push(postal);
        }

        var trace1 = {
            x: incomes_list,
            y: obesity_list,
            mode: 'markers',
            text: state_postal_list,
            type: 'scatter'
        };

        var trace2 = {
            x: incomes_list,
            y: healthcare_list,
            mode: 'markers',
            text: state_postal_list,
            type: 'scatter'
        };



        // Collection of "data" layers
        var data = [trace1];
        var data = [trace2];

        // Custom layout
        var layout1 = {
            xaxis: {
                title: 'Income (Annual)'
            },
            yaxis: {
                title: 'Obesity (BMI)'
            },
            legend: {
                y: 0.5,
                yref: 'paper',
                font: {
                    family: 'Arial, sans-serif',
                    size: 20,
                    color: 'grey',
                }
            },
            title: 'Obesity vs Income'
        };
  
        var layout2 = {
            xaxis: {
                title: 'Income (Annual)'
            },
            yaxis: {
                title: 'Healthcare'
            },
            legend: {
                y: 0.5,
                yref: 'paper',
                font: {
                    family: 'Arial, sans-serif',
                    size: 20,
                    color: 'grey',
                }
            },
            title: 'Healthcare vs Income'
        };
        // Build the plot
        //Plotly.newPlot('scatter', data, layout1);
        Plotly.newPlot('scatter', data, layout2);
    })