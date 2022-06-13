import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';

import 'favorite_page.dart';
import 'loginPhone/imgRegister/upload_img.dart';

class EditFavotire extends StatefulWidget {
  const EditFavotire({Key? key}) : super(key: key);

  @override
  State<EditFavotire> createState() => _EditFavotireState();
}

class _EditFavotireState extends State<EditFavotire> {
  bool selected_1 = false;
  bool colorText_1 = false;
  bool selected_2 = false;
  bool colorText_2 = false;
  bool selected_3 = false;
  bool colorText_3 = false;
  bool selected_4 = false;
  bool colorText_4 = false;
  bool selected_5 = false;
  bool colorText_5 = false;
  bool selected_6 = false;
  bool colorText_6 = false;
  bool selected_7 = false;
  bool colorText_7 = false;
  bool selected_8 = false;
  bool colorText_8 = false;
  bool selected_9 = false;
  bool colorText_9 = false;
  bool selected_10 = false;
  bool colorText_10 = false;
  bool selected_11 = false;
  bool colorText_11 = false;
  bool selected_12 = false;
  bool colorText_12 = false;
  bool selected_13 = false;
  bool colorText_13 = false;
  bool selected_14 = false;
  bool colorText_14 = false;
  bool selected_15 = false;
  bool colorText_15 = false;
  bool selected_16 = false;
  bool colorText_16 = false;
  bool selected_17 = false;
  bool colorText_17 = false;
  bool selected_18 = false;
  bool colorText_18 = false;
  bool selected_19 = false;
  bool colorText_19 = false;
  bool selected_20 = false;
  bool colorText_20 = false;
  List<String> strings = [];
  @override
  Widget build(BuildContext context) {
    backgroundColor:
    Color(0xFFECEFF1);
    return Scaffold(
      appBar: AppBar(
          backgroundColor: Colors.white,
          title: Text(
            'Interests',
            style: TextStyle(color: Colors.black),
          ),
          centerTitle: true,
          actions: [
            TextButton(
                onPressed: () {
                  Navigator.of(context).pop();
                },
                child: Text(
                  'Accomplished',
                  style: TextStyle(
                      color: Colors.pinkAccent,
                      fontWeight: FontWeight.bold,
                      fontFamily: 'RobotoMono'),
                ))
          ]),
      body: ListView(
        children: [
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Text(
              'Select the interests you want to share.Choose a minimum of 3',
              style: TextStyle(fontSize: 15, color: Colors.grey),
            ),
          ),
          Container(
            // color: Colors.blue,
            margin: EdgeInsets.only(left: 40, right: 40),
            padding: EdgeInsets.only(top: 15, left: 5, right: 5),
            child: Column(
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    InkWell(
                      borderRadius: BorderRadius.circular(50),
                      onTap: () {
                        setState(() {
                          selected_1 = !selected_1;
                          colorText_1 = !colorText_1;
                        });
                      },
                      child: Container(
                        padding: EdgeInsets.only(left: 14, top: 5, bottom: 5),
                        width: 80,
                        decoration: BoxDecoration(
                            border: Border.all(
                              color: selected_1
                                  ? Color.fromARGB(255, 255, 25, 75)
                                  : Colors.grey,
                              width: 2,
                            ),
                            borderRadius: BorderRadius.circular(50)),
                        child: Text(
                          "90s Kid",
                          style: TextStyle(
                              color: selected_1
                                  ? Color.fromARGB(255, 255, 25, 75)
                                  : Colors.grey,
                              fontWeight: FontWeight.bold,
                              fontSize: 14),
                        ),
                      ),
                    ),
                    InkWell(
                      onTap: () {
                        setState(() {
                          selected_2 = !selected_2;
                          colorText_2 = !colorText_2;
                        });
                      },
                      borderRadius: BorderRadius.circular(50),
                      child: Container(
                        padding: EdgeInsets.only(left: 15, top: 5, bottom: 5),
                        width: 160,
                        decoration: BoxDecoration(
                            border: Border.all(
                              color: selected_2
                                  ? Color.fromARGB(255, 255, 25, 75)
                                  : Colors.grey,
                              width: 2,
                            ),
                            borderRadius: BorderRadius.circular(50)),
                        child: Text(
                          "Take care of yourself",
                          style: TextStyle(
                              color: selected_2
                                  ? Color.fromARGB(255, 255, 25, 75)
                                  : Colors.grey,
                              fontWeight: FontWeight.bold,
                              fontSize: 14),
                        ),
                      ),
                    ),
                  ],
                ),
                SizedBox(
                  height: 15,
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    InkWell(
                      onTap: () {
                        setState(() {
                          selected_3 = !selected_3;
                          colorText_3 = !colorText_3;
                        });
                      },
                      borderRadius: BorderRadius.circular(50),
                      child: Container(
                        padding: EdgeInsets.only(left: 15, top: 5, bottom: 5),
                        width: 90,
                        decoration: BoxDecoration(
                            border: Border.all(
                              color: selected_3
                                  ? Color.fromARGB(255, 255, 25, 75)
                                  : Colors.grey,
                              width: 2,
                            ),
                            borderRadius: BorderRadius.circular(50)),
                        child: Text(
                          "Hot Yoga",
                          style: TextStyle(
                              color: selected_3
                                  ? Color.fromARGB(255, 255, 25, 75)
                                  : Colors.grey,
                              fontWeight: FontWeight.bold,
                              fontSize: 14),
                        ),
                      ),
                    ),
                    InkWell(
                      onTap: (() {
                        setState(() {
                          selected_4 = !selected_4;
                          colorText_4 = !colorText_4;
                        });
                      }),
                      borderRadius: BorderRadius.circular(50),
                      child: Container(
                        padding: EdgeInsets.only(left: 15, top: 5, bottom: 5),
                        width: 60,
                        decoration: BoxDecoration(
                            border: Border.all(
                              color: selected_4
                                  ? Color.fromARGB(255, 255, 25, 75)
                                  : Colors.grey,
                              width: 2,
                            ),
                            borderRadius: BorderRadius.circular(50)),
                        child: Text(
                          "Write",
                          style: TextStyle(
                            color: selected_4
                                ? Color.fromARGB(255, 255, 25, 75)
                                : Colors.grey,
                            fontWeight: FontWeight.bold,
                            fontSize: 14,
                          ),
                        ),
                      ),
                    ),
                    InkWell(
                      onTap: () {
                        setState(() {
                          selected_5 = !selected_5;
                          colorText_5 = !colorText_5;
                        });
                      },
                      borderRadius: BorderRadius.circular(50),
                      child: Container(
                        padding: EdgeInsets.only(left: 12, top: 5, bottom: 5),
                        width: 60,
                        decoration: BoxDecoration(
                            border: Border.all(
                              color: selected_5
                                  ? Color.fromARGB(255, 255, 25, 75)
                                  : Colors.grey,
                              width: 2,
                            ),
                            borderRadius: BorderRadius.circular(50)),
                        child: Text(
                          "Meditation",
                          style: TextStyle(
                              color: selected_5
                                  ? Color.fromARGB(255, 255, 25, 75)
                                  : Colors.grey,
                              fontWeight: FontWeight.bold,
                              fontSize: 14),
                        ),
                      ),
                    ),
                  ],
                ),
                SizedBox(
                  height: 15,
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    InkWell(
                      onTap: () {
                        setState(() {
                          selected_6 = !selected_6;
                          colorText_6 = !colorText_6;
                        });
                      },
                      borderRadius: BorderRadius.circular(50),
                      child: Container(
                        padding: EdgeInsets.only(left: 20, top: 5, bottom: 5),
                        width: 80,
                        decoration: BoxDecoration(
                            border: Border.all(
                              color: selected_6
                                  ? Color.fromARGB(255, 255, 25, 75)
                                  : Colors.grey,
                              width: 2,
                            ),
                            borderRadius: BorderRadius.circular(50)),
                        child: Text(
                          "Sushi",
                          style: TextStyle(
                              color: selected_6
                                  ? Color.fromARGB(255, 255, 25, 75)
                                  : Colors.grey,
                              fontWeight: FontWeight.bold,
                              fontSize: 14),
                        ),
                      ),
                    ),
                    InkWell(
                      onTap: () {
                        setState(() {
                          selected_7 = !selected_7;
                          colorText_7 = !colorText_7;
                        });
                      },
                      borderRadius: BorderRadius.circular(50),
                      child: Container(
                        padding: EdgeInsets.only(left: 15, top: 5, bottom: 5),
                        width: 80,
                        decoration: BoxDecoration(
                            border: Border.all(
                              color: selected_7
                                  ? Color.fromARGB(255, 255, 25, 75)
                                  : Colors.grey,
                              width: 2,
                            ),
                            borderRadius: BorderRadius.circular(50)),
                        child: Text(
                          "Hockey",
                          style: TextStyle(
                              color: selected_7
                                  ? Color.fromARGB(255, 255, 25, 75)
                                  : Colors.grey,
                              fontWeight: FontWeight.bold,
                              fontSize: 14),
                        ),
                      ),
                    ),
                    InkWell(
                      onTap: () {
                        setState(() {
                          selected_8 = !selected_8;
                          colorText_8 = !colorText_8;
                        });
                      },
                      borderRadius: BorderRadius.circular(50),
                      child: Container(
                        padding: EdgeInsets.only(left: 12, top: 5, bottom: 5),
                        width: 80,
                        decoration: BoxDecoration(
                            border: Border.all(
                              color: selected_8
                                  ? Color.fromARGB(255, 255, 25, 75)
                                  : Colors.grey,
                              width: 2,
                            ),
                            borderRadius: BorderRadius.circular(50)),
                        child: Text(
                          "Basketball",
                          style: TextStyle(
                              color: selected_8
                                  ? Color.fromARGB(255, 255, 25, 75)
                                  : Colors.grey,
                              fontWeight: FontWeight.bold,
                              fontSize: 14),
                        ),
                      ),
                    ),
                  ],
                ),
                SizedBox(
                  height: 15,
                ),
                Row(
                  children: [
                    InkWell(
                      onTap: () {
                        setState(() {
                          selected_9 = !selected_9;
                          colorText_9 = !colorText_9;
                        });
                      },
                      borderRadius: BorderRadius.circular(50),
                      child: Container(
                        padding: EdgeInsets.only(left: 24, top: 5, bottom: 5),
                        width: 150,
                        decoration: BoxDecoration(
                            border: Border.all(
                              color: selected_9
                                  ? Color.fromARGB(255, 255, 25, 75)
                                  : Colors.grey,
                              width: 2,
                            ),
                            borderRadius: BorderRadius.circular(50)),
                        child: Text(
                          "Poetry Contest",
                          style: TextStyle(
                              color: selected_9
                                  ? Color.fromARGB(255, 255, 25, 75)
                                  : Colors.grey,
                              fontWeight: FontWeight.bold,
                              fontSize: 14),
                        ),
                      ),
                    ),
                  ],
                ),
                SizedBox(
                  height: 15,
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    InkWell(
                      onTap: () {
                        setState(() {
                          selected_10 = !selected_10;
                          colorText_10 = !colorText_10;
                        });
                      },
                      borderRadius: BorderRadius.circular(50),
                      child: Container(
                        padding: EdgeInsets.only(left: 22, top: 5, bottom: 5),
                        width: 150,
                        decoration: BoxDecoration(
                            border: Border.all(
                              color: selected_10
                                  ? Color.fromARGB(255, 255, 25, 75)
                                  : Colors.grey,
                              width: 2,
                            ),
                            borderRadius: BorderRadius.circular(50)),
                        child: Text(
                          "Workout at home",
                          style: TextStyle(
                              color: selected_10
                                  ? Color.fromARGB(255, 255, 25, 75)
                                  : Colors.grey,
                              fontWeight: FontWeight.bold,
                              fontSize: 14),
                        ),
                      ),
                    ),
                    InkWell(
                      borderRadius: BorderRadius.circular(50),
                      onTap: () {
                        setState(() {
                          selected_11 = !selected_11;
                          colorText_11 = !colorText_11;
                        });
                      },
                      child: Container(
                        padding: EdgeInsets.only(left: 24, top: 5, bottom: 5),
                        width: 100,
                        decoration: BoxDecoration(
                            border: Border.all(
                              color: selected_11
                                  ? Color.fromARGB(255, 255, 25, 75)
                                  : Colors.grey,
                              width: 2,
                            ),
                            borderRadius: BorderRadius.circular(50)),
                        child: Text(
                          "Manga",
                          style: TextStyle(
                              color: selected_11
                                  ? Color.fromARGB(255, 255, 25, 75)
                                  : Colors.grey,
                              fontWeight: FontWeight.bold,
                              fontSize: 14),
                        ),
                      ),
                    ),
                  ],
                ),
                SizedBox(
                  height: 15,
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    InkWell(
                      onTap: () {
                        setState(() {
                          selected_12 = !selected_12;
                          colorText_12 = !colorText_12;
                        });
                      },
                      borderRadius: BorderRadius.circular(50),
                      child: Container(
                        padding: EdgeInsets.only(left: 24, top: 5, bottom: 5),
                        width: 120,
                        decoration: BoxDecoration(
                            border: Border.all(
                              color: selected_12
                                  ? Color.fromARGB(255, 255, 25, 75)
                                  : Colors.grey,
                              width: 2,
                            ),
                            borderRadius: BorderRadius.circular(50)),
                        child: Text(
                          "Make up",
                          style: TextStyle(
                              color: selected_12
                                  ? Color.fromARGB(255, 255, 25, 75)
                                  : Colors.grey,
                              fontWeight: FontWeight.bold,
                              fontSize: 14),
                        ),
                      ),
                    ),
                    InkWell(
                      onTap: () {
                        setState(() {
                          selected_13 = !selected_13;
                          colorText_13 = !colorText_13;
                        });
                      },
                      borderRadius: BorderRadius.circular(50),
                      child: Container(
                        padding: EdgeInsets.only(left: 20, top: 5, bottom: 5),
                        width: 80,
                        decoration: BoxDecoration(
                            border: Border.all(
                              color: selected_13
                                  ? Color.fromARGB(255, 255, 25, 75)
                                  : Colors.grey,
                              width: 2,
                            ),
                            borderRadius: BorderRadius.circular(50)),
                        child: Text(
                          "Aquarium",
                          style: TextStyle(
                            color: selected_13
                                ? Color.fromARGB(255, 255, 25, 75)
                                : Colors.grey,
                            fontWeight: FontWeight.bold,
                            fontSize: 14,
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
                SizedBox(
                  height: 15,
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    InkWell(
                      onTap: () {
                        setState(() {
                          selected_14 = !selected_14;
                          colorText_14 = !colorText_14;
                        });
                      },
                      borderRadius: BorderRadius.circular(50),
                      child: Container(
                        padding: EdgeInsets.only(left: 24, top: 5, bottom: 5),
                        width: 130,
                        decoration: BoxDecoration(
                            border: Border.all(
                              color: selected_14
                                  ? Color.fromARGB(255, 255, 25, 75)
                                  : Colors.grey,
                              width: 2,
                            ),
                            borderRadius: BorderRadius.circular(50)),
                        child: Text(
                          "Sneakers",
                          style: TextStyle(
                              color: selected_14
                                  ? Color.fromARGB(255, 255, 25, 75)
                                  : Colors.grey,
                              fontWeight: FontWeight.bold,
                              fontSize: 14),
                        ),
                      ),
                    ),
                    InkWell(
                      onTap: () {
                        setState(() {
                          selected_15 = !selected_15;
                          colorText_15 = !colorText_15;
                        });
                      },
                      borderRadius: BorderRadius.circular(50),
                      child: Container(
                        padding: EdgeInsets.only(left: 20, top: 5, bottom: 5),
                        width: 100,
                        decoration: BoxDecoration(
                            border: Border.all(
                              color: selected_15
                                  ? Color.fromARGB(255, 255, 25, 75)
                                  : Colors.grey,
                              width: 2,
                            ),
                            borderRadius: BorderRadius.circular(50)),
                        child: Text(
                          "Instagram",
                          style: TextStyle(
                              color: selected_15
                                  ? Color.fromARGB(255, 255, 25, 75)
                                  : Colors.grey,
                              fontWeight: FontWeight.bold,
                              fontSize: 14),
                        ),
                      ),
                    ),
                  ],
                ),
                SizedBox(
                  height: 15,
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    InkWell(
                      onTap: (() {
                        setState(() {
                          selected_16 = !selected_16;
                          colorText_16 = !colorText_16;
                        });
                      }),
                      borderRadius: BorderRadius.circular(50),
                      child: Container(
                        padding: EdgeInsets.only(left: 15, top: 5, bottom: 5),
                        width: 130,
                        decoration: BoxDecoration(
                            border: Border.all(
                              color: selected_16
                                  ? Color.fromARGB(255, 255, 25, 75)
                                  : Colors.grey,
                              width: 2,
                            ),
                            borderRadius: BorderRadius.circular(50)),
                        child: Text(
                          "Hot waterfall",
                          style: TextStyle(
                              color: selected_16
                                  ? Color.fromARGB(255, 255, 25, 75)
                                  : Colors.grey,
                              fontWeight: FontWeight.bold,
                              fontSize: 14),
                        ),
                      ),
                    ),
                    InkWell(
                      onTap: () {
                        setState(() {
                          selected_17 = !selected_17;
                          colorText_17 = !colorText_17;
                        });
                      },
                      borderRadius: BorderRadius.circular(50),
                      child: Container(
                        padding: EdgeInsets.only(left: 20, top: 5, bottom: 5),
                        width: 100,
                        decoration: BoxDecoration(
                            border: Border.all(
                              color: selected_17
                                  ? Color.fromARGB(255, 255, 25, 75)
                                  : Colors.grey,
                              width: 2,
                            ),
                            borderRadius: BorderRadius.circular(50)),
                        child: Text(
                          "Martial Arts",
                          style: TextStyle(
                              color: selected_17
                                  ? Color.fromARGB(255, 255, 25, 75)
                                  : Colors.grey,
                              fontWeight: FontWeight.bold,
                              fontSize: 14),
                        ),
                      ),
                    ),
                  ],
                ),
                SizedBox(
                  height: 15,
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    InkWell(
                      onTap: (() {
                        setState(() {
                          selected_18 = !selected_18;
                          colorText_18 = !colorText_18;
                        });
                      }),
                      borderRadius: BorderRadius.circular(50),
                      child: Container(
                        padding: EdgeInsets.only(left: 18, top: 5, bottom: 5),
                        width: 80,
                        decoration: BoxDecoration(
                            border: Border.all(
                              color: selected_18
                                  ? Color.fromARGB(255, 255, 25, 75)
                                  : Colors.grey,
                              width: 2,
                            ),
                            borderRadius: BorderRadius.circular(50)),
                        child: Text(
                          "Marvel",
                          style: TextStyle(
                              color: selected_18
                                  ? Color.fromARGB(255, 255, 25, 75)
                                  : Colors.grey,
                              fontWeight: FontWeight.bold,
                              fontSize: 14),
                        ),
                      ),
                    ),
                    InkWell(
                      onTap: () {
                        setState(() {
                          selected_19 = !selected_19;
                          colorText_19 = !colorText_19;
                        });
                      },
                      borderRadius: BorderRadius.circular(50),
                      child: Container(
                        padding: EdgeInsets.only(left: 20, top: 5, bottom: 5),
                        width: 80,
                        decoration: BoxDecoration(
                            border: Border.all(
                              color: selected_19
                                  ? Color.fromARGB(255, 255, 25, 75)
                                  : Colors.grey,
                              width: 2,
                            ),
                            borderRadius: BorderRadius.circular(50)),
                        child: Text(
                          "Take a walk",
                          style: TextStyle(
                              color: selected_19
                                  ? Color.fromARGB(255, 255, 25, 75)
                                  : Colors.grey,
                              fontWeight: FontWeight.bold,
                              fontSize: 14),
                        ),
                      ),
                    ),
                    InkWell(
                      onTap: (() {
                        setState(() {
                          selected_20 = !selected_20;
                          colorText_20 = !colorText_20;
                        });
                      }),
                      borderRadius: BorderRadius.circular(50),
                      child: Container(
                        padding: EdgeInsets.only(left: 12, top: 5, bottom: 5),
                        width: 60,
                        decoration: BoxDecoration(
                            border: Border.all(
                              color: selected_20
                                  ? Color.fromARGB(255, 255, 25, 75)
                                  : Colors.grey,
                              width: 2,
                            ),
                            borderRadius: BorderRadius.circular(50)),
                        child: Text(
                          "Chạy",
                          style: TextStyle(
                              color: selected_20
                                  ? Color.fromARGB(255, 255, 25, 75)
                                  : Colors.grey,
                              fontWeight: FontWeight.bold,
                              fontSize: 14),
                        ),
                      ),
                    ),
                  ],
                ),
                SizedBox(
                  height: 30,
                ),
                InkWell(
                  borderRadius: BorderRadius.circular(60),
                  onTap: (() async {
                    if (strings.length < 5) {
                      if (selected_1 == true) {
                        strings.add("90S Kid");
                      }
                      if (selected_2 == true) {
                        strings.add("Take care of yourself");
                      }
                      if (selected_3 == true) {
                        strings.add("Hot Yoga");
                      }
                      if (selected_4 == true) {
                        strings.add("Write");
                      }
                      if (selected_5 == true) {
                        strings.add("Meditation");
                      }
                      if (selected_6 == true) {
                        strings.add("Sushi");
                      }
                      if (selected_7 == true) {
                        strings.add("Hockey");
                      }
                      if (selected_8 == true) {
                        strings.add("Basketball");
                      }
                      if (selected_9 == true) {
                        strings.add("Poetry Contest");
                      }
                      if (selected_10 == true) {
                        strings.add("Workout at home");
                      }
                      if (selected_11 == true) {
                        strings.add("Manga");
                      }
                      if (selected_12 == true) {
                        strings.add("Make up");
                      }
                      if (selected_13 == true) {
                        strings.add("Aquarium");
                      }
                      if (selected_14 == true) {
                        strings.add("Sneakers");
                      }
                      if (selected_15 == true) {
                        strings.add("Instagram");
                      }
                      if (selected_16 == true) {
                        strings.add("Hot waterfall");
                      }
                      if (selected_17 == true) {
                        strings.add("Martial Arts");
                      }
                      if (selected_18 == true) {
                        strings.add("Marvel");
                      }
                      if (selected_19 == true) {
                        strings.add("Take a walk");
                      }
                      if (selected_20 == true) {
                        strings.add("Chạy");
                      }
                    }
                    // print(strings);
                    // if (selected != null) {
                    // if (selected == "first") {
                    //   result = "Female";
                    // } else if (selected == "second") {
                    //   result = "Male";
                    // } else {
                    //   result = "Other genders";
                    // }
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                          builder: (context) => UploadImage_Page()),
                    );
                    User? user = FirebaseAuth.instance.currentUser;

                    await FirebaseFirestore.instance
                        .collection('user')
                        .doc(user?.uid)
                        .update({
                      'favorite': strings,
                    });
                  }),
                  child: Container(
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(60),
                      color: Colors.white,
                    ),
                    width: 320,
                    height: 50,
                    child: Center(
                      child: Text(
                        "",
                        style: TextStyle(
                          fontWeight: FontWeight.w500,
                        ),
                      ),
                    ),
                  ),
                ),
              ],
            ),
          )
        ],
      ),
    );
  }
}
