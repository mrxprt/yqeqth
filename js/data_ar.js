function getCats(callback){
var page=[
				{	
					"title":" جدول الأعمال",
					"IImage":"agenda",
					"page":"agenda.html",
					"ID":'1'
				
				},
		
				{	
					"title":"الحضور",
					"IImage":"attendees",
					"page":"attendees.html",
					"ID":2
				
				},
		
				{	
					"title":"المتحدثون",
					"IImage":"speakers",
					"page":"speakers.html",
					"ID":3
				
				},
		
				{	
					"title":"العارضون",
					"IImage":"exhibitors",
					"page":"exhibitors.html",
					"ID":4
				
				},
		
				{	
					"title":"Live Feeds",
					"IImage":"livefeeds",
					"page":"feedscats.html",
					"ID":5
				
				},
		
			
		
				{	
					"title":"خريطة الحدث",
					"IImage":"map",
					"page":"maps.html",
					"ID":7
				
				}
		
		
		];
		callback(page,'home');
}

function getEvents(callback){
var page=[
{	 				"Name":"افتتاح المعرض1",
					"Hall":"1",
					"day":"10 jan 2011",
					"Time":"9:00 Am To 11:00 Am",
					"Page":"event.html",
					"ID":1,
					"Description":"event detalis , ... ,event detalis , ... ,event detalis , ... ,event detalis , ... ,event detalis , ... ,"
				
				},
				{	 				"Name":"افتتاح المعرض2",
					"Hall":"1",
					"day":"10 jan 2011",
					"Time":"9:00 Am To 11:00 Am",
					"Page":"event.html",
					"ID":2,
					"Description":"تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , "
				
				},
				{	 				"Name":"افتتاح المعرض3",
					"Hall":"1",
					"day":"10 jan 2011",
					"Time":"9:00 Am To 11:00 Am",
					"Page":"event.html",
					"ID":3,
					"Description":"تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , "
				
				},
				{	 				"Name":"افتتاح المعرض4",
					"Hall":"1",
					"day":"10 jan 2011",
					"Time":"9:00 Am To 11:00 Am",
					"Page":"event.html",
					"ID":4,
					"Description":"تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , "
				
				},
				{	 				"Name":"افتتاح المعرض5",
					"Hall":"1",
					"day":"10 jan 2011",
					"Time":"9:00 Am To 11:00 Am",
					"Page":"event.html",
					"ID":5,
					"Description":"تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , "
				
				},
				{	 				"Name":"افتتاح المعرض6",
					"Hall":"1",
					"day":"10 jan 2011",
					"Time":"9:00 Am To 11:00 Am",
					"Page":"event.html",
					"ID":6,
					"Description":"تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , "
				
				},
				{	 				"Name":"افتتاح المعرض7",
					"Hall":"1",
					"day":"10 jan 2011",
					"Time":"9:00 Am To 11:00 Am",
					"Page":"event.html",
					"ID":7,
					"Description":"تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , "
					
				
				},
				{	 				"Name":"افتتاح المعرض8",
					"Hall":"1",
					"day":"10 jan 2011",
					"Time":"9:00 Am To 11:00 Am",
					"Page":"event.html",
					"ID":8,
					"Description":"تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , "
				
				},
				{	 				"Name":"افتتاح المعرض9",
					"Hall":"1",
					"day":"10 jan 2011",
					"Time":"9:00 Am To 11:00 Am",
					"Page":"event.html",
					"ID":9,
					"Description":"تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , تفاضيل .... , "
				
				}
				
];
		callback(page,'home');
}

