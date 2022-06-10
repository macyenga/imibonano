import 'package:imibonano/pages/home/user/sex_choices/choices/everybody.dart';
import 'package:imibonano/pages/home/user/sex_choices/choices/female.dart';
import 'package:imibonano/pages/home/user/sex_choices/choices/male.dart';
import 'package:imibonano/theme/colors.dart';
import 'package:flutter/material.dart';

class SexChoices extends StatefulWidget {
  const SexChoices({Key? key}) : super(key: key);

  @override
  State<SexChoices> createState() => _SexChoicesState();
}

class _SexChoicesState extends State<SexChoices> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color(0xFFECEFF1),
      appBar: AppBar(
        elevation: 0,
        backgroundColor: Colors.white.withOpacity(0),
        automaticallyImplyLeading: false,
        iconTheme: IconThemeData(
          color: Colors.pink,
        ),
        title: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            IconButton(
              icon: Icon(
                Icons.navigate_before,
                size: 30,
                color: Colors.pink,
              ),
              onPressed: () async {
                Navigator.pop(context);
              },
            ),
            Padding(
              padding: const EdgeInsets.only(right: 105),
              child: Text(
                "Show me",
                style: TextStyle(
                  color: Colors.black,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
          ],
        ),
      ),
      body: ListView(
        children: [
          Container(
            margin: EdgeInsets.only(left: 20, top: 20),
            child: Text(
              "Show me",
              style: TextStyle(
                color: grey,
              ),
            ),
          ),
          SizedBox(
            height: 10,
          ),
          Female(),
          SizedBox(
            height: 2,
          ),
          Male(),
          SizedBox(
            height: 2,
          ),
          EveryBody(),
          SizedBox(
            height: 40,
          ),
          Column(
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              Padding(
                padding: const EdgeInsets.only(right: 154),
                child: Text(
                  "Tinder welcomes you all.",
                  style: TextStyle(
                    color: grey,
                  ),
                ),
              ),
              SizedBox(
                height: 24,
              ),
              Text(
                "The discovery settings now show who\ users include more information about [genders] (https://blog.gotinder.com/genders) and [sexual orientation] ( https://blog.gotinder.com/orientations)\ntheir. As users add more information about themselves, they \ncan choose to show up in the search items that best reflect their identity",
                style: TextStyle(
                  color: grey,
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
