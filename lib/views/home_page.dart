import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:preawpan_portfolio/widgets/text_font_style.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:preawpan_portfolio/utils/responsive.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final Uri _resumeUrl = Uri.parse(
      'https://drive.google.com/file/d/1B7S8zxMVBzDiJT6YbdglZrhFxIxKxCR-/view?usp=sharing');
  final Uri _linkedInUrl = Uri.parse(
      'https://www.linkedin.com/in/preawpan-siriphalangkanont-3781791ba/');
  final Uri _githubUrl = Uri.parse('https://github.com/rungpreawpan');

  @override
  Widget build(BuildContext context) {
    //TODO: responsive
    return Scaffold(
      body: _webContent(),
    );
  }

  _name() {
    return Expanded(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.end,
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          TextFontStyle(
            'Preawpan Siriphalangkanont',
            size: Responsive.isDesktop(context)
                ? Responsive.isTablet(context)
                    ? 50.0
                    : 45.0
                : 40.0,
            weight: FontWeight.bold,
          ),
          const SizedBox(height: 20.0),
          Row(
            mainAxisAlignment: MainAxisAlignment.end,
            children: [
              Image.asset(
                'assets/images/flutter.png',
                height: 45.0,
              ),
              const SizedBox(width: 15.0),
              const TextFontStyle(
                'Flutter Developer',
                size: 45.0,
              ),
            ],
          ),
          const SizedBox(height: 30.0),
          _social(),
        ],
      ),
    );
  }

  _social() {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.end,
      mainAxisAlignment: MainAxisAlignment.end,
      mainAxisSize: MainAxisSize.min,
      children: [
        _downloadResume(),
        const SizedBox(width: 20.0),
        InkWell(
          onTap: () async {
            await launchUrl(_linkedInUrl);
          },
          child: Image.asset(
            'assets/images/linked_in.png',
            height: 40.0,
          ),
        ),
        const SizedBox(width: 20.0),
        InkWell(
          onTap: () async {
            await launchUrl(_githubUrl);
          },
          child: Image.asset(
            'assets/images/github.png',
            height: 40.0,
          ),
        ),
      ],
    );
  }

  _downloadResume() {
    return InkWell(
      onTap: () async {
        await launchUrl(_resumeUrl);
      },
      child: Container(
        padding: const EdgeInsets.symmetric(
          horizontal: 10.0,
          vertical: 5.0,
        ),
        decoration: BoxDecoration(
          border: Border.all(),
          borderRadius: BorderRadius.circular(10.0),
        ),
        child: const Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(Icons.download),
            SizedBox(width: 10.0),
            TextFontStyle('Resume'),
          ],
        ),
      ),
    );
  }

  _image() {
    return Image.asset('assets/images/preawpan.jpg');
  }

  _webContent() {
    return Padding(
      padding: const EdgeInsets.only(
        left: 50.0,
        right: 100.0,
        bottom: 100.0,
      ),
      child: Row(
        children: [
          _name(),
          const SizedBox(width: 100.0),
          _image(),
        ],
      ),
    );
  }
}
