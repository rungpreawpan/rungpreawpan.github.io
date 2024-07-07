import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:preawpan_portfolio/widgets/text_font_style.dart';

class CardTemplate extends StatelessWidget {
  final String imagePath;
  final String title;
  final String? subtitle1;
  final Widget? subtitle2;
  final double? imageHeight;
  final double? imageWidth;
  final double? containerHeight;

  const CardTemplate({
    super.key,
    required this.imagePath,
    required this.title,
    this.subtitle1,
    this.subtitle2,
    this.imageHeight,
    this.imageWidth,
    this.containerHeight,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: Get.width,
      decoration: BoxDecoration(
        border: Border.all(color: Colors.grey),
        borderRadius: BorderRadius.circular(10.0),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Padding(
                padding: const EdgeInsets.all(10.0),
                child: _image(imagePath: imagePath),
              ),
              Expanded(
                child: _content(
                  title: title,
                  subtitle1: subtitle1,
                  subtitle2: subtitle2,
                ),
              ),
            ],
          ),
          subtitle2 != null ? const Divider(
            indent: 20.0,
            endIndent: 20.0,
          ) : const SizedBox(),
          subtitle2 != null
              ? Padding(
                  padding: const EdgeInsets.only(
                    left: 40.0,
                    right: 40.0,
                    bottom: 10.0,
                  ),
                  child: subtitle2!,
                )
              : const SizedBox(),
        ],
      ),
    );
  }

  _image({required String imagePath}) {
    return ClipRRect(
      borderRadius: const BorderRadius.only(
        topLeft: Radius.circular(10.0),
        bottomLeft: Radius.circular(10.0),
      ),
      child: Image.asset(
        imagePath,
        height: imageHeight ?? 180.0,
        width: imageWidth ?? 180.0,
        fit: BoxFit.contain,
      ),
    );
  }

  _content({
    required String title,
    String? subtitle1,
    Widget? subtitle2,
  }) {
    return Padding(
      padding: const EdgeInsets.all(16.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          TextFontStyle(
            title,
            size: 24.0,
            weight: FontWeight.bold,
          ),
          subtitle1 != null
              ? Column(
                  children: [
                    const SizedBox(height: 10.0),
                    TextFontStyle(
                      subtitle1,
                      color: Colors.grey.shade700,
                      size: 22.0,
                    ),
                  ],
                )
              : const SizedBox(),
          // subtitle2 != null
          //     ? Column(
          //         children: [
          //           const SizedBox(height: 10.0),
          //           subtitle2,
          //         ],
          //       )
          //     : const SizedBox(),
        ],
      ),
    );
  }
}
