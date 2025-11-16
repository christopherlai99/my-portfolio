import { Injectable } from '@angular/core';
import { ISkillItem } from '../dtos/skill-item';
import { IExperienceItem } from '../dtos/experience-item';
import { IsActiveMatchOptions } from '@angular/router';
import { ICompanyProject } from '../dtos/company-project';

@Injectable({
  providedIn: 'root',
})
export class MockdataService {
  constructor() {}

  getSkillitems(): ISkillItem[] {
    return [
      {
        title: 'my main skills',
        items: [
          'Backend Development',
          'C#',
          '.Net Core',
          '.Net Framework',
          'Flutter',
          'PostgreSQL',
          'Git',
          'Swagger',
          'Jira'
        ],
      },
      {
        title: 'further skills',
        items: [
          'AngularJS',
          'VueJS',
          'Java',
          'ReactJS',
          'MSSQL'
        ],
      },
      {
        title: 'my language skills',
        items: ['Chinese - Native Language', 'English - Good', 'Malay - Good', 'Cantonese - Beginner'],
      },
    ] as ISkillItem[];
  }

  getExperienceItems(): IExperienceItem[] {
    return [
      {
        jobtitle: 'Backend Software Engineer',
        companyName: 'Masterpay Global Sdn Bhd',
        timerange: 'October 2024 - present',
        description:
          'Developed and maintained backend APIs for the company\'s and client\'s Fintech system using .Net Core and PostgreSQL. Also developed and maintained the mobile app and web app using Flutter and Angular respectively.',
        place: 'Kuala Lumpur',
      },
      {
        jobtitle: 'Software Programmer',
        companyName: 'Accountsoft Innovation Sdn Bhd',
        timerange: 'August 2023 - October 2024',
        description:
          'Developed and maintained the backend APIs for the company main product(AC SuperApp) using .Net Core and MSSQL. Also developed some plugins of AutoCount desktop application and POS system.',
        place: 'Kuching, Sarawak',
      },
      {
        jobtitle: 'Software Engineer Intern',
        companyName: 'Finexus Internation Sdn Bhd',
        timerange: 'August 2022 - January 2023',
        description:
          'Tested and maintained the backend process for the company internal system using Java. Developed the components of the interface for the web application using ReactJS.',
        place: 'Kuala Lumpur',
      },
    ] as IExperienceItem[];
  }

  getEducationItems(): IExperienceItem[] {
    return [
      {
        jobtitle: "Bachelor's degree in Computer Science(Information Security)",
        companyName: 'Universiti Tun Hussein Onn Malaysia',
        timerange: 'September 2019 - April 2023',
        description:
          "Graduated with a CGPA of 3.43, I have learned the basics of software development and well trained with information security concerns in the development process.",
        place: 'Parit Raja, Johor',
      },
      {
        jobtitle: 'STPM',
        companyName: 'Pusat Tingkatan Enam SMK Green Road',
        timerange: '2017 - 2018',
        description:
          'Graduated with a CGPA of 2.92, I have well trained in term of self-study and discipline.',
        place: 'Kuching, Sarawak',
      },
    ] as IExperienceItem[];
  }

  getCompanyProjectItems(): ICompanyProject[] {
    return [
      {
        id: 1,
        fullname: 'MP Wallet',
        url: '',
        description: 
        'An e-wallet system target on school youth and based on physical debit card.' +
        '\nDevelop backend api service, meeting and integrate the third party payment gateway, integrate firebase messaging service, enhance the security feature.'+
        '\nHelp consult the frontend mobile app junior, corparate with the mobile and website developer team in api integration work.',
        tags: ['.net', 'Flutter'],
      },
      {
        id: 2,
        fullname: 'Pay 9',
        url: 'https://app.pay9.io/#!/',
        description: 
        'A fintech system focus on cryptocurrency and based on financial service card and encourage user to join event organized by the pubblished coin.' +
        '\nMaintain the backend api service, integrate firebase messaging service, implement the extra feature of event system.'+
        '\nDevelop the mobile app interface, include but not limit on authentication, account setup, know your customer verification.' +
        '\nHelp debug the web application and integrate the api service.',
        tags: ['.net', 'Flutter', 'AngularJS'],
      },
      {
        id: 3,
        fullname: 'Masterpay Global',
        url: 'https://webv2.masterpayglobal.com/Login',
        description: 
        'A fintech system focus on cryptocurrency and based on financial service card.' +
        '\nDevelop the mobile app interface, include but not limit on currency conversion and swap, account setting, deposit, scan transfer and google login.' +
        '\nHelp modify the responsive of the web application and develop the browsing website.' +
        '\nCoordinate the APIs integration between mobile developer team and outsource backend developer team.',
        tags: ['Flutter', 'AngularJS', 'VueJS'],
      },
      {
        id: 4,
        fullname: 'AC Super App',
        url: 'https://aisb.app/download/acsuperapp/',
        description: 
        'The main product provide by Accountsoft which integrated with AutoCount system and warehouse management system.' +
        '\nMaintain and integrate the AutoCount accounting service in the backend to help user manage the accounting document.' +
        '\nDevelop the warehouse management system based on AutoCount to help user convert accounting document to logistic document and track the logistic process.' +
        '\nDevelop the warehouse management system as a plugin in the AutoCount to allow user do the logistic process in desktop application also.',
        tags: ['.net core', '.net framework'],
      },
      {
        id: 5,
        fullname: 'Stock Inventory System',
        url: '',
        description: 
        'The POS plugin used to track the stock and lost of the meat come to outlet from slaughterhouse.' +
        '\nLet the outlet staff to key in the quantity and weight of the whole body of meat livestocks before open.' +
        '\nThe staff will continue record the quantity and weight of the waste, convertion, frozen and secondary processing before close.',
        tags: ['.net mvc', '.net framework'],
      }
    ] as ICompanyProject[];
  }
}
