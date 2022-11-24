import { useState } from 'react';
import data from '../../mook/data.js';

export default function Cart() {
  const [perfum] = useState(data);
  return (
    <div className="container" style={{ border: '1px solid red' }}>
      <div className="row">
        {perfum.map((v, i) => {
          return (
            <div className="col-md-4">
              <img src={perfum[i].url} width="80%" />
              <h4>{perfum[i].title}</h4>
              <p>{perfum[i].price}</p>
            </div>
          );
        })}

        {/* <div className="col-md-4">
          <img src={perfum[0].url} width="80%" />
          <h4>{perfum[0].title}</h4>
          <p>{perfum[0].price}</p>
        </div> */}
      </div>
    </div>
  );
}
