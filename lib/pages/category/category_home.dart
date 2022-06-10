import 'package:imibonano/pages/category/discovery.dart';
import 'package:imibonano/pages/category/foryou.dart';

import 'package:flutter/material.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'dart:ui';

class DiscoveryScreen extends StatefulWidget {
  const DiscoveryScreen({Key? key}) : super(key: key);

  @override
  State<DiscoveryScreen> createState() => _DiscoveryScreenState();
}

class _DiscoveryScreenState extends State<DiscoveryScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ListView(
        children: [
          Padding(
            padding: const EdgeInsets.only(left: 8.0, top: 10),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'Chào mừng đến với thẻ Khám phá',
                  style: TextStyle(fontWeight: FontWeight.bold, fontSize: 20),
                ),
                SizedBox(
                  height: 5,
                ),
                Text(
                  'My current inspiration',
                  style: TextStyle(color: Colors.grey),
                )
              ],
            ),
          ),
          DiscoveryCategory(),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 12),
            child: GestureDetector(
              child: SizedBox(
                height: MediaQuery.of(context).size.height / 2.7,
                width: MediaQuery.of(context).size.width / 4,
                child: Container(
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(6.0),
                    image: DecorationImage(
                      image: NetworkImage(
                          'https://marketing-images.gotinder.com/explore/VaccineCenter_header_catalog.webp'),
                      fit: BoxFit.fill,
                    ),
                  ),
                  child: Column(
                      mainAxisAlignment: MainAxisAlignment.end,
                      children: [
                        Row(
                          children: [
                            Expanded(
                                child: Padding(
                              padding: const EdgeInsets.only(bottom: 10),
                              child: ListTile(
                                title: Text(
                                  'Show this sticker my profile',
                                  style: TextStyle(
                                      color: Colors.white, fontSize: 20),
                                ),
                                subtitle: Text(
                                  'Vaccine Center',
                                  style: TextStyle(color: Colors.grey),
                                ),
                              ),
                            )),
                            Expanded(
                              child: ElevatedButton(
                                  child: Text("More stickers".toUpperCase(),
                                      style: TextStyle(
                                          fontSize: 14, color: Colors.black)),
                                  style: ButtonStyle(
                                      backgroundColor:
                                          MaterialStateProperty.all<Color>(
                                              Colors.white),
                                      shape: MaterialStateProperty.all<
                                              RoundedRectangleBorder>(
                                          RoundedRectangleBorder(
                                              borderRadius:
                                                  BorderRadius.circular(20),
                                              side: BorderSide(
                                                  color: Colors.black)))),
                                  onPressed: () => Scaffold()),
                            ),
                          ],
                        ),
                      ]),
                ),
              ),
            ),
          ),
          SizedBox(
            height: 10,
          ),
          Padding(
            padding: const EdgeInsets.only(left: 8.0, top: 10),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'For you',
                  style: TextStyle(fontWeight: FontWeight.bold, fontSize: 20),
                ),
                SizedBox(
                  height: 5,
                ),
                Text(
                  'Recommended based on your profile',
                  style: TextStyle(color: Colors.grey),
                )
              ],
            ),
          ),
          ForyouCategory(),
        ],
      ),
    );
  }
}
