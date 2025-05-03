import 'package:flutter/material.dart';

class DriveHomeScreen extends StatelessWidget {
  const DriveHomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Drive Home'),
        backgroundColor: Colors.black,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Icon(Icons.delivery_dining, size: 80),
            const SizedBox(height: 20),
            const Text(
              'Welcome, Driver!',
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 10),
            const Text(
              'Check for delivery assignments, view earnings,\nand manage your availability.',
              textAlign: TextAlign.center,
              style: TextStyle(fontSize: 16),
            ),
            const SizedBox(height: 30),
            ElevatedButton(
              onPressed: () {
                // Placeholder for functionality
              },
              child: const Text('Go Online'),
            ),
          ],
        ),
      ),
    );
  }
}
