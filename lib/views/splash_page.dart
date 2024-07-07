import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:loading_animation_widget/loading_animation_widget.dart';

class SplashPage extends StatefulWidget {
  const SplashPage({super.key});

  @override
  State<SplashPage> createState() => _SplashPageState();
}

class _SplashPageState extends State<SplashPage> {
  @override
  void initState() {
    super.initState();

    _redirect();
  }

  _redirect() async {
    await Future.delayed(const Duration(seconds: 3));
    Get.toNamed('/portfolio');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
       child: LoadingAnimationWidget.staggeredDotsWave(
          color: Colors.grey.shade700,
          size: 100,
        ),
      ),
    );
  }
}
