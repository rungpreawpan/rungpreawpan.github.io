import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:preawpan_portfolio/utils/app_routes.dart';
import 'package:preawpan_portfolio/views/splash_page.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      title: "Preawpan's Portfolio",
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.grey,
        splashColor: Colors.transparent,
        highlightColor: Colors.transparent,
        useMaterial3: false,
      ),
      home: const SplashPage(),
      getPages: appRoutes(),
      builder: (context, child) {
        return MediaQuery(
          data: MediaQuery.of(context).copyWith(
            textScaler: const TextScaler.linear(1.0),
          ),
          child: child!,
        );
      }
    );
  }
}