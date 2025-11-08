import 'package:flutter/material.dart';
import 'screens/login_screen.dart';
import 'screens/store_home_screen.dart';
import 'screens/shop_screen.dart';
import 'screens/drive_home_screen.dart';


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
     home: const LoginScreen(),
      routes: 
        '/shop': (context) => const ShopScreen(),
                '/drive': (context) => const DriveHomeScreen(),
        '/owner': (context) => const StoreHomeScreen(),
  }
}
