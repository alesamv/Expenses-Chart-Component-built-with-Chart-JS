import data from "./data.json" assert { type: "json" };

getData();
  
function getData() {
    let length = data.length;
    let labels = [];
    let values = [];
    for (let i = 0; i < length; i++) {
        labels.push(data[i].day);
        values.push(data[i].amount);
    }
    console.log(labels)
    console.log(values)


    new Chart(document.getElementById("bar-chart"), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: "$",
                    backgroundColor: ["hsl(10, 79%, 65%)",
                                      "hsl(10, 79%, 65%)", 
                                      "hsl(186, 34%, 60%)", 
                                      "hsl(10, 79%, 65%)", 
                                      "hsl(10, 79%, 65%)",
                                      "hsl(10, 79%, 65%)", 
                                      "hsl(10, 79%, 65%)"],
                    data: values,
                    borderRadius: ["3","3","3","3","3","3","3"],
                    borderSkipped: false,
                    hoverBackgroundColor: ["hsl(10, 79%, 65%, 0.8)",
                                            "hsl(10, 79%, 65%, 0.8)", 
                                            "hsl(186, 34%, 60%, 0.8)", 
                                            "hsl(10, 79%, 65%, 0.8)", 
                                            "hsl(10, 79%, 65%, 0.8)",
                                            "hsl(10, 79%, 65%, 0.8)", 
                                            "hsl(10, 79%, 65%, 0.8)"]
                }
            ]
        },
        options: {
            legend: { 
                display: false 
            },
            scales: {
                x: {
                    
                    grid: {
                        display: false
                    }
                },
                y: {
                    display: false,
                    grid: {
                        display: false
                  }
                }
            }, 
            datasets: [{
                label: {
                    display: false
                }
            }],
            plugins: {
                legend: {
                    display: false
                }
            },
            aspectRatio: "1.5"
        }
    });

}