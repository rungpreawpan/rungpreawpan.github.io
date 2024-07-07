import 'package:flutter/material.dart';
import 'package:preawpan_portfolio/utils/responsive.dart';
import 'package:flutter/foundation.dart' show kIsWeb;
import 'package:preawpan_portfolio/views/education_page.dart';
import 'package:preawpan_portfolio/views/certificates_page.dart';
import 'package:preawpan_portfolio/views/home_page.dart';
import 'package:preawpan_portfolio/views/work_experiences_page.dart';
import 'package:preawpan_portfolio/widgets/custom_navigation_bar.dart';

class MainPage extends StatefulWidget {
  const MainPage({super.key});

  @override
  State<MainPage> createState() => _MainPageState();
}

class _MainPageState extends State<MainPage> {
  final PageController _pageController = PageController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          children: [
            //TODO: responsive
            SizedBox(
              height: 150.0,
              child: CustomNavigationBar(pageController: _pageController),
            ),
            Expanded(
              flex: 9,
              child: PageView(
                scrollDirection: Axis.vertical,
                physics: const NeverScrollableScrollPhysics(),
                controller: _pageController,
                children: const [
                  HomePage(),
                  AboutPage(),
                  WorkExperiencePage(),
                  CertificatesPage(),
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
