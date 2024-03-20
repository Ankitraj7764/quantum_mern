import React from 'react';

function RandomDataTable({ numRows }) {
  // Function to generate random data
  const generateRandomData = () => {
    const data = [];
    for (let i = 1; i <= numRows; i++) {
      data.push({
        id: i,
        firstName: `First${i}`,
        lastName: `Last${i}`,
        handle: `@handle${i}`
      });
    }
    return data;
  };

  // Generate random data
  const randomData = generateRandomData();

  // Render the table rows with random data
  const tableRows = randomData.map((row) => (
    <tr key={row.id}>
      <th scope="row">{row.id}</th>
      <td>{row.firstName}</td>
      <td>{row.lastName}</td>
      <td>{row.handle}</td>
    </tr>
  ));

  return (
   <div style={{ backgroundColor: 'transparent',width:'80vw'}}>
     <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        {tableRows}
      </tbody>
    </table>
   </div>
  );
}

export default RandomDataTable;
