Snipcart.execute("bind", "order.completed", function(order) {
    fbq('track', 'Purchase', {value: order.grandTotal, currency: 'USD'});
    var url = '/thankyou?order=' + order.token;
    window.location.href = url;
  });

Snipcart.subscribe('item.added', function (item) {
    fbq('track', 'AddToCart');
});