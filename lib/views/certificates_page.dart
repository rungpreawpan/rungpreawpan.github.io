import 'package:flutter/material.dart';
import 'package:preawpan_portfolio/widgets/card_template.dart';
import 'package:preawpan_portfolio/widgets/text_font_style.dart';

class CertificatesPage extends StatefulWidget {
  const CertificatesPage({super.key});

  @override
  State<CertificatesPage> createState() => _CertificatesPageState();
}

class _CertificatesPageState extends State<CertificatesPage> {
  @override
  Widget build(BuildContext context) {
    //TODO: responsive
    return const Scaffold(
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Padding(
            padding: EdgeInsets.symmetric(horizontal: 100.0),
            child: TextFontStyle(
              'Certificates',
              size: 35.0,
              weight: FontWeight.bold,
            ),
          ),
          SizedBox(height: 20.0),
          Expanded(
            child: SingleChildScrollView(
              physics: BouncingScrollPhysics(),
              child: Padding(
                padding: EdgeInsets.only(
                  left: 100.0,
                  right: 100.0,
                  bottom: 40.0,
                ),
                child: Column(
                  children: [
                    CardTemplate(
                      imagePath: 'assets/images/blockchain.png',
                      containerHeight: 200.0,
                      title: 'Blockchain Technology and Bitcoin',
                      subtitle1: 'August 2022',
                    ),
                    SizedBox(height: 20.0),
                    CardTemplate(
                      imagePath: 'assets/images/ux.png',
                      containerHeight: 200.0,
                      title: 'Foundation of User Experience (UX) Design',
                      subtitle1: 'February 2022',
                    ),
                    SizedBox(height: 20.0),
                    CardTemplate(
                      imagePath: 'assets/images/os.jpg',
                      containerHeight: 200.0,
                      title:
                      'Write your own Operating System from scratch - Step by step',
                      subtitle1: 'May 2021',
                    ),
                    SizedBox(height: 20.0),
                    CardTemplate(
                      imagePath: 'assets/images/hsk2.jpg',
                      containerHeight: 200.0,
                      title: 'Chinese for HSK2',
                      subtitle1: 'October 2020',
                    ),
                    SizedBox(height: 20.0),
                    CardTemplate(
                      imagePath: 'assets/images/hsk1.jpeg',
                      containerHeight: 200.0,
                      title: 'Chinese for HSK1',
                      subtitle1: 'October 2020',
                    ),
                    SizedBox(height: 20.0),
                    CardTemplate(
                      imagePath: 'assets/images/pcb_cer.jpg',
                      containerHeight: 200.0,
                      title:
                          'Aviation Electronics Circuit Design Project (design PCB and assemble the Amplifier)',
                      subtitle1: 'September 2018',
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
}
