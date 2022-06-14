import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import '../../helper/responsive.dart';
import '../../helper/style.dart';
import '../../widgets/drawer.dart';
import '../../widgets/navbar_desktop.dart';
import 'home/widget/desktop.dart';
import 'home/widget/mobile.dart';

class HomePage extends StatelessWidget {
  final GlobalKey<ScaffoldState> scaffoldkey = GlobalKey();

  @override
  Widget build(BuildContext context) {
    var screenSize = MediaQuery.of(context).size;
    return Scaffold(
      key: scaffoldkey,
      extendBodyBehindAppBar: true,
      appBar: //ResponsiveWideget.isSmallScreen?mobileNavBar(scaffoldkey):
          PreferredSize(
        preferredSize: Size(screenSize.width, 1000),
        child: NavBar(),
      ),
      drawer: SideMenu(),
      backgroundColor: bgColor,
      body: ResponsiveWideget(
        largeScreen: Desktop(),
        smallScreen: Mobile(),
      ),
    );
  }
}
