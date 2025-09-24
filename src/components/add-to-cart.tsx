import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/cart";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { toast } from "sonner";

interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  productSlug: string;
  branchSlug: string;
}

const AddToCart = ({ product }: { product: Product }) => {
  const { items, addItem, removeItem, updateItemQuantity } = useCartStore();
  const cartItem = items.find((item) => item.id === product.productSlug);

  const isOutOfStock = product.quantity <= 0;

  const handleAddToCart = () => {
    if (isOutOfStock) {
      toast.error("This item is out of stock");
      return;
    }

    addItem({
      id: product.productSlug,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
      productSlug: product.productSlug,
      branchSlug: product.branchSlug,
    });
    toast.success("Item added to cart");
  };

  const handleIncrement = () => {
    if (cartItem && cartItem.quantity >= product.quantity) {
      toast.error(`Sorry, only ${product.quantity} item(s) available`);
      return;
    }

    if (cartItem) {
      updateItemQuantity(product.productSlug, cartItem.quantity + 1);
      toast.success("Item quantity updated");
    }
  };

  const handleDecrement = () => {
    if (cartItem) {
      if (cartItem.quantity === 1) {
        removeItem(product.productSlug);
        toast.success("Item removed from cart");
      } else {
        updateItemQuantity(product.productSlug, cartItem.quantity - 1);
        toast.success("Item quantity updated");
      }
    }
  };

  return (
    <>
      {!cartItem ? (
        <Button
          size="sm"
          className="w-full gap-1 text-xs"
          onClick={handleAddToCart}
          disabled={isOutOfStock}
        >
          <ShoppingCart className="h-3 w-3" />
          {isOutOfStock ? "Out of Stock" : "Add to Cart"}
        </Button>
      ) : (
        <div className="flex items-center justify-between w-full">
          <Button
            size="sm"
            variant="secondary"
            className="h-8 w-8 p-0 text-black"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleDecrement();
            }}
          >
            <Minus className="h-3 w-3" />
          </Button>
          <span className="text-sm font-medium">{cartItem.quantity}</span>
          <Button
            size="sm"
            variant="secondary"
            className="h-8 w-8 p-0 text-black"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleIncrement();
            }}
            disabled={cartItem.quantity >= product.quantity}
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
      )}
    </>
  );
};

export default AddToCart;
