import 'package:get/get.dart';
import 'package:preawpan_portfolio/views/education_page.dart';
import 'package:preawpan_portfolio/views/certificates_page.dart';
import 'package:preawpan_portfolio/views/main_page.dart';
import 'package:preawpan_portfolio/views/work_experiences_page.dart';

appRoutes() => [
  GetPage(
    name: '/portfolio',
    page: () => const MainPage(),
    transition: Transition.noTransition,
  ),
  // GetPage(
  //   name: '/about',
  //   page: () => const AboutPage(),
  //   transition: Transition.noTransition,
  // ),
  // GetPage(
  //   name: '/projects',
  //   page: () => const ProjectsPage(),
  //   transition: Transition.noTransition,
  // ),
  // GetPage(
  //   name: '/certificates',
  //   page: () => const CertificatesPage(),
  //   transition: Transition.noTransition,
  // ),
];