function getattendees(callback){
var page=[
{	 				"Name":"يحي رجائي محروس",
					"Company":"Mobile Soft",	
					"Position":"Developer",	
					"WebSite":"http://www.mrxprt.com",
					"AboutME":"develoer .. , develoer .. , develoer .. , develoer .. , ",
					"Interest":"Java,Android,Css",
					"IImage":"images/me.jpg",
					"FaceBook":"http://www.facebook.com/yahiaragae",
					"Twitter":"http://twitter.com/mrxprt",
					"linkIn":"http://asdasd.com",
					"Country":"Egypt",
					"ID":1
					
				},
				{	 				"Name":"2يحي رجائي محروس",
					"Company":"Mobile Soft",	
					"Position":"Developer",	
					"WebSite":"http://www.mrxprt.com",
					"AboutME":"develoer .. , develoer .. , develoer .. , develoer .. , ",
					"Interest":"Java,Android,Css",
					"IImage":"images/me.jpg",
					"FaceBook":"http://www.facebook.com/yahiaragae",
					"Twitter":"http://twitter.com/mrxprt",
					"linkIn":"http://asdasd.com",
					"Country":"Egypt",
					"ID":2
					
				},{	 				"Name":"3يحي رجائي محروس",
					"Company":"Mobile Soft",	
					"Position":"Developer",	
					"WebSite":"http://www.mrxprt.com",
					"AboutME":"develoer .. , develoer .. , develoer .. , develoer .. , ",
					"Interest":"Java,Android,Css",
					"IImage":"images/me.jpg",
					"FaceBook":"http://www.facebook.com/yahiaragae",
					"Twitter":"http://twitter.com/mrxprt",
					"linkIn":"http://asdasd.com",
					"Country":"Egypt",
					"ID":3
					
				},{	 				"Name":"4يحي رجائي محروس",
					"Company":"Mobile Soft",	
					"Position":"Developer",	
					"WebSite":"http://www.mrxprt.com",
					"AboutME":"develoer .. , develoer .. , develoer .. , develoer .. , ",
					"Interest":"Java,Android,Css",
					"IImage":"images/me.jpg",
					"FaceBook":"http://www.facebook.com/yahiaragae",
					"Twitter":"http://twitter.com/mrxprt",
					"linkIn":"http://asdasd.com",
					"Country":"Egypt",
					"ID":4
					
				},{	 				"Name":"5يحي رجائي محروس",
					"Company":"Mobile Soft",	
					"Position":"Developer",	
					"WebSite":"http://www.mrxprt.com",
					"AboutME":"develoer .. , develoer .. , develoer .. , develoer .. , ",
					"Interest":"Java,Android,Css",
					"IImage":"images/me.jpg",
					"FaceBook":"http://www.facebook.com/yahiaragae",
					"Twitter":"http://twitter.com/mrxprt",
					"linkIn":"http://asdasd.com",
					"Country":"Egypt",
					"ID":5
					
				},{	 				"Name":"6يحي رجائي محروس",
					"Company":"Mobile Soft",	
					"Position":"Developer",	
					"WebSite":"http://www.mrxprt.com",
					"AboutME":"develoer .. , develoer .. , develoer .. , develoer .. , ",
					"Interest":"Java,Android,Css",
					"IImage":"images/me.jpg",
					"FaceBook":"http://www.facebook.com/yahiaragae",
					"Twitter":"http://twitter.com/mrxprt",
					"linkIn":"http://asdasd.com",
					"Country":"Egypt",
					"ID":6
					
				},{	 				"Name":"7يحي رجائي محروس",
					"Company":"Mobile Soft",	
					"Position":"Developer",	
					"WebSite":"http://www.mrxprt.com",
					"AboutME":"develoer .. , develoer .. , develoer .. , develoer .. , ",
					"Interest":"Java,Android,Css",
					"IImage":"images/me.jpg",
					"FaceBook":"http://www.facebook.com/yahiaragae",
					"Twitter":"http://twitter.com/mrxprt",
					"linkIn":"http://asdasd.com",
					"Country":"Egypt",
					"ID":7
					
				},{	 				"Name":"8يحي رجائي محروس",
					"Company":"Mobile Soft",	
					"Position":"Developer",	
					"WebSite":"http://www.mrxprt.com",
					"AboutME":"develoer .. , develoer .. , develoer .. , develoer .. , ",
					"Interest":"Java,Android,Css",
					"IImage":"images/me.jpg",
					"FaceBook":"http://www.facebook.com/yahiaragae",
					"Twitter":"http://twitter.com/mrxprt",
					"linkIn":"http://asdasd.com",
					"Country":"Egypt",
					"ID":8
					
				},{	 				"Name":"9يحي رجائي محروس",
					"Company":"Mobile Soft",	
					"Position":"Developer",	
					"WebSite":"http://www.mrxprt.com",
					"AboutME":"develoer .. , develoer .. , develoer .. , develoer .. , ",
					"Interest":"Java,Android,Css",
					"IImage":"images/me.jpg",
					"FaceBook":"http://www.facebook.com/yahiaragae",
					"Twitter":"http://twitter.com/mrxprt",
					"linkIn":"http://asdasd.com",
					"Country":"Egypt",
					"ID":9
					
				},{	 				"Name":"10يحي رجائي محروس",
					"Company":"Mobile Soft",	
					"Position":"Developer",	
					"WebSite":"http://www.mrxprt.com",
					"AboutME":"develoer .. , develoer .. , develoer .. , develoer .. , ",
					"Interest":"Java,Android,Css",
					"IImage":"images/me.jpg",
					"FaceBook":"http://www.facebook.com/yahiaragae",
					"Twitter":"http://twitter.com/mrxprt",
					"linkIn":"http://asdasd.com",
					"Country":"Egypt",
					"ID":10
					
				},{	 				"Name":"11يحي رجائي محروس",
					"Company":"Mobile Soft",	
					"Position":"Developer",	
					"WebSite":"http://www.mrxprt.com",
					"AboutME":"develoer .. , develoer .. , develoer .. , develoer .. , ",
					"Interest":"Java,Android,Css",
					"IImage":"images/me.jpg",
					"FaceBook":"http://www.facebook.com/yahiaragae",
					"Twitter":"http://twitter.com/mrxprt",
					"linkIn":"http://asdasd.com",
					"Country":"Egypt",
					"ID":11
					
				},{	 				"Name":"12يحي رجائي محروس",
					"Company":"Mobile Soft",	
					"Position":"Developer",	
					"WebSite":"http://www.mrxprt.com",
					"AboutME":"develoer .. , develoer .. , develoer .. , develoer .. , ",
					"Interest":"Java,Android,Css",
					"IImage":"images/me.jpg",
					"FaceBook":"http://www.facebook.com/yahiaragae",
					"Twitter":"http://twitter.com/mrxprt",
					"linkIn":"http://asdasd.com",
					"Country":"Egypt",
					"ID":12
					
				}
				
				
];
		callback(page,'home');
}

