import 'package:flutter/material.dart';
import 'package:preawpan_portfolio/widgets/text_font_style.dart';

class CustomNavigationBar extends StatelessWidget {
  final PageController pageController;

  const CustomNavigationBar({
    super.key,
    required this.pageController,
  });

  @override
  Widget build(BuildContext context) {
    return TweenAnimationBuilder(
      tween: Tween(begin: 0.0, end: 1.0),
      duration: const Duration(milliseconds: 200),
      builder: (context, value, child) {
        return Transform.scale(
          scale: value,
          child: Row(
            children: [
              Expanded(
                flex: 1,
                child: _logo(),
              ),
              Expanded(
                flex: 3,
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [
                    _navigationButton(
                      onTap: () {
                        pageController.animateToPage(
                          0,
                          duration: const Duration(milliseconds: 500),
                          curve: Curves.easeIn,
                        );
                      },
                      title: 'Home',
                    ),
                    _navigationButton(
                      onTap: () {
                        pageController.animateToPage(
                          1,
                          duration: const Duration(milliseconds: 500),
                          curve: Curves.easeIn,
                        );
                      },
                      title: 'Education',
                    ),
                    _navigationButton(
                      onTap: () {
                        pageController.animateToPage(
                          2,
                          duration: const Duration(milliseconds: 500),
                          curve: Curves.easeIn,
                        );
                      },
                      title: 'Work Experiences',
                    ),
                    _navigationButton(
                      onTap: () {
                        pageController.animateToPage(
                          3,
                          duration: const Duration(milliseconds: 500),
                          curve: Curves.easeIn,
                        );
                      },
                      title: 'Certificates',
                    ),
                  ],
                ),
              ),
            ],
          ),
        );
      },
    );
  }

  _navigationButton({
    required Function() onTap,
    required String title,
  }) {
    return TextButton(
      onPressed: onTap,
      child: TextFontStyle(
        title,
        size: 24.0,
        weight: FontWeight.bold,
      ),
    );
  }

  _logo() {
    return Image.asset(
      'assets/images/logo.png',
      height: 100.0,
    );
  }
}
