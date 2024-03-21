import React, { useContext,  useState } from 'react';
import DataContext from '../context/DataContext';

const NutrionalChart = () => {
  const { protein, carbohydrates, fat, fiber, mineral, Vitamin } = useContext(DataContext);

  const handleTableRows = (nutrient) => {
    if (!nutrient) {
      return null;
    }

    return nutrient.map((item) => (
      <tr key={item._id}>
        <td>{item.FoodItem}</td>
        <td>{item.Quantity}</td>
        <td>{item.Content}</td>
      </tr>
    ));
  };

  const [showProteins, setShowProteins] = useState(false);
  const [showCarbs, setShowCarbs] = useState(false);
  const [showFat, setShowFat] = useState(false);
  const [showFiber, setShowFiber] = useState(false);
  const [showVitamins, setShowVitamins] = useState(false);
  const [showMinerals, setShowMinerals] = useState(false);

  return (
    <main className='nutrition'>
      <p>{"Nutritional Facts"}</p>
      <h2>{"Fuel your body with the right nutrients."}</h2>
      <h2>{"Unlock the secrets of a balanced diet."}</h2>
      <h2>{"Discover the power of healthy eating."}</h2>

      <h1 onClick={() => setShowProteins(!showProteins)}><span>Proteins</span></h1>
      {showProteins && protein && (
        <table className='table'>
          <thead>
            <tr>
              <th>Food Item</th>
              <th>Quantity</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody>{handleTableRows(protein)}</tbody>
        </table>
      )}

      <h1 onClick={() => setShowCarbs(!showCarbs)}><span>Carbohydrates</span></h1>
      {showCarbs && carbohydrates && (
        <table className='table'>
          <thead>
            <tr>
              <th>Food Item</th>
              <th>Quantity</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody>{handleTableRows(carbohydrates)}</tbody>
        </table>
      )}

      <h1 onClick={() => setShowFat(!showFat)}><span>Fat</span></h1>
      {showFat && fat && (
        <table className='table'>
          <thead>
            <tr>
              <th>Food Item</th>
              <th>Quantity</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody>{handleTableRows(fat)}</tbody>
        </table>
      )}

      <h1 onClick={() => setShowFiber(!showFiber)}><span>Fiber</span></h1>
      {showFiber && fiber && (
        <table className='table'>
          <thead>
            <tr>
              <th>Food Item</th>
              <th>Quantity</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody>{handleTableRows(fiber)}</tbody>
        </table>
      )}

      <h1 onClick={() => setShowVitamins(!showVitamins)}><span>Vitamins</span></h1>
      {showVitamins && Vitamin && (
        <table className='table'>
          <thead>
            <tr>
              <th>Food Item</th>
              <th>Quantity</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody>{handleTableRows(Vitamin)}</tbody>
        </table>
      )}

      <h1 onClick={() => setShowMinerals(!showMinerals)}><span>Minerals</span></h1>
      {showMinerals && mineral && (
        <table className='table'>
          <thead>
            <tr>
              <th>Food Item</th>
              <th>Quantity</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody>{handleTableRows(mineral)}</tbody>
        </table>
      )}
    </main>
  );
};

export default NutrionalChart;
