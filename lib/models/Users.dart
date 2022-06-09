import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:equatable/equatable.dart';

class Users extends Equatable {
  DateTime birthday;
  DateTime createAt;
  String email;
  final List<dynamic> favorite;
  String gender;
  final List<dynamic> img;
  String name;
  String phone;
  String school;
  String sexChoose;
  String SexOrientation;
  Users(
      {required this.birthday,
      required this.createAt,
      required this.email,
      required this.favorite,
      required this.gender,
      required this.img,
      required this.name,
      required this.phone,
      required this.school,
      required this.sexChoose,
      required this.SexOrientation});

  Map<String, dynamic> toJson() => {
        'birthday': birthday,
        'createAt': createAt,
        'email': email,
        'favorite': favorite,
        'gender': gender,
        'img': img,
        'name': name,
        'phone': phone,
        'school': school,
        'sexChoose': sexChoose,
        'SexOrientation': SexOrientation,
      };

  @override
  List<Object> get props => [
        birthday,
        createAt,
        email,
        favorite,
        gender,
        img,
        name,
        phone,
        school,
        sexChoose,
        SexOrientation,
      ];

  static Users fromSnapshot(DocumentSnapshot snap) {
    Users user = Users(
      birthday: snap['birthday'],
      createAt: snap['createAt'],
      email: snap['email'],
      favorite: snap['favorite'],
      gender: snap['gender'],
      img: snap['img'],
      name: snap['name'],
      phone: snap['phone'],
      school: snap['school'],
      sexChoose: snap['sexChoose'],
      SexOrientation: snap['SexOrientation'],
    );
    return user;
  }

  Map<String, dynamic> toMap() {
    return {
      'birthday': birthday,
      'createAt': createAt,
      'email': email,
      'favorite': favorite,
      'gender': gender,
      'img': img,
      'name': name,
      'phone': phone,
      'school': school,
      'sexChoose': sexChoose,
      'SexOrientation': SexOrientation,
    };
  }
}
