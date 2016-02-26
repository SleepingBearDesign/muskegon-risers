Snipcart.execute('config', 'show_continue_shopping', true);
Snipcart.execute("bind", "order.completed", function(order) {
    // We have to compute taxes total.
    var taxes = 0;
    for (var i = 0; i < order.taxes.length; i++) {
      taxes += order.taxes[i].amount;
    }
    
    // Now we push the transaction to Google Analytics
    _gaq.push(['_addTrans',
      order.token, // This is the unique ID of the transaction
      'Muskegon Riser Soccer Club Store' // Replace by your store name
      order.grandTotal,
      taxes, // We use the value we computed before
      order.shippingFees,
      order.billingAddress.city,
      order.billingAddress.province,
      order.billingAddress.country]);
    
    // We push every items
    for (var y = 0; y < order.items.length; y++) {
      _gaq.push(['_addItem',
        order.token, // It must matches the value that you used in _addTrans
        order.items[y].id,
        order.items[y].name,
        order.items[y].getCustomFieldValue('Size'),
        order.items[y].getCustomFieldValue('Color'),
        order.items[y].price,
        order.items[y].quantity]);
    }
    
    _gaq.push(['_trackTrans']);

    fbq('track', 'Purchase', {value: order.grandTotal, currency: 'USD'});
  });

Snipcart.subscribe('item.added', function (item) {
    onfbq('track', 'AddToCart');
});