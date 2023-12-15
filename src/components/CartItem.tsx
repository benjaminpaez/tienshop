import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShopCartContext";
import storeItems from "../data/db.json";

type CartItemP = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemP) {
  const { removeCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.image}
        style={{ width: "10rem", height: "7.5rem", objectFit: "cover", borderRadius: '6px' }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          U$D {item.price}
        </div>
      </div>
      <div style={{ fontWeight: "bold" }}> U$D {item.price * quantity}</div>
      <Button variant="outline-danger" size="sm" onClick={() => removeCart(item.id)} >&times;</Button>
    </Stack>
  );
}
