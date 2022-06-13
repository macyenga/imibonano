import 'package:imibonano/pages/home/user/shield/page/guide_screen.dart';
import 'package:imibonano/pages/home/user/shield/page/resources_screen.dart';
import 'package:imibonano/pages/home/user/shield/page/tools_screen.dart';
import 'package:imibonano/theme/colors.dart';
import 'package:flutter/material.dart';

class SafeCenterScreen extends StatefulWidget {
  const SafeCenterScreen({Key? key}) : super(key: key);

  @override
  State<SafeCenterScreen> createState() => _SafeCenterScreenState();
}

class _SafeCenterScreenState extends State<SafeCenterScreen> {
  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 3,
      child: Scaffold(
        appBar: AppBar(
          automaticallyImplyLeading: false,
          leading: IconButton(
              icon: Icon(
                Icons.close,
                color: black,
              ),
              iconSize: 30,
              onPressed: () async {
                Navigator.of(context).pop();
              }),
          centerTitle: true,
          title: Text(
            'Safety Center',
            style: TextStyle(
                fontSize: 20, fontWeight: FontWeight.bold, color: Colors.black),
          ),
          elevation: 0,
          backgroundColor: Colors.white,
          bottom: TabBar(
            tabs: [
              Padding(
                padding: const EdgeInsets.only(bottom: 10.0),
                child: Text(
                  "GUIDE",
                  style: TextStyle(color: Colors.black),
                ),
              ),
              Padding(
                padding: const EdgeInsets.only(bottom: 10.0),
                child: Text(
                  "TOOLS",
                  style: TextStyle(color: Colors.black),
                ),
              ),
              Padding(
                padding: const EdgeInsets.only(bottom: 10.0),
                child: Text(
                  "RESOURCES",
                  style: TextStyle(color: Colors.black),
                ),
              )
            ],
          ),
        ),
        body: TabBarView(children: [
          const GuideScreen(),
          const ToolsScreen(),
          const ResourcesScreen()
        ]),
      ),
    );
  }
}
