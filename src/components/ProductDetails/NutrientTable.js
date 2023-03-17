import "./NutrientTable.css";

function NutrientTable(nutrients) {
  return (
    <table className="table-nutrition">
      <thead>
        <tr>
          <th width={"75%"}>Nutrient</th>
          <th width={"25%"}>Value</th>
        </tr>
      </thead>
      <tbody>
        {nutrients.nutrients.map((nutrient) => (
          <tr>
            <td>{nutrient.nutrient}</td>
            <td>{nutrient.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default NutrientTable;
