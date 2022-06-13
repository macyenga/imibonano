import 'package:imibonano/pages/home/user/shield/widget/check_point.dart';
import 'package:imibonano/pages/home/user/shield/widget/consensus.dart';
import 'package:imibonano/pages/home/user/shield/widget/report.dart';
import 'package:imibonano/pages/home/user/shield/widget/test_1.dart';
import 'package:imibonano/pages/home/user/shield/widget/test_2.dart';
import 'package:imibonano/pages/home/user/shield/widget/test_3.dart';
import 'package:imibonano/pages/home/user/shield/widget/text_box1.dart';
import 'package:imibonano/pages/home/user/shield/widget/text_box2.dart';
import 'package:imibonano/pages/home/user/shield/widget/text_box3.dart';
import 'package:imibonano/pages/home/user/shield/widget/travel.dart';
import 'package:imibonano/pages/home/user/shield/widget/treatment.dart';
import 'package:flutter/material.dart';

import '../widget/basic_info.dart';

class GuideScreen extends StatefulWidget {
  const GuideScreen({Key? key}) : super(key: key);

  @override
  State<GuideScreen> createState() => _GuideScreenState();
}

class _GuideScreenState extends State<GuideScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: getBody(),
    );
  }

  Widget getBody() {
    return ListView(
      children: [
        Padding(
          padding: const EdgeInsets.only(left: 16, top: 30),
          child: Row(
            children: [
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    "Hello Nhan",
                    style: TextStyle(
                      fontSize: 26,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  SizedBox(
                    height: 10,
                  ),
                  Text(
                    "Here's everything you need to know \nabout safety",
                    style: TextStyle(
                      fontSize: 18,
                    ),
                  ),
                ],
              ),
              SizedBox(
                width: 4,
              ),
              CircleAvatar(
                backgroundColor: Colors.red,
              ),
            ],
          ),
        ),
        Padding(
          padding: const EdgeInsets.only(left: 16, top: 30),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                "Safe",
                style: TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                ),
              ),
              SizedBox(
                height: 12,
              ),
              BasicInfo(),
              SizedBox(
                height: 18,
              ),
              Test_1(),
              SizedBox(
                height: 18,
              ),
              Test_2(),
              SizedBox(
                height: 40,
              ),
              Text(
                "Trouble",
                style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
              ),
              SizedBox(
                height: 18,
              ),
              Treatment(),
              SizedBox(
                height: 18,
              ),
              TextBox1(),
              SizedBox(
                height: 40,
              ),
              Text(
                "Meet in real life",
                style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
              ),
              SizedBox(
                height: 18,
              ),
              CheckPoint(),
              SizedBox(
                height: 18,
              ),
              Test_3(),
              SizedBox(
                height: 40,
              ),
              Text(
                "Report",
                style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
              ),
              SizedBox(
                height: 18,
              ),
              Report(),
              SizedBox(
                height: 18,
              ),
              TextBox2(),
              SizedBox(
                height: 18,
              ),
              TextBox3(),
              SizedBox(
                height: 40,
              ),
              Text(
                "Consensus",
                style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
              ),
              SizedBox(
                height: 18,
              ),
              consensus(),
              SizedBox(
                height: 40,
              ),
              Text(
                "Travel",
                style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
              ),
              SizedBox(
                height: 18,
              ),
              Travel(),
              SizedBox(
                height: 20,
              ),
            ],
          ),
        ),
      ],
    );
  }
}
