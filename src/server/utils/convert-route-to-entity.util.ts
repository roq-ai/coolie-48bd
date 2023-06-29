const mapping: Record<string, string> = {
  'luggage-delivery-orders': 'luggage_delivery_order',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
