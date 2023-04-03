import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../actions/cartActions";

export default function CartPage() {
  const params = useParams();
  const productId = params.id;
  const qty = Number(
    window.location.search ? window.location.search.split("=")[1] : 1
  );
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  return <>Cart</>;
}
