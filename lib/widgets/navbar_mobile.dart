import 'package:imibonano/helper/style.dart';
import 'package:flutter/material.dart';

Widget mobileNavBar(GlobalKey<ScaffoldState> key) => AppBar(
      leading: IconButton(
          onPressed: () {
            key.currentState?.openDrawer();
          },
          icon: Icon(
            Icons.menu,
            color: active,
          )),
      backgroundColor: Colors.transparent,
      title: Image.asset('assets/images/logoWEB.png'),
      centerTitle: true,
      elevation: 0,
    );
