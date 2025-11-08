import 'package:flutter/material.dart';
import 'screens/login_screen.dart';
import 'screens/store_home_screen.dart';


import 'screens/drive_home_screen.dart';
import 'screens/shopper_main_screen.dart';
import 'screens/sign_up_screen.dart';
import 'screens/my_cart_screen.dart';
import 'screens/checkout_screen.dart';
import 'screens/onboarding_screen.dart';
import 'screens/product_detail_screen.dart';

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
   home: const OnboardingScreen(),
routes: {
  '/login': (context) => const LoginScreen(),
  '/signup': (context) => const SignUpScreen(),
  '/shop': (context) => const ShopperMainScreen(),
  '/drive': (context) => const DriveHomeScreen(),
  '/owner': (context) => const StoreHomeScreen(),
  '/cart': (context) => const MyCartScreen(),
  '/checkout': (context) => const CheckoutScreen(),
      '/product': (context) => const ProductDetailScreen(),
},
