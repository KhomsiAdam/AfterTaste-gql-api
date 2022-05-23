export enum OrderStatus {
  PENDING = 'pending',
  PAID = 'paid',
  CANCELLED = 'cancelled',
}

export enum SuccessMessages {
  ORDER_CREATED = 'Order created successfully.',
  ORDER_UPDATED = 'Order updated successfully.',
  ORDER_DELETED = 'Order deleted successfully.',
}

export enum ErrorMessages {
  ORDERS_NOT_FOUND = 'No orders found.',
  ORDER_NOT_FOUND = 'Order was not found.',
}