function getspeakers(callback){
var page=[
{	 				"Name":"يحي رجائي محروس",
					"Company":"Mobile Soft",	
					"Position":"Developer",	
					"WebSite":"http://www.mrxprt.com",
					"AboutME":"develoer .. , develoer .. , develoer .. , develoer .. , ",
					"Interest":"Java,Android,Css",
					"IImage":"images/me.jpg",
					"FaceBook":"http://www.facebook.com/yahiaragae",
					"Twitter":"http://twitter.com/mrxprt",
					"linkIn":"http://asdasd.com",
					"Country":"Egypt",
					"ID":1
					
				},
				{	 				"Name":"2يحي رجائي محروس",
					"Company":"Mobile Soft",	
					"Position":"Developer",	
					"WebSite":"http://www.mrxprt.com",
					"AboutME":"develoer .. , develoer .. , develoer .. , develoer .. , ",
					"Interest":"Java,Android,Css",
					"IImage":"images/me.jpg",
					"FaceBook":"http://www.facebook.com/yahiaragae",
					"Twitter":"http://twitter.com/mrxprt",
					"linkIn":"http://asdasd.com",
					"Country":"Egypt",
					"ID":2
					
				},{	 				"Name":"3يحي رجائي محروس",
					"Company":"Mobile Soft",	
					"Position":"Developer",	
					"WebSite":"http://www.mrxprt.com",
					"AboutME":"develoer .. , develoer .. , develoer .. , develoer .. , ",
					"Interest":"Java,Android,Css",
					"IImage":"images/me.jpg",
					"FaceBook":"http://www.facebook.com/yahiaragae",
					"Twitter":"http://twitter.com/mrxprt",
					"linkIn":"http://asdasd.com",
					"Country":"Egypt",
					"ID":3
					
				},{	 				"Name":"4يحي رجائي محروس",
					"Company":"Mobile Soft",	
					"Position":"Developer",	
					"WebSite":"http://www.mrxprt.com",
					"AboutME":"develoer .. , develoer .. , develoer .. , develoer .. , ",
					"Interest":"Java,Android,Css",
					"IImage":"images/me.jpg",
					"FaceBook":"http://www.facebook.com/yahiaragae",
					"Twitter":"http://twitter.com/mrxprt",
					"linkIn":"http://asdasd.com",
					"Country":"Egypt",
					"ID":4
					
				},{	 				"Name":"5يحي رجائي محروس",
					"Company":"Mobile Soft",	
					"Position":"Developer",	
					"WebSite":"http://www.mrxprt.com",
					"AboutME":"develoer .. , develoer .. , develoer .. , develoer .. , ",
					"Interest":"Java,Android,Css",
					"IImage":"images/me.jpg",
					"FaceBook":"http://www.facebook.com/yahiaragae",
					"Twitter":"http://twitter.com/mrxprt",
					"linkIn":"http://asdasd.com",
					"Country":"Egypt",
					"ID":5
					
				},{	 				"Name":"6يحي رجائي محروس",
					"Company":"Mobile Soft",	
					"Position":"Developer",	
					"WebSite":"http://www.mrxprt.com",
					"AboutME":"develoer .. , develoer .. , develoer .. , develoer .. , ",
					"Interest":"Java,Android,Css",
					"IImage":"images/me.jpg",
					"FaceBook":"http://www.facebook.com/yahiaragae",
					"Twitter":"http://twitter.com/mrxprt",
					"linkIn":"http://asdasd.com",
					"Country":"Egypt",
					"ID":6
					
				},{	 				"Name":"7يحي رجائي محروس",
					"Company":"Mobile Soft",	
					"Position":"Developer",	
					"WebSite":"http://www.mrxprt.com",
					"AboutME":"develoer .. , develoer .. , develoer .. , develoer .. , ",
					"Interest":"Java,Android,Css",
					"IImage":"images/me.jpg",
					"FaceBook":"http://www.facebook.com/yahiaragae",
					"Twitter":"http://twitter.com/mrxprt",
					"linkIn":"http://asdasd.com",
					"Country":"Egypt",
					"ID":7
					
				},{	 				"Name":"8يحي رجائي محروس",
					"Company":"Mobile Soft",	
					"Position":"Developer",	
					"WebSite":"http://www.mrxprt.com",
					"AboutME":"develoer .. , develoer .. , develoer .. , develoer .. , ",
					"Interest":"Java,Android,Css",
					"IImage":"images/me.jpg",
					"FaceBook":"http://www.facebook.com/yahiaragae",
					"Twitter":"http://twitter.com/mrxprt",
					"linkIn":"http://asdasd.com",
					"Country":"Egypt",
					"ID":8
					
				},{	 				"Name":"9يحي رجائي محروس",
					"Company":"Mobile Soft",	
					"Position":"Developer",	
					"WebSite":"http://www.mrxprt.com",
					"AboutME":"develoer .. , develoer .. , develoer .. , develoer .. , ",
					"Interest":"Java,Android,Css",
					"IImage":"images/me.jpg",
					"FaceBook":"http://www.facebook.com/yahiaragae",
					"Twitter":"http://twitter.com/mrxprt",
					"linkIn":"http://asdasd.com",
					"Country":"Egypt",
					"ID":9
					
				},{	 				"Name":"10يحي رجائي محروس",
					"Company":"Mobile Soft",	
					"Position":"Developer",	
					"WebSite":"http://www.mrxprt.com",
					"AboutME":"develoer .. , develoer .. , develoer .. , develoer .. , ",
					"Interest":"Java,Android,Css",
					"IImage":"images/me.jpg",
					"FaceBook":"http://www.facebook.com/yahiaragae",
					"Twitter":"http://twitter.com/mrxprt",
					"linkIn":"http://asdasd.com",
					"Country":"Egypt",
					"ID":10
					
				},{	 				"Name":"11يحي رجائي محروس",
					"Company":"Mobile Soft",	
					"Position":"Developer",	
					"WebSite":"http://www.mrxprt.com",
					"AboutME":"develoer .. , develoer .. , develoer .. , develoer .. , ",
					"Interest":"Java,Android,Css",
					"IImage":"images/me.jpg",
					"FaceBook":"http://www.facebook.com/yahiaragae",
					"Twitter":"http://twitter.com/mrxprt",
					"linkIn":"http://asdasd.com",
					"Country":"Egypt",
					"ID":11
					
				},{	 				"Name":"12يحي رجائي محروس",
					"Company":"Mobile Soft",	
					"Position":"Developer",	
					"WebSite":"http://www.mrxprt.com",
					"AboutME":"develoer .. , develoer .. , develoer .. , develoer .. , ",
					"Interest":"Java,Android,Css",
					"IImage":"images/me.jpg",
					"FaceBook":"http://www.facebook.com/yahiaragae",
					"Twitter":"http://twitter.com/mrxprt",
					"linkIn":"http://asdasd.com",
					"Country":"Egypt",
					"ID":12
					
				}
				
				
];
		callback(page,'home');
}


function getexhibitors(callback){
var page=[
{	 				"CompnayName":"Mobile Soft1",
					"IImage":"images/mobilesoftlogo.png",
					"AboutCompnay":" نبذة عن الشركة ...نبذة عن الشركة ...نبذة عن الشركة ...نبذة عن الشركة ...نبذة عن الشركة ...نبذة عن الشركة ...<br>Mobile Soft Movile Apps Company , ..Mobile Soft Movile Apps Company , ..Mobile Soft Movile Apps Company , ..Mobile Soft Movile Apps Company , ..Mobile Soft Movile Apps Company , ..Mobile Soft Movile Apps Company , ..",	
					"WebSite":"http://www.mrxprt.com",
					"Phone":"009660000000",
					"FaceBook":"http://www.facebook.com/yahiaragae",
					"Twitter":"http://twitter.com/mrxprt",
					"linkIn":"http://asdasd.com",
					"Country":"Egypt",
					"ID":1
					
				}
];
		callback(page,'home');
}