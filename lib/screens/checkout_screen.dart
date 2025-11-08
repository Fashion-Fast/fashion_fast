import 'package:flutter/material.dart';

/// A placeholder checkout screen.
///
/// In a full implementation this screen would collect delivery address,
/// payment method and summarize order totals before placing the order.
class CheckoutScreen extends StatelessWidget {
  const CheckoutScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Checkout'),
        backgroundColor: Colors.black,
      ),
      body: const Center(
        child: Text(
          'Checkout screen',
          style: TextStyle(fontSize: 18),
        ),
      ),
    );
  }
}
