export const data = [
    {
      name: "Seoul",
      population: 21500000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Beijing",
      population: 527612,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "New York",
      population: 8538000,
      color: "#ffffff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Moscow",
      population: 11920000,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
  ];

  export const pieChartData={
    labels: ["",""],
    datasets: [
      {
        data: [
          Math.random() * 0,
          Math.random() * 0,
          Math.random() * 0,
          Math.random() * 0,
          Math.random() * 0,
          Math.random() * 100
        ]
      }
    ]
  }
  
  export const DropdownData = [
    {label: 'Home', value: 'Home'},
    {label: 'Trip', value: 'Trip'},
    {label: 'Office', value: 'Office'},
    {label: 'Sports', value: 'Sports'},
    {label: 'Others', value: 'Others'},
    
  ];
  export const ExpenseCategory = [
    {label: 'Food & Drink', value: 'Food & Drink'},
    {label: 'Home', value: 'Home'},
    {label: 'Shopping', value: 'Shopping'},
    {label: 'Entertainment', value: 'Entertainment'},
    {label: 'Transportation', value: 'Transportation'},
    {label: 'Others', value: 'Others'},
    
  ];
  export const PaymentMethods = [
    {label: 'Cash', value: 'Cash'},
    {label: 'UPI', value: 'UPI'},
    {label: 'Card', value: 'Card'},
    
  ];