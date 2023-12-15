import { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { Food } from './Food';
import db from '../data/db.json';
import { Loading } from './Loading';

interface Food {
  id: number;
  cat: number;
  name: string;
  image: string;
  ingredients: string[];
  price: number;
}

export const Store = () => {
  const [loading, setLoading] = useState(true);
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setFoods(db);
      setLoading(false);
    }, 1000); 
  }, []);

  return (
    <div>
      <h1
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '2rem',
        }}
      >
        Hamburguesas
      </h1>
      <Row md={3} xs={2} lg={4} style={{ gap: '2rem' }}>
        {loading
          ? 
            Array.from({ length: 10 }).map((_, index) => (
              <Loading key={index}/>
            ))
          : 
          
            foods.slice(0,9).map((item) => (
                <Food
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  title={item.name}
                  descripcion={item.ingredients.join(", ")}
                  precio={item.price}
                />
              ))}
      </Row>

      <h1
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '2rem',
        }}
      >
        Pizzas
      </h1>
      <Row md={3} xs={2} lg={4} style={{ gap: '2rem' }}>
        {loading
          ? 
            Array.from({ length: 10 }).map((_, index) => (
              <Loading key={index}/>
            ))
          : 
          
            foods.slice(12,20).map((item) => (
                <Food
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  title={item.name}
                  descripcion={item.ingredients.join(", ")}
                  precio={item.price}
                />
              ))}
      </Row>
    </div>
  );

  
};




