import 'package:flutter/material.dart';
import 'package:preawpan_portfolio/widgets/card_template.dart';
import 'package:preawpan_portfolio/widgets/text_font_style.dart';

class AboutPage extends StatelessWidget {
  const AboutPage({super.key});

  @override
  Widget build(BuildContext context) {
    //TODO: responsive
    return Scaffold(
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Padding(
            padding: EdgeInsets.symmetric(horizontal: 100.0),
            child: TextFontStyle(
              'Education',
              size: 35.0,
              weight: FontWeight.bold,
            ),
          ),
          const SizedBox(height: 20.0),
          Expanded(
            child: SingleChildScrollView(
              physics: const BouncingScrollPhysics(),
              child: Padding(
                padding: const EdgeInsets.only(
                  left: 100.0,
                  right: 100.0,
                  bottom: 40.0,
                ),
                child: Column(
                  children: [
                    const CardTemplate(
                      imagePath: 'assets/images/tni.png',
                      containerHeight: 200.0,
                      title:
                          'Thai-Nichi Institute of Technology (June 2024 - Present)',
                      subtitle1: 'Master of Science - Information Technology',
                    ),
                    const SizedBox(height: 20.0),
                    CardTemplate(
                      imagePath: 'assets/images/catc.png',
                      containerHeight: 320.0,
                      title:
                          'Civil Aviation Training Center (July 2017 - June 2021)',
                      subtitle1: 'Aviation Electronics Engineering (GPA: 2.85)',
                      subtitle2: _catc(),
                    ),
                    const SizedBox(height: 20.0),
                    CardTemplate(
                      imagePath: 'assets/images/sjb.png',
                      containerHeight: 200.0,
                      title: 'Saint Joseph Bangna (May 2014 - March 2016)',
                      subtitle1: 'Science - Mathematics Major (GPA: 3.66)',
                      subtitle2: _sjb(),
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

  _catc() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const SizedBox(height: 10.0),
        TextFontStyle(
          'Training: ',
          weight: FontWeight.w600,
          color: Colors.grey.shade700,
          underline: TextDecoration.underline,
        ),
        const SizedBox(height: 5.0),
        TextFontStyle(
          '- Aviation Electronics Circuit Design Project (design PCB and assemble the Amplifier)',
          color: Colors.grey.shade700,
        ),
        const SizedBox(height: 10.0),
        _box(
          children: [
            Image.asset(
              'assets/images/pcb_cer.jpg',
              height: 130,
            ),
            Image.asset(
              'assets/images/amp1.png',
              height: 130,
            ),
            Image.asset(
              'assets/images/amp2.png',
              height: 130,
            ),
            Image.asset(
              'assets/images/amp3.png',
              height: 130,
            ),
          ],
        ),
        const SizedBox(height: 10.0),
        TextFontStyle(
          'Projects:',
          weight: FontWeight.w600,
          color: Colors.grey.shade700,
          underline: TextDecoration.underline,
        ),
        const SizedBox(height: 5.0),
        TextFontStyle(
          '- Monitoring data from PM 2.5 Sensor and alerting when PM 2.5 reaches the threshold for Line application',
          color: Colors.grey.shade700,
        ),
        const SizedBox(height: 10.0),
        _box(
          children: [
            Image.asset(
              'assets/images/pm1.jpeg',
              height: 130,
            ),
            Image.asset(
              'assets/images/pm2.jpeg',
              height: 130,
            ),
            Image.asset(
              'assets/images/pm3.jpeg',
              height: 130,
            ),
          ],
        ),
        const SizedBox(height: 10.0),
        TextFontStyle(
          '- Write the program that convert the light intensity from LDR sensor to show on LED light level by using Assembly language and design PCB of MCS51 microcontroller board',
          color: Colors.grey.shade700,
        ),
        const SizedBox(height: 10.0),
        _box(
          children: [
            Image.asset(
              'assets/images/pcb.jpeg',
              height: 130,
            ),
            Image.asset(
              'assets/images/pcb2.jpg',
              height: 130,
            ),
          ],
        ),
        const SizedBox(height: 10.0),
        TextFontStyle(
          ' - Solar power bank',
          color: Colors.grey.shade700,
        ),
        const SizedBox(height: 10.0),
        _box(
          children: [
            Image.asset(
              'assets/images/solar.JPG',
              height: 130,
            ),
            Image.asset(
              'assets/images/solar2.png',
              height: 130,
            ),
          ],
        ),
      ],
    );
  }

  _sjb() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const SizedBox(height: 10.0),
        TextFontStyle(
          'Activity: ',
          color: Colors.grey.shade700,
          weight: FontWeight.w600,
          underline: TextDecoration.underline,
        ),
        const SizedBox(height: 5.0),
        TextFontStyle(
          '- Student President (2015 - 2016)',
          color: Colors.grey.shade700,
        ),
      ],
    );
  }

  _box({required List<Widget> children}) {
    return Padding(
      padding: const EdgeInsets.all(10.0),
      child: Wrap(
        spacing: 5.0,
        runSpacing: 5.0,
        children: children,
      ),
    );
  }
}
