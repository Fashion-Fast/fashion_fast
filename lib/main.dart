import 'package:flutter/material.dart';
import 'screens/splash_screen.dart';
import 'screens/shop_screen.dart';
import 'screens/drive_home_screen.dart'; // ✅ Keep this only

void main() {
  runApp(const FashionFastApp());
}

class FashionFastApp extends StatelessWidget {
  const FashionFastApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Fashion Fast',
      theme: ThemeData(
        fontFamily: 'Helvetica',
        scaffoldBackgroundColor: Colors.white,
      ),
      home: const SplashScreen(),
      routes: {
        '/shop': (context) => const ShopScreen(),
        '/drive': (context) => const DriveHomeScreen(), // ✅ Now uses correct screen
      },
    );
  }
}
