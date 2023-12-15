import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useShoppingCart } from "../context/ShopCartContext";

interface BurgerCardProps {
  id: number;
  image: string;
  title: string;
  descripcion: string;
  precio: number;
}

export function Food({
  id,
  image,
  title,
  descripcion,
  precio,
}: BurgerCardProps) {
  const { getItemQuantity, increaseQuantity, decreaseQuantity, removeCart } =
    useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <Card
      border="black"
      style={{ width: "23rem", height: "17rem", backgroundColor: "#ce742a55" }}
      className="h-100"
    >
      <Card.Img
        variant="top"
        src={image}
        style={{
          objectFit: "cover",
          width: "21.7rem",
          height: "18rem",
          
        }}
        className="mt-3 mb-3"
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2" style={{ fontFamily: "Libre Baskerville" }}>
            {title}
          </span>
          <span
            className="fs-2 text-muted"
            style={{ marginLeft: "1.3rem", color: "white" }}
          >
            U$D {precio}
          </span>
        </Card.Title>
        <Card.Text>Ingredientes</Card.Text>
        <Card.Text>{descripcion}</Card.Text>

        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseQuantity(id)}>
              + Agregar a carrito
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => decreaseQuantity(id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> en carrito
                </div>
                <Button onClick={() => increaseQuantity(id)}>+</Button>
              </div>
              <Button
                onClick={() => removeCart(id)}
                variant="danger"
                size="sm"
                style={{ fontFamily: "Libre Baskerville" }}
              >
                Eliminar
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
