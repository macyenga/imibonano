import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';

class EditSex extends StatefulWidget {
  const EditSex({Key? key}) : super(key: key);

  @override
  State<EditSex> createState() => _EditSexState();
}

class _EditSexState extends State<EditSex> {
  double _value = 100;
  bool _checkSpace = false;
  RangeValues _currentRangeValues = const RangeValues(40, 80);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: Color(0xFFECEFF1),
        appBar: AppBar(
            backgroundColor: Colors.white,
            title: Text(
              'Trend',
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
        body: ListView(children: [
          SizedBox(
            height: 10,
          ),
          Text('SELECT UP TO 3'),
          SizedBox(
            height: 10,
          ),
          Container(
              width: MediaQuery.of(context).size.width,
              color: Colors.white,
              child: Padding(
                padding: const EdgeInsets.all(5),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.start,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    CupertinoFormRow(
                      prefix: Text(
                        'Heterosexual',
                        style: TextStyle(
                          color: Colors.black,
                        ),
                      ),
                      child: CupertinoSwitch(
                        activeColor: Colors.pink,
                        value: _checkSpace,
                        onChanged: (value) {
                          setState(
                            () {
                              _checkSpace = !_checkSpace;
                            },
                          );

                          if (_checkSpace == true) {}
                        },
                      ),
                    ),
                    CupertinoFormRow(
                      prefix: Text(
                        'Gay Male',
                        style: TextStyle(
                          color: Colors.black,
                        ),
                      ),
                      child: CupertinoSwitch(
                        activeColor: Colors.pink,
                        value: _checkSpace,
                        onChanged: (value) {
                          setState(
                            () {
                              _checkSpace = !_checkSpace;
                            },
                          );

                          if (_checkSpace == true) {}
                        },
                      ),
                    ),
                    CupertinoFormRow(
                      prefix: Text(
                        'Gay Female',
                        style: TextStyle(
                          color: Colors.black,
                        ),
                      ),
                      child: CupertinoSwitch(
                        activeColor: Colors.pink,
                        value: _checkSpace,
                        onChanged: (value) {
                          setState(
                            () {
                              _checkSpace = !_checkSpace;
                            },
                          );

                          if (_checkSpace == true) {}
                        },
                      ),
                    ),
                    CupertinoFormRow(
                      prefix: Text(
                        'Bisexual',
                        style: TextStyle(
                          color: Colors.black,
                        ),
                      ),
                      child: CupertinoSwitch(
                        activeColor: Colors.pink,
                        value: _checkSpace,
                        onChanged: (value) {
                          setState(
                            () {
                              _checkSpace = !_checkSpace;
                            },
                          );

                          if (_checkSpace == true) {}
                        },
                      ),
                    ),
                    CupertinoFormRow(
                      prefix: Text(
                        'Asexual',
                        style: TextStyle(
                          color: Colors.black,
                        ),
                      ),
                      child: CupertinoSwitch(
                        activeColor: Colors.pink,
                        value: _checkSpace,
                        onChanged: (value) {
                          setState(
                            () {
                              _checkSpace = !_checkSpace;
                            },
                          );

                          if (_checkSpace == true) {}
                        },
                      ),
                    ),
                    CupertinoFormRow(
                      prefix: Text(
                        'Asia',
                        style: TextStyle(
                          color: Colors.black,
                        ),
                      ),
                      child: CupertinoSwitch(
                        activeColor: Colors.pink,
                        value: _checkSpace,
                        onChanged: (value) {
                          setState(
                            () {
                              _checkSpace = !_checkSpace;
                            },
                          );

                          if (_checkSpace == true) {}
                        },
                      ),
                    ),
                    CupertinoFormRow(
                      prefix: Text(
                        'Totality',
                        style: TextStyle(
                          color: Colors.black,
                        ),
                      ),
                      child: CupertinoSwitch(
                        activeColor: Colors.pink,
                        value: _checkSpace,
                        onChanged: (value) {
                          setState(
                            () {
                              _checkSpace = !_checkSpace;
                            },
                          );

                          if (_checkSpace == true) {}
                        },
                      ),
                    ),
                    CupertinoFormRow(
                      prefix: Text(
                        'Phi Heterosexual',
                        style: TextStyle(
                          color: Colors.black,
                        ),
                      ),
                      child: CupertinoSwitch(
                        activeColor: Colors.pink,
                        value: _checkSpace,
                        onChanged: (value) {
                          setState(
                            () {
                              _checkSpace = !_checkSpace;
                            },
                          );

                          if (_checkSpace == true) {}
                        },
                      ),
                    ),
                    CupertinoFormRow(
                      prefix: Text(
                        'Trend is not clear yet',
                        style: TextStyle(
                          color: Colors.black,
                        ),
                      ),
                      child: CupertinoSwitch(
                        activeColor: Colors.pink,
                        value: _checkSpace,
                        onChanged: (value) {
                          setState(
                            () {
                              _checkSpace = !_checkSpace;
                            },
                          );

                          if (_checkSpace == true) {}
                        },
                      ),
                    ),
                  ],
                ),
              )),
          SizedBox(
            height: 20,
          ),
          Container(
              width: MediaQuery.of(context).size.width,
              color: Colors.white,
              child: Padding(
                padding: const EdgeInsets.all(5),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.start,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    CupertinoFormRow(
                      prefix: Text(
                        'Show my Trends on profile',
                        style: TextStyle(
                          color: Colors.black,
                        ),
                      ),
                      child: CupertinoSwitch(
                        activeColor: Colors.pink,
                        value: _checkSpace,
                        onChanged: (value) {
                          setState(
                            () {
                              _checkSpace = !_checkSpace;
                            },
                          );

                          if (_checkSpace == true) {}
                        },
                      ),
                    ),
                  ],
                ),
              )),
        ]));
  }
}
