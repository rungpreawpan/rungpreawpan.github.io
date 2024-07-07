import 'package:flutter/material.dart';
import 'package:preawpan_portfolio/widgets/card_template.dart';
import 'package:preawpan_portfolio/widgets/text_font_style.dart';

class WorkExperiencePage extends StatefulWidget {
  const WorkExperiencePage({super.key});

  @override
  State<WorkExperiencePage> createState() => _WorkExperiencePageState();
}

class _WorkExperiencePageState extends State<WorkExperiencePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Padding(
            padding: EdgeInsets.symmetric(horizontal: 100.0),
            child: TextFontStyle(
              'Work Experiences',
              size: 35.0,
              weight: FontWeight.bold,
            ),
          ),
          const SizedBox(height: 20.0),
          Expanded(
            child: SingleChildScrollView(
              child: Padding(
                padding: const EdgeInsets.only(
                  left: 100.0,
                  right: 100.0,
                  bottom: 40.0,
                ),
                child: Column(
                  children: [
                    CardTemplate(
                      imagePath: 'assets/images/freewill_fx.png',
                      containerHeight: 200.0,
                      title: 'Freewill Solutions',
                      subtitle1: 'Software Engineer | August 2022 - Present',
                      subtitle2: _freewill(),
                    ),
                    const SizedBox(height: 20.0),
                    CardTemplate(
                      imagePath: 'assets/images/mu_space.png',
                      containerHeight: 200.0,
                      title: 'mu Space Advanced and Technology',
                      subtitle1: 'Software Engineer | June 2021 - July 2022',
                      subtitle2: _muSpaceFull(),
                    ),
                    const SizedBox(height: 20.0),
                    CardTemplate(
                      imagePath: 'assets/images/mu_space.png',
                      containerHeight: 200.0,
                      title: 'mu Space Advanced and Technology',
                      subtitle1:
                          'Electronics Engineer (Internship) | February - June 2021',
                      subtitle2: _muSpaceIntern(),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  _freewill() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        TextFontStyle(
          'Projects:',
          color: Colors.grey.shade700,
          weight: FontWeight.w600,
          underline: TextDecoration.underline,
        ),
        const SizedBox(height: 10.0),
        TextFontStyle(
          '- Terminus (Flutter)',
          color: Colors.grey.shade700,
          weight: FontWeight.w600,
        ),
        TextFontStyle(
          'logistic tracking using Google maps, monitor data of vehicle that send from vehicle box',
          color: Colors.grey.shade700,
        ),
        const SizedBox(height: 5.0),
        TextFontStyle(
          '- Terminus Delivery Tracker (Flutter)',
          color: Colors.grey.shade700,
          weight: FontWeight.w600,
        ),
        TextFontStyle(
          'tracking position of delivery staff, checking order status',
          color: Colors.grey.shade700,
        ),
        const SizedBox(height: 5.0),
        TextFontStyle(
          '- Cloudtime Patrol (Flutter)',
          color: Colors.grey.shade700,
          weight: FontWeight.w600,
        ),
        TextFontStyle(
          'monitor checkpoint area, report the emergency incident',
          color: Colors.grey.shade700,
        ),
        const SizedBox(height: 5.0),
        TextFontStyle(
          '- Cloudtime Attendance (Flutter)',
          color: Colors.grey.shade700,
          weight: FontWeight.w600,
        ),
        TextFontStyle(
          'time attendance system, leave request, request overtime job',
          color: Colors.grey.shade700,
        ),
        const SizedBox(height: 5.0),
        TextFontStyle(
          '- LinkTrack (Flutter)',
          color: Colors.grey.shade700,
          weight: FontWeight.w600,
        ),
        TextFontStyle(
          'logistic tracking using Google maps, send maintenance to HQ, request documentation for each logistic, and check the status of the vehicle and the driver via application',
          color: Colors.grey.shade700,
        ),
      ],
    );
  }

  _muSpaceFull() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        TextFontStyle(
          'Projects:',
          color: Colors.grey.shade700,
          weight: FontWeight.w600,
          underline: TextDecoration.underline,
        ),
        const SizedBox(height: 10.0),
        TextFontStyle(
          '- Internal Portal Website (React)',
          color: Colors.grey.shade700,
          weight: FontWeight.w600,
        ),
        TextFontStyle(
          'Attendance system, Company van reservation, Purchase requisition form',
          color: Colors.grey.shade700,
        ),
        const SizedBox(height: 5.0),
        TextFontStyle(
          '- Battery Management system Application (Flutter)',
          color: Colors.grey.shade700,
          weight: FontWeight.w600,
        ),
        TextFontStyle(
          'Show real time data of battery pack in application and can setup configuration',
          color: Colors.grey.shade700,
        ),
        const SizedBox(height: 5.0),
        TextFontStyle(
          '- Autonomous Robot Application (Flutter)',
          color: Colors.grey.shade700,
          weight: FontWeight.w600,
        ),
        TextFontStyle(
          'Show real time data from the robot, control the robot with joystick or select way point',
          color: Colors.grey.shade700,
        ),
      ],
    );
  }

  _muSpaceIntern() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        TextFontStyle(
          'Projects:',
          color: Colors.grey.shade700,
          weight: FontWeight.w600,
          underline: TextDecoration.underline,
        ),
        const SizedBox(height: 10.0),
        TextFontStyle(
          '- Python interface for inventory management system',
          color: Colors.grey.shade700,
        ),
        const SizedBox(height: 5.0),
        TextFontStyle(
          '- Monitor data from Gas and temperature, humidity sensor and show data to thinker.io dashboard',
          color: Colors.grey.shade700,
        ),
        const SizedBox(height: 5.0),
        TextFontStyle(
          '- BLDC motor and Electronics speed control by using Arduino',
          color: Colors.grey.shade700,
        ),
      ],
    );
  }
}
